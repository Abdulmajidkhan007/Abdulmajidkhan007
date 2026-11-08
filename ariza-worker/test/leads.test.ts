import { afterEach, beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import worker from "../src/index.ts";
import { formatTashkent, webhookSecret } from "../src/leads.ts";

const SERVICES = "https://abdulmajidkhan007.github.io";
const SITES = JSON.stringify({ [SERVICES]: "Xizmatlar sayti" });
const base = { TELEGRAM_BOT_TOKEN: "test-token", TELEGRAM_CHAT_ID: "-100", SITES };
const on = { ...base, LEAD_BUTTONS: "on" };

interface Call { method: string; body: Record<string, unknown> }
let calls: Call[];
let editOk: boolean;
const realFetch = globalThis.fetch;

beforeEach(() => {
  calls = [];
  editOk = true;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const m = /^https:\/\/api\.telegram\.org\/bot[^/]+\/(\w+)$/.exec(String(input));
    if (!m) throw new Error(`kutilmagan fetch: ${String(input)}`);
    const method = m[1]!;
    calls.push({ method, body: JSON.parse(String(init?.body)) as Record<string, unknown> });
    return new Response("{}", { status: method === "editMessageText" && !editOk ? 400 : 200 });
  }) as typeof fetch;
});
afterEach(() => { globalThis.fetch = realFetch; });

const secret = createHmac("sha256", "test-token").update("ariza-worker/tg-webhook").digest("hex");
const NOW = new Date("2026-11-08T09:05:00Z"); // Toshkent: UTC+5 → 14:05

const text = "📥 Yangi ariza — Xizmatlar sayti\n👤 Jasur\n📞 +998901234567";
const message = (chatId: number | string = -100) => ({
  message_id: 7, chat: { id: chatId }, text,
  entities: [{ type: "bold", offset: 3, length: 29 }],
});
const update = (data: string, over: Record<string, unknown> = {}) => ({
  update_id: 1,
  callback_query: { id: "cb1", from: { id: 5, username: "admin1", first_name: "Ali" }, message: message(), data, ...over },
});

function tg(body: unknown, headers: Record<string, string> = { "X-Telegram-Bot-Api-Secret-Token": secret }, env = on): Promise<Response> {
  return worker.fetch(
    new Request("https://ariza.example.workers.dev/tg", { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: JSON.stringify(body) }),
    env,
  );
}
const submit = (env: typeof base): Promise<Response> =>
  worker.fetch(
    new Request("https://ariza.example.workers.dev/ariza", {
      method: "POST", headers: { "Content-Type": "application/json", Origin: SERVICES },
      body: JSON.stringify({ ism: "Bobur", tel: "998901234567" }),
    }),
    env,
  );

describe("ariza tugmalari", () => {
  it("LEAD_BUTTONS=on bo'lsa xabarga uchta tugma qo'shiladi", async () => {
    await submit(on);
    const kb = calls[0]!.body.reply_markup as { inline_keyboard: { text: string; callback_data: string }[][] };
    assert.deepEqual(kb.inline_keyboard[0]!.map((b) => b.text), ["📞 Gaplashdim", "✅ Kelishdik", "❌ Rad"]);
    assert.deepEqual(kb.inline_keyboard[0]!.map((b) => b.callback_data), ["lead:talked", "lead:agreed", "lead:rejected"]);
  });

  it("LEAD_BUTTONS yo'q bo'lsa tugmasiz (boshqa joyda polling bo'lishi mumkin)", async () => {
    await submit(base);
    assert.equal(calls[0]!.body.reply_markup, undefined);
  });
});

describe("POST /tg", () => {
  it("webhook secret bot tokenidan HMAC bilan hosil bo'ladi", async () => {
    assert.equal(await webhookSecret("test-token"), secret);
    assert.match(secret, /^[0-9a-f]{64}$/);
  });

  it("noto'g'ri yoki yo'q secret → 403, Telegram'ga hech narsa ketmaydi", async () => {
    assert.equal((await tg(update("lead:agreed"), { "X-Telegram-Bot-Api-Secret-Token": "x".repeat(64) })).status, 403);
    assert.equal((await tg(update("lead:agreed"), {})).status, 403);
    assert.equal(calls.length, 0);
  });

  it("GET → 405", async () => {
    const res = await worker.fetch(new Request("https://ariza.example.workers.dev/tg"), on);
    assert.equal(res.status, 405);
  });

  it("boshqa chatdan kelgan callback rad etiladi", async () => {
    const res = await tg(update("lead:agreed", { message: message(-999) }));
    assert.equal(res.status, 200);
    assert.equal(calls.length, 0);
  });

  it("bosilganda xabar tahrirlanadi: holat qatori (kim, Toshkent vaqti) va yangilangan tugmalar", async () => {
    const res = await worker.fetch(
      new Request("https://ariza.example.workers.dev/tg", {
        method: "POST", headers: { "X-Telegram-Bot-Api-Secret-Token": secret }, body: JSON.stringify(update("lead:agreed")),
      }), on);
    assert.equal(res.status, 200);
    const edit = calls.find((c) => c.method === "editMessageText")!;
    assert.equal(edit.body.chat_id, "-100");
    assert.equal(edit.body.message_id, 7);
    assert.equal(edit.body.parse_mode, "HTML");
    const t = String(edit.body.text);
    assert.ok(t.startsWith("📥 <b>Yangi ariza — Xizmatlar sayti</b>\n👤 Jasur"), t);
    assert.match(t, /\n\nHolat: ✅ Kelishdik — @admin1, \d{2}\.\d{2}\.\d{4} \d{2}:\d{2}$/);
    const kb = edit.body.reply_markup as { inline_keyboard: { text: string }[][] };
    assert.deepEqual(kb.inline_keyboard[0]!.map((b) => b.text), ["📞 Gaplashdim", "• ✅ Kelishdik", "❌ Rad"]);
    assert.ok(calls.some((c) => c.method === "answerCallbackQuery"));
  });

  it("holatni almashtirsa bo'ladi: eski 'Holat' qatori almashadi, takrorlanmaydi", async () => {
    const prev = `${text}\n\nHolat: 📞 Gaplashdim — @admin1, 08.11.2026 13:00`;
    await tg(update("lead:rejected", { message: { ...message(), text: prev }, from: { id: 6, first_name: "Vali", last_name: "A" } }));
    const t = String(calls.find((c) => c.method === "editMessageText")!.body.text);
    assert.equal(t.match(/Holat:/g)?.length, 1);
    assert.match(t, /Holat: ❌ Rad — Vali A, /);
    assert.ok(!t.includes("Gaplashdim"));
    assert.ok(!t.includes("\n\n\n"));
  });

  it("foydalanuvchi matni HTML'dan qochiriladi", async () => {
    await tg(update("lead:talked", { message: { ...message(), text: "📥 x\n📝 <script>&" , entities: [] } }));
    assert.match(String(calls.find((c) => c.method === "editMessageText")!.body.text), /📝 &lt;script&gt;&amp;/);
  });

  it("callback_data qat'iy: noma'lum qiymat tahrirlamaydi", async () => {
    for (const bad of ["lead:agreed ", "lead:other", "LEAD:agreed", "lead:agreed\nx", "", "x".repeat(70)]) {
      assert.equal((await tg(update(bad))).status, 200);
    }
    assert.equal(calls.filter((c) => c.method === "editMessageText").length, 0);
  });

  it("buzuq tana / callback bo'lmagan update → 200, tahrirsiz", async () => {
    assert.equal((await tg({ update_id: 1, message: { text: "/hisobot" } })).status, 200);
    assert.equal((await tg(null)).status, 200);
    assert.equal(calls.length, 0);
  });

  it("Telegram tahrirni rad etsa — ok:false, lekin 200 (Telegram qayta yubormasin)", async () => {
    editOk = false;
    const res = await tg(update("lead:agreed"));
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { ok: false });
  });
});

describe("formatTashkent", () => {
  it("UTC+5", () => assert.equal(formatTashkent(NOW), "08.11.2026 14:05"));
});
