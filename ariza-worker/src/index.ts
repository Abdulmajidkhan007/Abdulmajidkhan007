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

function cors(env: Env): HeadersInit {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function json(body: unknown, status: number, env: Env): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...cors(env) },
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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(env) });
    if (request.method !== "POST") return json({ ok: false }, 405, env);
    if (request.headers.get("Origin") !== env.ALLOWED_ORIGIN) return json({ ok: false }, 403, env);

    const ariza = parse(await request.json().catch(() => null));
    if (!ariza) return json({ ok: false, error: "invalid" }, 400, env);
    // Honeypot to'lgan bo'lsa — spam bot. Unga "ok" deymiz, lekin yubormaymiz.
    if (ariza.sayt) return json({ ok: true }, 200, env);

    const tg = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text: message(ariza), parse_mode: "HTML" }),
    });
    return json({ ok: tg.ok }, tg.ok ? 200 : 502, env);
  },
};
