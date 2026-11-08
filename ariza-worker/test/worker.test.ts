import { afterEach, beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import worker from "../src/index.ts";
import { parseSites } from "../src/sites.ts";

const SITES = {
  "https://abdulmajidkhan007.github.io": "Xizmatlar sayti",
  "https://abdulmajidkhan-portfolio.web.app": "Portfolio",
  "https://yangi.uz": "Yangi <sayt>",
};
const env = { TELEGRAM_BOT_TOKEN: "test-token", TELEGRAM_CHAT_ID: "-100", SITES: JSON.stringify(SITES) };
const SERVICES = "https://abdulmajidkhan007.github.io";
const PORTFOLIO = "https://abdulmajidkhan-portfolio.web.app";

interface TgCall { chat_id: string; text: string; parse_mode: string }
let telegram: TgCall[];
let dnsQueries: string[];
let mxExists: boolean;
let telegramOk: boolean;
const realFetch = globalThis.fetch;

beforeEach(() => {
  telegram = [];
  dnsQueries = [];
  mxExists = true;
  telegramOk = true;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const url = String(input);
    if (url.startsWith("https://api.telegram.org/")) {
      telegram.push(JSON.parse(String(init?.body)) as TgCall);
      return new Response("{}", { status: telegramOk ? 200 : 500 });
    }
    if (url.startsWith("https://cloudflare-dns.com/")) {
      dnsQueries.push(url);
      return Response.json(mxExists ? { Status: 0, Answer: [{ type: 15 }] } : { Status: 3 });
    }
    throw new Error(`kutilmagan fetch: ${url}`);
  }) as typeof fetch;
});
afterEach(() => { globalThis.fetch = realFetch; });

function post(path: string, body: unknown, headers: Record<string, string> = {}, e = env): Promise<Response> {
  return worker.fetch(
    new Request(`https://ariza.example.workers.dev${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(body),
    }),
    e,
  );
}

const ariza = { ism: "Jasur", tel: "+998 90 123-45-67", tavsif: "Do'kon uchun bot kerak", paket: "Telegram bot" };
const contact = { name: "Aziza", phone: "+998 (90) 123-45-67", message: "Salom, loyiha haqida gaplashamiz" };
const generic = { ism: "Bobur", tel: "998901234567" };

describe("manba nomi Origin'dan", () => {
  it("sarlavhada Origin ro'yxatidagi nom chiqadi (3 endpoint uchun ham)", async () => {
    await post("/", ariza, { Origin: SERVICES });
    await post("/contact", contact, { Origin: PORTFOLIO });
    await post("/ariza", generic, { Origin: "https://yangi.uz" });
    assert.equal(telegram.length, 3);
    assert.match(telegram[0]!.text, /^📥 <b>Yangi ariza — Xizmatlar sayti<\/b>/);
    assert.match(telegram[1]!.text, /^📥 <b>Yangi ariza — Portfolio<\/b>/);
    // nom HTML'dan qochiriladi
    assert.match(telegram[2]!.text, /^📥 <b>Yangi ariza — Yangi &lt;sayt&gt;<\/b>/);
    assert.equal(telegram[0]!.parse_mode, "HTML");
    assert.equal(telegram[0]!.chat_id, "-100");
  });

  it("soxta 'manba' / 'sayt nomi' maydonlari e'tiborga olinmaydi", async () => {
    const res = await post("/ariza", { ...generic, manba: "Hack", source: "Hack", site: "Hack", sayt_nomi: "Hack" }, { Origin: PORTFOLIO });
    assert.equal(res.status, 200);
    assert.match(telegram[0]!.text, /— Portfolio<\/b>/);
    assert.ok(!telegram[0]!.text.includes("Hack"));
  });

  it("Referer'dan faqat pathname qo'shiladi", async () => {
    await post("/", ariza, { Origin: SERVICES, Referer: "https://abdulmajidkhan007.github.io/Abdulmajidkhan007/keys?token=sir#x" });
    const lines = telegram[0]!.text.split("\n");
    assert.equal(lines[1], "🔗 /Abdulmajidkhan007/keys");
    assert.ok(!telegram[0]!.text.includes("token"));
  });

  it("Referer bo'lmasa yoki yaroqsiz bo'lsa yo'l qatori yo'q", async () => {
    await post("/", ariza, { Origin: SERVICES });
    await post("/", ariza, { Origin: SERVICES, Referer: "bu url emas" });
    for (const t of telegram) assert.ok(!t.text.includes("🔗"));
  });
});

describe("yo'l qatori: bosh sahifa", () => {
  it("Referer yo'li `/` bo'lsa 🔗 qatori yozilmaydi", async () => {
    await post("/", ariza, { Origin: SERVICES, Referer: "https://abdulmajidkhan007.github.io/" });
    await post("/", ariza, { Origin: SERVICES, Referer: "https://abdulmajidkhan007.github.io/?utm=1#ariza" });
    assert.equal(telegram.length, 2);
    for (const t of telegram) {
      assert.ok(!t.text.includes("🔗"));
      assert.match(t.text.split("\n")[1]!, /^👤/);
    }
  });
});

describe("ruxsat", () => {
  it("ro'yxatda yo'q Origin — 403, Telegram'ga hech narsa ketmaydi", async () => {
    const res = await post("/", ariza, { Origin: "https://yomon.example" });
    assert.equal(res.status, 403);
    assert.equal(res.headers.get("Access-Control-Allow-Origin"), null);
    assert.equal(telegram.length, 0);
  });
  it("Origin yo'q — 403", async () => {
    assert.equal((await post("/ariza", generic)).status, 403);
  });
  it("Origin aniq moslik: oxirida '/' yoki boshqa port ruxsat emas", async () => {
    assert.equal((await post("/", ariza, { Origin: `${SERVICES}/` })).status, 403);
    assert.equal((await post("/", ariza, { Origin: `${SERVICES}:8443` })).status, 403);
  });
  it("CORS: ruxsat etilgan Origin aynan qaytariladi; OPTIONS 204", async () => {
    const ok = await post("/", ariza, { Origin: PORTFOLIO });
    assert.equal(ok.headers.get("Access-Control-Allow-Origin"), PORTFOLIO);
    const pre = await worker.fetch(new Request("https://x.dev/ariza", { method: "OPTIONS", headers: { Origin: PORTFOLIO } }), env);
    assert.equal(pre.status, 204);
    assert.equal(pre.headers.get("Access-Control-Allow-Origin"), PORTFOLIO);
    const bad = await worker.fetch(new Request("https://x.dev/ariza", { method: "OPTIONS", headers: { Origin: "https://yomon.example" } }), env);
    assert.equal(bad.status, 403);
  });
  it("GET — 405; noma'lum yo'l (jumladan 'constructor') — 404", async () => {
    const get = await worker.fetch(new Request("https://x.dev/", { method: "GET", headers: { Origin: SERVICES } }), env);
    assert.equal(get.status, 405);
    assert.equal((await post("/yoq", ariza, { Origin: SERVICES })).status, 404);
    assert.equal((await post("/constructor", ariza, { Origin: SERVICES })).status, 404);
  });
  it("Telegram xato bersa — 502", async () => {
    telegramOk = false;
    assert.equal((await post("/ariza", generic, { Origin: SERVICES })).status, 502);
  });
});

describe("SITES sozlamasi", () => {
  it("noto'g'ri JSON — aniq xato log va 500 (hech kim o'tmaydi)", async () => {
    const errors: unknown[][] = [];
    const orig = console.error;
    console.error = (...a: unknown[]) => { errors.push(a); };
    try {
      const res = await post("/", ariza, { Origin: SERVICES }, { ...env, SITES: "{buzuq" });
      assert.equal(res.status, 500);
      assert.equal(telegram.length, 0);
    } finally {
      console.error = orig;
    }
    assert.match(String(errors[0]?.[0]), /SITES yaroqli JSON emas/);
  });
  it("parseSites: xatolar", () => {
    const err = (raw: string | undefined): string => {
      const r = parseSites(raw);
      assert.ok(!r.ok);
      return r.error;
    };
    assert.match(err(undefined), /bo'sh/);
    assert.match(err("[]"), /JSON obyekt/);
    assert.match(err("{}"), /kamida bitta/);
    assert.match(err('{"abdulmajidkhan007.github.io":"A"}'), /origin emas/);
    assert.match(err('{"https://a.uz/":"A"}'), /origin emas/);
    assert.match(err('{"https://a.uz/yol":"A"}'), /origin emas/);
    assert.match(err('{"https://a.uz":""}'), /nomi/);
    assert.match(err('{"https://a.uz":5}'), /nomi/);
  });
  it("parseSites: to'g'ri ro'yxat", () => {
    const r = parseSites('{"https://a.uz":" A ","http://localhost:5173":"Dev"}');
    assert.ok(r.ok);
    assert.equal(r.sites.get("https://a.uz"), "A");
    assert.equal(r.sites.get("http://localhost:5173"), "Dev");
  });
});

describe("POST / (xizmatlar) — avvalgi format saqlangan", () => {
  it("xabar tanasi", async () => {
    const res = await post("/", { ...ariza, jami: "≈ 4 mln so'm", telegram: "jasur_dev" }, { Origin: SERVICES });
    assert.equal(res.status, 200);
    assert.equal(telegram[0]!.text, [
      "📥 <b>Yangi ariza — Xizmatlar sayti</b>",
      "👤 Jasur", "📞 +998901234567", "✈️ @jasur_dev", "📦 Telegram bot", "💰 ≈ 4 mln so'm",
      "📝 Do'kon uchun bot kerak",
    ].join("\n"));
  });
  it("validatsiya xatosi 400 {error, field}", async () => {
    const res = await post("/", { ...ariza, tel: "123" }, { Origin: SERVICES });
    assert.equal(res.status, 400);
    assert.deepEqual(await res.json(), { ok: false, error: "Telefon +998 va 9 raqamdan iborat bo'lsin", field: "tel" });
  });
  it("honeypot (sayt) — 200, lekin yuborilmaydi", async () => {
    const res = await post("/", { ...ariza, sayt: "http://spam" }, { Origin: SERVICES });
    assert.equal(res.status, 200);
    assert.equal(telegram.length, 0);
  });
});

describe("POST /contact — portfolio-3d PR #11 qoidalari", () => {
  it("telefon + email'siz qabul qilinadi; telefon normallashadi, MX so'ralmaydi", async () => {
    const res = await post("/contact", contact, { Origin: PORTFOLIO });
    assert.equal(res.status, 200);
    assert.equal(dnsQueries.length, 0);
    assert.match(telegram[0]!.text, /<b>Telefon:<\/b> \+998901234567/);
    assert.ok(!telegram[0]!.text.includes("Email"));
  });
  it("telefon MAJBURIY", async () => {
    const res = await post("/contact", { ...contact, phone: "" }, { Origin: PORTFOLIO });
    assert.equal(res.status, 400);
    assert.deepEqual(await res.json(), { ok: false, error: "Telefon kiritilmagan", field: "phone" });
  });
  it("+998 va 9 raqam bo'lmasa rad etiladi", async () => {
    for (const phone of ["901234567", "+998 90 123 45", "+7 900 123 45 67", "998901234567", "+9989012345678", "+998 90 12a 45 67"]) {
      const res = await post("/contact", { ...contact, phone }, { Origin: PORTFOLIO });
      assert.equal(res.status, 400, phone);
      assert.equal(((await res.json()) as { field: string }).field, "phone", phone);
    }
  });
  it("email berilsa — format va MX tekshiriladi", async () => {
    const ok = await post("/contact", { ...contact, email: "a@gmail.com" }, { Origin: PORTFOLIO });
    assert.equal(ok.status, 200);
    assert.equal(dnsQueries[0], "https://cloudflare-dns.com/dns-query?name=gmail.com&type=MX");
    assert.match(telegram[0]!.text, /<b>Email:<\/b> a@gmail\.com/);

    const badFormat = await post("/contact", { ...contact, email: "abc" }, { Origin: PORTFOLIO });
    assert.deepEqual(await badFormat.json(), { ok: false, error: "Email formati noto'g'ri", field: "email" });

    mxExists = false;
    telegram.length = 0;
    const noMx = await post("/contact", { ...contact, email: "a@yoq-domen.xyz" }, { Origin: PORTFOLIO });
    assert.equal(noMx.status, 400);
    assert.deepEqual(await noMx.json(), { ok: false, error: "Email domeni pochta qabul qilmaydi", field: "email" });
    assert.equal(telegram.length, 0);
  });
  it("ism va xabar qoidalari, telegram @ qo'shiladi", async () => {
    const f = async (patch: Record<string, unknown>) => ((await (await post("/contact", { ...contact, ...patch }, { Origin: PORTFOLIO })).json()) as Record<string, unknown>);
    assert.deepEqual(await f({ name: "" }), { ok: false, error: "Ism kiritilmagan", field: "name" });
    assert.deepEqual(await f({ message: "" }), { ok: false, error: "Xabar kiritilmagan", field: "message" });
    assert.deepEqual(await f({ message: "qisqa" }), { ok: false, error: "Xabar juda qisqa", field: "message" });
    assert.deepEqual(await f({ telegram: "ab" }), { ok: false, error: "Telegram username noto'g'ri", field: "telegram" });
    await post("/contact", { ...contact, telegram: "aziza_dev" }, { Origin: PORTFOLIO });
    assert.match(telegram.at(-1)!.text, /<b>Telegram:<\/b> @aziza_dev/);
  });
  it("honeypot (botField / bot-field) — 200, yuborilmaydi", async () => {
    for (const k of ["botField", "bot-field"]) {
      const res = await post("/contact", { ...contact, [k]: "x" }, { Origin: PORTFOLIO });
      assert.equal(res.status, 200);
    }
    assert.equal(telegram.length, 0);
  });
});

describe("POST /ariza — umumiy endpoint", () => {
  it("faqat ism va telefon bilan qabul qilinadi", async () => {
    const res = await post("/ariza", generic, { Origin: "https://yangi.uz" });
    assert.equal(res.status, 200);
    assert.equal(telegram[0]!.text, ["📥 <b>Yangi ariza — Yangi &lt;sayt&gt;</b>", "👤 Bobur", "📞 +998901234567"].join("\n"));
    assert.equal(dnsQueries.length, 0);
  });
  it("barcha ixtiyoriy maydonlar xabarga tushadi; HTML qochiriladi", async () => {
    const res = await post("/ariza", { ...generic, email: "b@gmail.com", telegram: "bobur_dev", xabar: "<b>salom</b> & rahmat" }, { Origin: SERVICES });
    assert.equal(res.status, 200);
    const t = telegram[0]!.text;
    assert.match(t, /✉️ b@gmail\.com/);
    assert.match(t, /✈️ @bobur_dev/);
    assert.match(t, /📝 &lt;b&gt;salom&lt;\/b&gt; &amp; rahmat/);
  });
  it("ism va telefon majburiy", async () => {
    const a = await post("/ariza", { tel: "+998901234567" }, { Origin: SERVICES });
    assert.deepEqual(await a.json(), { ok: false, error: "Ismni kiriting", field: "ism" });
    const b = await post("/ariza", { ism: "X" }, { Origin: SERVICES });
    assert.deepEqual(await b.json(), { ok: false, error: "Telefon raqamini kiriting", field: "tel" });
    const c = await post("/ariza", { ism: "X", tel: "12345" }, { Origin: SERVICES });
    assert.equal(((await c.json()) as { field: string }).field, "tel");
  });
  it("email MX tekshiruvi; yo'q domen rad etiladi", async () => {
    mxExists = false;
    const res = await post("/ariza", { ...generic, email: "b@yoq-domen.xyz" }, { Origin: SERVICES });
    assert.equal(res.status, 400);
    assert.equal(((await res.json()) as { field: string }).field, "email");
    assert.equal(telegram.length, 0);
  });
  it("honeypot (sayt) — 200, yuborilmaydi", async () => {
    const res = await post("/ariza", { ...generic, sayt: "spam" }, { Origin: SERVICES });
    assert.equal(res.status, 200);
    assert.equal(telegram.length, 0);
  });
  it("JSON bo'lmagan tana — 400", async () => {
    const res = await worker.fetch(new Request("https://x.dev/ariza", { method: "POST", headers: { Origin: SERVICES }, body: "buzuq" }), env);
    assert.equal(res.status, 400);
  });
});
