import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { emailDomain, hasMx, normalizePhone, parseAriza, type FetchLike } from "../src/validate.ts";

const valid = { ism: "Jasur", tel: "+998 90 123-45-67", tavsif: "Do'kon uchun bot kerak" };

describe("normalizePhone", () => {
  it("bo'shliq/tire qabul qilinadi va +998XXXXXXXXX ga keltiriladi", () => {
    assert.equal(normalizePhone("+998 90 123-45-67"), "+998901234567");
    assert.equal(normalizePhone("(998) 90 1234567"), "+998901234567");
    assert.equal(normalizePhone("998901234567"), "+998901234567");
  });
  it("noto'g'ri raqamlar rad etiladi", () => {
    for (const bad of ["901234567", "+998 90 123 45", "+7 900 123 45 67", "+998901234567890", "abc", "+998 90 123 45 6a", "99890+1234567"]) {
      assert.equal(normalizePhone(bad), null, bad);
    }
  });
});

describe("parseAriza", () => {
  it("to'g'ri arizani qabul qiladi, telefonni normalizatsiya qiladi", () => {
    const r = parseAriza(valid);
    assert.ok(r.ok);
    assert.equal(r.data.tel, "+998901234567");
    assert.equal(r.data.email, "");
    assert.equal(r.data.telegram, "");
  });
  it("Ism, Telefon, Xabar majburiy", () => {
    assert.deepEqual(parseAriza({ ...valid, ism: "" }), { ok: false, error: "Ismni kiriting", field: "ism" });
    assert.equal((parseAriza({ ...valid, tel: "" }) as { field: string }).field, "tel");
    assert.equal((parseAriza({ ...valid, tavsif: "" }) as { field: string }).field, "tavsif");
  });
  it("noto'g'ri telefon rad etiladi", () => {
    const r = parseAriza({ ...valid, tel: "12345" });
    assert.ok(!r.ok);
    assert.equal(r.field, "tel");
  });
  it("email ixtiyoriy, lekin kiritilsa formati tekshiriladi", () => {
    assert.ok(parseAriza({ ...valid, email: "" }).ok);
    assert.ok(parseAriza({ ...valid, email: "a@b.uz" }).ok);
    for (const bad of ["abc", "a@b", "a@@b.uz", "a b@c.uz"]) {
      const r = parseAriza({ ...valid, email: bad });
      assert.ok(!r.ok, bad);
      assert.equal(r.error, "Email manzil noto'g'ri");
    }
  });
  it("Telegram username: 5–32, harf/raqam/_, @ qo'shiladi", () => {
    const r = parseAriza({ ...valid, telegram: "Abdulloh_77700" });
    assert.ok(r.ok);
    assert.equal(r.data.telegram, "@Abdulloh_77700");
    assert.ok(parseAriza({ ...valid, telegram: "@abcde" }).ok);
    for (const bad of ["abcd", "@1abcde", "ab cde", "ab-cde", "@" + "a".repeat(33)]) {
      assert.ok(!parseAriza({ ...valid, telegram: bad }).ok, bad);
    }
  });
  it("honeypot va kalkulyator maydonlari saqlanadi", () => {
    const r = parseAriza({ ...valid, sayt: "x", paket: "Bot, Sayt", jami: "≈ 4 mln so'm" });
    assert.ok(r.ok);
    assert.equal(r.data.sayt, "x");
    assert.equal(r.data.paket, "Bot, Sayt");
  });
  it("obyekt bo'lmasa invalid", () => {
    assert.deepEqual(parseAriza(null), { ok: false, error: "invalid" });
  });
});

describe("hasMx (DNS-over-HTTPS)", () => {
  const reply = (body: unknown, ok = true): FetchLike => async () => ({ ok, json: async () => body });
  it("MX bor — true", async () => {
    assert.equal(await hasMx("gmail.com", reply({ Status: 0, Answer: [{ type: 15 }] })), true);
  });
  it("MX yo'q (NXDOMAIN yoki bo'sh javob) — false", async () => {
    assert.equal(await hasMx("yoq-domen.xyz", reply({ Status: 3 })), false);
    assert.equal(await hasMx("a.uz", reply({ Status: 0, Answer: [{ type: 1 }] })), false);
  });
  it("DNS xizmati ishlamasa — rad etilmaydi", async () => {
    assert.equal(await hasMx("a.uz", async () => { throw new Error("net"); }), true);
    assert.equal(await hasMx("a.uz", reply({}, false)), true);
  });
  it("so'rov to'g'ri URL ga ketadi", async () => {
    let url = "";
    await hasMx("gmail.com", async (u) => { url = u; return { ok: true, json: async () => ({ Answer: [{ type: 15 }] }) }; });
    assert.equal(url, "https://cloudflare-dns.com/dns-query?name=gmail.com&type=MX");
  });
  it("emailDomain", () => assert.equal(emailDomain("A@Gmail.COM"), "gmail.com"));
});
