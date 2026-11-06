// Ariza formalari -> bitta Telegram guruh. Bot tokeni faqat shu yerda (Worker secret),
// saytlarda hech qanday kalit yo'q. Endpoint'lar:
//   POST /         — xizmatlar sayti (ism, tel, tavsif, ...)
//   POST /contact  — portfolio aloqa formasi
//   POST /ariza    — boshqa saytlar uchun umumiy forma

import { parseGeneric } from "./generic.ts";
import { parseContact } from "./contact.ts";
import { refererPath, parseSites, siteName } from "./sites.ts";
import { arizaBody, compose, contactBody, genericBody, sendTelegram, type TelegramEnv } from "./telegram.ts";
import { emailDomain, hasMx, parseAriza } from "./validate.ts";

interface Env extends TelegramEnv {
  /** JSON: { "https://sayt.uz": "Sayt nomi" } */
  SITES: string;
}

type Outcome =
  | { kind: "send"; body: string[] }
  | { kind: "spam" }
  | { kind: "reject"; error: string; field?: string };

type Handler = (body: unknown) => Promise<Outcome>;

const emailHasMx = (email: string): Promise<boolean> => hasMx(emailDomain(email), (url, init) => fetch(url, init));
const badEmail: Outcome = { kind: "reject", error: "Email manzil noto'g'ri", field: "email" };

const handlers: ReadonlyMap<string, Handler> = new Map<string, Handler>(Object.entries({
  "/": async (raw) => {
    const r = parseAriza(raw);
    if (!r.ok) return { kind: "reject", error: r.error, field: r.field };
    // Honeypot to'lgan bo'lsa — spam bot: "ok" deymiz, lekin yubormaymiz.
    if (r.data.sayt) return { kind: "spam" };
    if (r.data.email && !(await emailHasMx(r.data.email))) return badEmail;
    return { kind: "send", body: arizaBody(r.data) };
  },
  "/contact": async (raw) => {
    const r = parseContact(raw);
    if ("bot" in r) return { kind: "spam" };
    if (!r.ok) return { kind: "reject", error: r.error, field: r.field };
    if (r.data.email && !(await emailHasMx(r.data.email))) {
      return { kind: "reject", error: "Email domeni pochta qabul qilmaydi", field: "email" };
    }
    return { kind: "send", body: contactBody(r.data) };
  },
  "/ariza": async (raw) => {
    const r = parseGeneric(raw);
    if ("bot" in r) return { kind: "spam" };
    if (!r.ok) return { kind: "reject", error: r.error, field: r.field };
    if (r.data.email && !(await emailHasMx(r.data.email))) return badEmail;
    return { kind: "send", body: genericBody(r.data) };
  },
}));

function corsHeaders(allowOrigin: string | null): Record<string, string> {
  return {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
    ...(allowOrigin ? { "Access-Control-Allow-Origin": allowOrigin } : {}),
  };
}

function respond(body: unknown, status: number, allowOrigin: string | null): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(allowOrigin) },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const sites = parseSites(env.SITES);
    if (!sites.ok) {
      console.error(`[ariza-worker] sozlama xatosi: ${sites.error}`);
      return respond({ ok: false, error: "server sozlamasi xato" }, 500, null);
    }

    const origin = request.headers.get("Origin");
    const site = siteName(sites.sites, origin);
    const allowOrigin = site ? origin : null;

    if (request.method === "OPTIONS") return new Response(null, { status: site ? 204 : 403, headers: corsHeaders(allowOrigin) });
    if (request.method !== "POST") return respond({ ok: false }, 405, allowOrigin);
    if (!site) return respond({ ok: false }, 403, null);

    const url = new URL(request.url);
    const handler = handlers.get(url.pathname);
    if (!handler) return respond({ ok: false }, 404, allowOrigin);

    const outcome = await handler(await request.json().catch(() => null));
    if (outcome.kind === "spam") return respond({ ok: true }, 200, allowOrigin);
    if (outcome.kind === "reject") return respond({ ok: false, error: outcome.error, field: outcome.field }, 400, allowOrigin);

    const text = compose(site, refererPath(request.headers.get("Referer")), outcome.body);
    const sent = await sendTelegram(env, text);
    return respond({ ok: sent }, sent ? 200 : 502, allowOrigin);
  },
};
