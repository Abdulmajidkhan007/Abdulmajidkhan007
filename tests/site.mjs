// Playwright: kalkulyator va forma tekshiruvi. Ishga tushirish: node tests/site.mjs [skrinshot-papkasi]
// (site/ ni o'zi http server bilan ochadi; Worker soxta — tarmoqqa chiqmaydi.)
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import http from "node:http";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const shots = process.argv[2];
const html = readFileSync(new URL("../site/index.html", import.meta.url));
const server = http.createServer((_, res) => { res.setHeader("Content-Type", "text/html"); res.end(html); }).listen(0);
const base = `http://localhost:${server.address().port}/`;
const browser = await chromium.launch();

async function run(name, viewport, scheme) {
  const ctx = await browser.newContext({ viewport, colorScheme: scheme, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(base);
  await page.evaluate(() => { document.querySelector("meta[name=ariza-url]").content = "https://worker.test/"; });
  const posts = [];
  await page.route("https://worker.test/", async (route) => {
    const body = JSON.parse(route.request().postData());
    posts.push(body);
    if (body.email === "a@yoq-domen.xyz") {
      return route.fulfill({ status: 400, contentType: "application/json", headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ ok: false, error: "Email manzil noto'g'ri", field: "email" }) });
    }
    await route.fulfill({ status: 200, contentType: "application/json", headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ ok: true }) });
  });

  // Kalkulyator: 1 xizmat — chegirma yo'q
  const total = page.locator("#calc-total");
  await page.locator("#kalkulyator input[value=bot]").check();
  assert.equal(await total.textContent(), "≈ 1,5 mln so'm");
  assert.equal(await page.locator("#calc-disc-row").isHidden(), true);
  // 2 xizmat — −5%: (1,5 + 4,5) = 6 → 5,7
  await page.locator("#kalkulyator input[value=menu]").check();
  assert.equal(await total.textContent(), "≈ 5,7 mln so'm");
  assert.match(await page.locator("#calc-disc-label").textContent(), /−5%/);
  // 3 xizmat — −10%: 6 + 12 = 18 → 16,2
  await page.locator("#kalkulyator input[value=hisob]").check();
  assert.equal(await total.textContent(), "≈ 16,2 mln so'm");
  assert.match(await page.locator("#calc-disc-label").textContent(), /−10%/);
  await page.locator("#kalkulyator input[value=hisob]").uncheck();
  await page.locator("#kalkulyator input[value=menu]").uncheck();
  await page.locator("#kalkulyator input[value=bot]").uncheck();

  // Accordion "Tanlash" kalkulyatorda belgilaydi
  await page.locator("#acc-b4").click();
  await page.locator("[data-svc=dokon]").first().click();
  assert.equal(await page.locator("#kalkulyator input[value=dokon]").isChecked(), true);

  // Validatsiya: noto'g'ri telefon va email rad etiladi
  const f = page.locator("#calc-form");
  await f.locator("[name=tavsif]").fill("Bot kerak, buyurtma qabul qilsin");
  await f.locator("[name=ism]").fill("Jasur");
  await f.locator("[name=tel]").fill("12345");
  await f.locator("[name=email]").fill("nomalum");
  await f.locator("[name=telegram]").fill("ab");
  await f.locator("button[type=submit]").click();
  assert.match(await f.locator("[data-err=tel]").textContent(), /\+998 va 9 raqam/);
  assert.equal(await f.locator("[data-err=email]").textContent(), "Email manzil noto'g'ri");
  assert.match(await f.locator("[data-err=telegram]").textContent(), /Telegram username noto'g'ri/);
  assert.equal(posts.length, 0, "noto'g'ri ariza serverga ketmasligi kerak");
  if (shots) { await f.scrollIntoViewIfNeeded(); await page.screenshot({ path: `${shots}/${name}-xato.png` }); }

  // Worker MX tekshiruvi rad etsa — xato email ostida
  await f.locator("[name=tel]").fill("+998 90 123-45-67");
  await f.locator("[name=telegram]").fill("@Jasur_01");
  await f.locator("[name=email]").fill("a@yoq-domen.xyz");
  await f.locator("button[type=submit]").click();
  await page.waitForFunction(() => document.querySelector("#calc-form [data-err=email]").textContent !== "" && !document.querySelector("#calc-form button[type=submit]").disabled);
  assert.equal(await f.locator("[data-err=email]").textContent(), "Email manzil noto'g'ri");
  assert.equal(posts.length, 1);

  // To'g'ri ariza: xizmatlar, jami va muammo bilan ketadi
  await f.locator("[name=email]").fill("jasur@gmail.com");
  await f.locator("button[type=submit]").click();
  await page.waitForFunction(() => /Rahmat/.test(document.querySelector("#calc-form .status").textContent));
  const last = posts.at(-1);
  assert.equal(last.paket, "Internet-do'kon");
  assert.equal(last.jami, "≈ 8 mln so'm");
  assert.equal(last.tavsif, "Bot kerak, buyurtma qabul qilsin");
  assert.equal(last.tel, "+998 90 123-45-67"); // normalizatsiya worker'da
  assert.equal(await page.locator("#kalkulyator input[value=dokon]").isChecked(), false);

  // Asosiy forma: majburiy maydonlar
  const m = page.locator("#ariza-form");
  await m.locator("button[type=submit]").click();
  for (const k of ["ism", "tel", "tavsif"]) assert.notEqual(await m.locator(`[data-err=${k}]`).textContent(), "");
  assert.equal(await m.locator("[data-err=email]").textContent(), "");

  // Worker'ga ulanib bo'lmasa — zaxira (Telegram chat) va foydalanuvchiga aytiladi
  await page.unroute("https://worker.test/");
  await page.route("https://worker.test/", (r) => r.abort());
  await m.locator("[name=ism]").fill("Jasur");
  await m.locator("[name=tel]").fill("+998901234567");
  await m.locator("[name=tavsif]").fill("Sayt kerak, narxini ayting");
  const popup = page.waitForEvent("popup", { timeout: 4000 }).catch(() => null);
  await m.locator("button[type=submit]").click();
  await page.waitForFunction(() => /Zaxira/.test(document.querySelector("#ariza-form .status").textContent));
  assert.match(await m.locator(".status").textContent(), /ulanib bo'lmadi/);
  await popup;

  if (shots) {
    await page.reload();
    await page.locator("#paketlar").scrollIntoViewIfNeeded();
    await page.locator("#kalkulyator input[value=bot]").check();
    await page.locator("#kalkulyator input[value=sayt]").check();
    await page.locator("#kalkulyator input[value=ai]").check();
    await page.evaluate(() => { const r = document.querySelector("#kalkulyator").getBoundingClientRect(); window.scrollBy(0, r.top - 80); });
    await page.screenshot({ path: `${shots}/${name}-kalkulyator.png` });
  }
  await ctx.close();
  console.log("OK", name);
}

try {
  for (const scheme of ["light", "dark"]) {
    await run(`telefon-390-${scheme}`, { width: 390, height: 844 }, scheme);
    await run(`desktop-1366-${scheme}`, { width: 1366, height: 768 }, scheme);
  }
} finally { await browser.close(); server.close(); }
