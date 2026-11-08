// Ariza holati tugmalari va Telegram webhook (`POST /tg`).
// Webhook secret'i bot tokenidan HMAC bilan hosil qilinadi — alohida secret saqlanmaydi.

import { escapeHtml, tgApi, type InlineKeyboard, type TelegramEnv } from "./telegram.ts";
import { isRecord } from "./common.ts";

export const STATUSES = {
  talked: "📞 Gaplashdim",
  agreed: "✅ Kelishdik",
  rejected: "❌ Rad",
} as const;
export type LeadStatus = keyof typeof STATUSES;

const STATUS_KEYS = Object.keys(STATUSES) as LeadStatus[];
const CALLBACK_RE = /^lead:(talked|agreed|rejected)$/;
const STATUS_LINE_RE = /^Holat: /;
const WEBHOOK_SECRET_LABEL = "ariza-worker/tg-webhook";

export interface LeadEnv extends TelegramEnv {
  /** "on" bo'lsa arizalarga tugmalar qo'shiladi (webhook ulangan bo'lishi shart). */
  LEAD_BUTTONS?: string;
}

export const buttonsEnabled = (env: LeadEnv): boolean => env.LEAD_BUTTONS === "on";

/** Bir qatorli klaviatura; `current` belgilangan bo'lsa, uning oldiga "•" qo'yiladi. */
export function leadKeyboard(current?: LeadStatus): InlineKeyboard {
  return {
    inline_keyboard: [
      STATUS_KEYS.map((s) => ({
        text: s === current ? `• ${STATUSES[s]}` : STATUSES[s],
        callback_data: `lead:${s}`,
      })),
    ],
  };
}

const toHex = (buf: ArrayBuffer): string =>
  [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

/** HMAC-SHA256(kalit = bot tokeni, matn = ichki yorliq), hex. Telegram `secret_token` talabiga mos
 *  (A–Z a–z 0–9 _ -, ≤ 256). Deploy workflow'i xuddi shuni `openssl` bilan hisoblaydi. */
export async function webhookSecret(botToken: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(botToken), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return toHex(await crypto.subtle.sign("HMAC", key, enc.encode(WEBHOOK_SECRET_LABEL)));
}

/** Vaqt bo'yicha o'zgarmas taqqoslash (uzunlik farqi baribir ochiladi — secret uzunligi ma'lum). */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Toshkent vaqti: `08.11.2026 14:05`. */
export function formatTashkent(date: Date): string {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tashkent", day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(date).map((x) => [x.type, x.value]),
  );
  return `${p.day}.${p.month}.${p.year} ${p.hour}:${p.minute}`;
}

interface Entity { type: string; offset: number; length: number }

/** Telegram oddiy matn + entity'lardan HTML qaytaradi (biz faqat `bold` ishlatamiz). */
export function textToHtml(text: string, entities: readonly Entity[]): string {
  const bold = entities.filter((e) => e.type === "bold").sort((a, b) => a.offset - b.offset);
  let out = "";
  let pos = 0;
  for (const e of bold) {
    if (e.offset < pos) continue;
    out += escapeHtml(text.slice(pos, e.offset)) + `<b>${escapeHtml(text.slice(e.offset, e.offset + e.length))}</b>`;
    pos = e.offset + e.length;
  }
  return out + escapeHtml(text.slice(pos));
}

/** Oldingi "Holat: ..." qatorini (oxirgi qator bo'lsa) olib tashlab, yangisini qo'shadi. */
export function withStatusLine(text: string, entities: readonly Entity[], line: string): string {
  const cut = text.lastIndexOf("\n");
  const hasOld = cut >= 0 && STATUS_LINE_RE.test(text.slice(cut + 1));
  const base = hasOld ? text.slice(0, cut).replace(/\n+$/, "") : text;
  const keep = entities.filter((e) => e.offset + e.length <= base.length);
  return `${textToHtml(base, keep)}\n\n${escapeHtml(line)}`;
}

function actor(from: unknown): string {
  if (!isRecord(from)) return "noma'lum";
  if (typeof from.username === "string" && from.username) return `@${from.username}`;
  const name = [from.first_name, from.last_name].filter((x): x is string => typeof x === "string" && x !== "").join(" ");
  return name || "noma'lum";
}

interface Callback {
  id: string;
  status: LeadStatus | null;
  chatId: string;
  messageId: number;
  text: string;
  entities: Entity[];
  from: unknown;
}

function parseCallback(update: unknown): Callback | null {
  if (!isRecord(update) || !isRecord(update.callback_query)) return null;
  const q = update.callback_query;
  const m = q.message;
  if (typeof q.id !== "string" || !isRecord(m) || !isRecord(m.chat)) return null;
  if (typeof m.chat.id !== "number" && typeof m.chat.id !== "string") return null;
  if (typeof m.message_id !== "number" || typeof m.text !== "string") return null;
  const match = typeof q.data === "string" ? CALLBACK_RE.exec(q.data) : null;
  const entities = Array.isArray(m.entities)
    ? m.entities.filter((e): e is Entity => isRecord(e) && typeof e.type === "string" && typeof e.offset === "number" && typeof e.length === "number")
    : [];
  return {
    id: q.id,
    status: match ? (match[1] as LeadStatus) : null,
    chatId: String(m.chat.id),
    messageId: m.message_id,
    text: m.text,
    entities,
    from: q.from,
  };
}

/** `POST /tg`: secret tekshiriladi, faqat `TELEGRAM_CHAT_ID` guruhidan kelgan callback qabul qilinadi. */
export async function handleWebhook(request: Request, env: LeadEnv, now: Date = new Date()): Promise<Response> {
  const given = request.headers.get("X-Telegram-Bot-Api-Secret-Token") ?? "";
  if (!safeEqual(given, await webhookSecret(env.TELEGRAM_BOT_TOKEN))) return new Response(null, { status: 403 });

  // Telegram 200 bo'lmasa qayta yuboraveradi — shuning uchun bu yerdan keyin doim 200.
  const cb = parseCallback(await request.json().catch(() => null));
  if (!cb || cb.chatId !== String(env.TELEGRAM_CHAT_ID)) return Response.json({ ok: false });
  if (!cb.status) {
    await tgApi(env, "answerCallbackQuery", { callback_query_id: cb.id });
    return Response.json({ ok: false });
  }

  const line = `Holat: ${STATUSES[cb.status]} — ${actor(cb.from)}, ${formatTashkent(now)}`;
  const edited = await tgApi(env, "editMessageText", {
    chat_id: cb.chatId,
    message_id: cb.messageId,
    text: withStatusLine(cb.text, cb.entities, line),
    parse_mode: "HTML",
    reply_markup: leadKeyboard(cb.status),
  });
  await tgApi(env, "answerCallbackQuery", { callback_query_id: cb.id, text: edited ? STATUSES[cb.status] : "Xatolik, qayta urinib ko'ring" });
  return Response.json({ ok: edited });
}
