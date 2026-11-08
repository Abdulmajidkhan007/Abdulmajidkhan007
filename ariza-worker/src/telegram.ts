// Telegram xabarlarini yig'ish va yuborish. Bot tokeni faqat Worker secret'ida.

import type { Ariza } from "./validate.ts";
import type { Contact } from "./contact.ts";
import type { GenericAriza } from "./generic.ts";

export interface TelegramEnv {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
}

export function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Har xabar: `📥 Yangi ariza — <manba>` + (ixtiyoriy) sahifa yo'li + endpoint matni.
 *  Yo'l faqat ma'noli bo'lsa yoziladi: bo'sh yoki bosh sahifa (`/`) — yozilmaydi. */
export function compose(site: string, path: string | null, body: string[]): string {
  return [
    `📥 <b>Yangi ariza — ${escapeHtml(site)}</b>`,
    ...(path && path !== "/" ? [`🔗 ${escapeHtml(path)}`] : []),
    ...body,
  ].join("\n");
}

export function arizaBody(a: Ariza): string[] {
  return [
    `👤 ${escapeHtml(a.ism)}`,
    `📞 ${escapeHtml(a.tel)}`,
    ...(a.email ? [`✉️ ${escapeHtml(a.email)}`] : []),
    ...(a.telegram ? [`✈️ ${escapeHtml(a.telegram)}`] : []),
    ...(a.paket ? [`📦 ${escapeHtml(a.paket)}`] : []),
    ...(a.jami ? [`💰 ${escapeHtml(a.jami)}`] : []),
    `📝 ${escapeHtml(a.tavsif)}`,
  ];
}

export function contactBody(c: Contact): string[] {
  return [
    "",
    `<b>Ism:</b> ${escapeHtml(c.name)}`,
    `<b>Telefon:</b> ${escapeHtml(c.phone)}`,
    ...(c.email ? [`<b>Email:</b> ${escapeHtml(c.email)}`] : []),
    ...(c.telegram ? [`<b>Telegram:</b> ${escapeHtml(c.telegram)}`] : []),
    "",
    escapeHtml(c.message),
  ];
}

export function genericBody(a: GenericAriza): string[] {
  return [
    `👤 ${escapeHtml(a.ism)}`,
    `📞 ${escapeHtml(a.tel)}`,
    ...(a.email ? [`✉️ ${escapeHtml(a.email)}`] : []),
    ...(a.telegram ? [`✈️ ${escapeHtml(a.telegram)}`] : []),
    ...(a.xabar ? [`📝 ${escapeHtml(a.xabar)}`] : []),
  ];
}

export interface InlineKeyboard {
  inline_keyboard: { text: string; callback_data: string }[][];
}

/** Bot API chaqiruvi; muvaffaqiyat (`res.ok`) qaytaradi. */
export async function tgApi(env: TelegramEnv, method: string, payload: Record<string, unknown>): Promise<boolean> {
  const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

export function sendTelegram(env: TelegramEnv, text: string, replyMarkup?: InlineKeyboard): Promise<boolean> {
  return tgApi(env, "sendMessage", {
    chat_id: env.TELEGRAM_CHAT_ID,
    text,
    parse_mode: "HTML",
    ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
  });
}
