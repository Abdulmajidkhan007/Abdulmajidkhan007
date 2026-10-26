// Ariza formasi -> Telegram guruh. Bot tokeni faqat shu yerda (Worker secret),
// saytning o'zida hech qanday kalit yo'q.

interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
  ALLOWED_ORIGIN: string;
}

interface Ariza {
  ism: string;
  tel: string;
  paket: string;
  tavsif: string;
  sayt: string; // honeypot: odam to'ldirmaydi, bot to'ldiradi
}

const LIMITS = { ism: 60, tel: 20, paket: 60, tavsif: 800 } as const;
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;

// ALLOWED_ORIGIN — vergul bilan ajratilgan ro'yxat (xizmatlar sayti + portfolio).
function allowedOrigins(env: Env): string[] {
  return env.ALLOWED_ORIGIN.split(",").map((o) => o.trim()).filter(Boolean);
}

function cors(env: Env, origin: string | null): HeadersInit {
  const list = allowedOrigins(env);
  return {
    "Access-Control-Allow-Origin": origin && list.includes(origin) ? origin : list[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function json(body: unknown, status: number, env: Env, origin: string | null): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...cors(env, origin) },
  });
}

function str(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function parse(body: unknown): Ariza | null {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;
  const ariza: Ariza = {
    ism: str(b.ism, LIMITS.ism),
    tel: str(b.tel, LIMITS.tel),
    paket: str(b.paket, LIMITS.paket),
    tavsif: str(b.tavsif, LIMITS.tavsif),
    sayt: str(b.sayt, 200),
  };
  if (!ariza.ism || !ariza.paket || !PHONE_RE.test(ariza.tel)) return null;
  return ariza;
}

function message(a: Ariza): string {
  return [
    "📥 <b>Saytdan yangi ariza</b>",
    `👤 ${escapeHtml(a.ism)}`,
    `📞 ${escapeHtml(a.tel)}`,
    `📦 ${escapeHtml(a.paket)}`,
    a.tavsif ? `📝 ${escapeHtml(a.tavsif)}` : "",
  ].filter(Boolean).join("\n");
}

// Portfolio (abdulmajidkhan-portfolio.web.app) aloqa formasi. Maydonlar va xabarlar
// portfolio-3d/functions/src/validate.ts bilan bir xil — forma xatoni maydon yonida ko'rsatadi.
interface Contact {
  name: string;
  email: string;
  message: string;
}
type ContactResult = { ok: true; data: Contact } | { ok: false; error: string; field?: keyof Contact };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CONTACT_LIMITS = { name: 100, email: 254, message: 4000, messageMin: 10 } as const;

function clean(value: unknown): string {
  // eslint-disable-next-line no-control-regex
  return typeof value === "string" ? value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim() : "";
}

function parseContact(body: unknown): ContactResult | "bot" {
  if (typeof body !== "object" || body === null) return { ok: false, error: "invalid" };
  const b = body as Record<string, unknown>;
  if (clean(b.botField) || clean(b["bot-field"])) return "bot";
  const name = clean(b.name);
  const email = clean(b.email);
  const message = clean(b.message);
  if (!name) return { ok: false, error: "Ism kiritilmagan", field: "name" };
  if (name.length > CONTACT_LIMITS.name) return { ok: false, error: `Ism ${CONTACT_LIMITS.name} belgidan uzun`, field: "name" };
  if (!email) return { ok: false, error: "Email kiritilmagan", field: "email" };
  if (email.length > CONTACT_LIMITS.email || !EMAIL_RE.test(email)) return { ok: false, error: "Email formati noto'g'ri", field: "email" };
  if (!message) return { ok: false, error: "Xabar kiritilmagan", field: "message" };
  if (message.length < CONTACT_LIMITS.messageMin) return { ok: false, error: `Xabar kamida ${CONTACT_LIMITS.messageMin} belgi bo'lsin`, field: "message" };
  if (message.length > CONTACT_LIMITS.message) return { ok: false, error: `Xabar ${CONTACT_LIMITS.message} belgidan uzun`, field: "message" };
  return { ok: true, data: { name, email, message } };
}

function contactMessage(c: Contact): string {
  return [
    "📬 <b>Portfoliodan yangi xabar</b>",
    "",
    `<b>Ism:</b> ${escapeHtml(c.name)}`,
    `<b>Email:</b> ${escapeHtml(c.email)}`,
    "",
    escapeHtml(c.message),
  ].join("\n");
}

async function sendTelegram(env: Env, text: string): Promise<boolean> {
  const tg = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, parse_mode: "HTML" }),
  });
  return tg.ok;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const allowed = origin !== null && allowedOrigins(env).includes(origin);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(env, origin) });
    if (request.method !== "POST") return json({ ok: false }, 405, env, origin);
    if (!allowed) return json({ ok: false }, 403, env, origin);

    const path = new URL(request.url).pathname;
    const body = await request.json().catch(() => null);

    if (path === "/contact") {
      const parsed = parseContact(body);
      // Honeypot: bot "ok" ko'radi, lekin hech narsa yuborilmaydi.
      if (parsed === "bot") return json({ ok: true }, 200, env, origin);
      if (!parsed.ok) return json({ ok: false, error: parsed.error, field: parsed.field }, 400, env, origin);
      const sent = await sendTelegram(env, contactMessage(parsed.data));
      return json({ ok: sent }, sent ? 200 : 502, env, origin);
    }

    const ariza = parse(body);
    if (!ariza) return json({ ok: false, error: "invalid" }, 400, env, origin);
    // Honeypot to'lgan bo'lsa — spam bot. Unga "ok" deymiz, lekin yubormaymiz.
    if (ariza.sayt) return json({ ok: true }, 200, env, origin);

    const sent = await sendTelegram(env, message(ariza));
    return json({ ok: sent }, sent ? 200 : 502, env, origin);
  },
};
