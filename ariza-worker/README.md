# ariza-worker

Barcha saytlardagi ariza formalari → BITTA Worker → BITTA bot → BITTA Telegram guruh.
Bot tokeni saytda emas, Cloudflare'da (secret) turadi.
Har xabar sarlavhasi qayerdan kelganini ko'rsatadi: `📥 Yangi ariza — <sayt nomi>` va (bo'lsa) `🔗 /sahifa/yo'li`.

| Endpoint | Kim uchun | Majburiy maydonlar |
|---|---|---|
| `POST /` | xizmatlar sayti | `ism`, `tel`, `tavsif` |
| `POST /contact` | portfolio | `name`, `phone`, `message` |
| `POST /ariza` | boshqa saytlar (umumiy) | `ism`, `tel` |
| `POST /tg` | Telegram webhook (ariza holati tugmalari) | — (secret header) |

## Variant A — GitHub Secrets orqali (kompyuter shart emas, tavsiya)

1. **Bot:** [@BotFather](https://t.me/BotFather) → `/newbot` → token. Guruh oching, botni qo'shing,
   guruh ID sini [@IDFINDER007BOT](https://t.me/IDFINDER007BOT) bilan toping (`-100...`).
2. **Cloudflare** (https://dash.cloudflare.com, bepul):
   - Account ID: bosh sahifada o'ng tomonda yoki Workers & Pages → o'ng panel.
   - API token: My Profile → API Tokens → Create Token → **Edit Cloudflare Workers** shabloni.
   - Workers & Pages'ni bir marta ochib, `workers.dev` subdomenini tanlang.
3. **GitHub:** repo → Settings → Secrets and variables → Actions → New repository secret:
   `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.
4. Actions → **Ariza worker (Cloudflare)** → Run workflow. Log oxirida manzil chiqadi:
   `https://ariza-worker.<nom>.workers.dev` — uni `site/index.html` dagi `ARIZA_URL` ga yozing.

Token yangilansa — secret'ni almashtirib, workflow'ni qayta ishga tushirish kifoya.

## Variant B — kompyuterdan (wrangler)

1. **Bot:** [@BotFather](https://t.me/BotFather) → `/newbot` → token oling
   (yoki mavjud botingiz tokeni).
2. **Guruh:** arizalar tushadigan guruh oching, botni qo'shing.
   Guruh ID sini [@IDFINDER007BOT](https://t.me/IDFINDER007BOT) bilan toping (`-100...`).
3. **Cloudflare:** https://dash.cloudflare.com da bepul akkaunt oching.
4. Kompyuterda (Node.js bor bo'lsa), shu papkada:

   ```bash
   npx wrangler login
   npx wrangler secret put TELEGRAM_BOT_TOKEN   # tokenni yozasiz
   npx wrangler secret put TELEGRAM_CHAT_ID     # guruh ID si
   npx wrangler deploy
   ```

   Oxirida manzil chiqadi: `https://ariza-worker.<nom>.workers.dev`
5. Shu manzilni `site/index.html` dagi `ARIZA_URL` ga yozing (yoki menga yuboring).

## Ariza holati tugmalari (ixtiyoriy)

Yoqilsa, guruhga tushgan har arizada uchta tugma bo'ladi: «📞 Gaplashdim» · «✅ Kelishdik» · «❌ Rad».
Bosilganda xabar tahrirlanadi: pastiga `Holat: ✅ Kelishdik — @kim, 08.11.2026 14:05` (Toshkent vaqti)
qo'shiladi, tanlangan tugma `•` bilan belgilanadi. Holatni qayta bosib almashtirsa bo'ladi.

**⚠️ Egasi uchun muhim.** Tugmalar ishlashi uchun Telegram bot **webhook** rejimida bo'lishi kerak.
Telegram'da bitta bot bir vaqtda **webhook ham, polling (`getUpdates`) ham bo'la olmaydi**:
agar shu bot tokeni boshqa joyda polling bilan ishlayotgan bo'lsa (masalan, boshqa bot dasturi),
webhook ulangach u `409 Conflict` bilan to'xtaydi. Shuning uchun:

- **Tavsiya:** arizalar uchun alohida bot (BotFather → `/newbot`), uni guruhga qo'shing, `TELEGRAM_BOT_TOKEN`
  va `TELEGRAM_CHAT_ID` secret'larini shunga almashtiring. Shunda hech narsa buzilmaydi.
- Yoqish: repo → Settings → Secrets and variables → Actions → **Variables** → `LEAD_BUTTONS` = `on`,
  so'ng Actions → *Ariza worker (Cloudflare)* → Run workflow.
- Workflow har deploy'da `getWebhookInfo` ni chiqaradi (hozirgi `url` ni shu yerdan ko'rasiz) va
  **faqat** `LEAD_BUTTONS=on` bo'lsa `setWebhook` chaqiradi. O'zgaruvchi yo'q bo'lsa — tugmalar ham,
  webhook ham yo'q, hamma narsa avvalgidek ishlaydi.
- O'chirish: `LEAD_BUTTONS` ni olib tashlang (yoki `off`) va qayta deploy qiling — tugmalar yangi
  arizalarda chiqmaydi. Webhook'ni olib tashlash (polling'ni qaytarish) uchun qo'lda:
  `curl https://api.telegram.org/bot<TOKEN>/deleteWebhook`.

Himoya: `POST /tg` faqat `X-Telegram-Bot-Api-Secret-Token` to'g'ri bo'lsa ishlaydi (noto'g'ri → `403`).
Secret alohida saqlanmaydi: `HMAC-SHA256(kalit = bot tokeni, matn = "ariza-worker/tg-webhook")`, hex —
Worker va workflow bir xil hisoblaydi. Faqat `TELEGRAM_CHAT_ID` guruhidagi xabarlarning callback'i qabul
qilinadi; `callback_data` qat'iy `lead:(talked|agreed|rejected)`.

**Hozircha yo'q — `/hisobot` (oylik son).** Hisob yuritish uchun Cloudflare KV kerak, uning namespace'i
`wrangler.toml` da id talab qiladi va API token'ga KV ruxsati kerak; buni ishlamayotgan token bilan
sinab ko'rib bo'lmaydi, noto'g'ri sozlama esa butun ariza oqimini yiqitishi mumkin. Shuning uchun
keyingi bosqichga qoldirildi. Reja: workflow KV namespace'ni API orqali (bor bo'lsa qayta yaratmay) ochadi,
har ariza `lead:<YYYY-MM>:<message_id>` kaliti ostida holat bilan yoziladi (poyga holatsiz), `/hisobot`
prefiks bo'yicha sanaydi.

## Tekshirish

```bash
curl -X POST https://ariza-worker.<nom>.workers.dev \
  -H "Origin: https://abdulmajidkhan007.github.io" -H "Content-Type: application/json" \
  -d '{"ism":"Test","tel":"+998901234567","paket":"Telegram bot","tavsif":"sinov xabari"}'
```

Guruhga xabar tushsa — tayyor.

## Himoya

- Faqat `SITES` ro'yxatidagi origin'lardan kelgan so'rov qabul qilinadi (aks holda 403). CORS ham shu ro'yxatdan.
- Manba nomi `Origin` header'dan olinadi; mijoz yuborgan `manba`/`sayt nomi` kabi maydonlar e'tiborga olinmaydi.
- Maydon uzunligi cheklangan, HTML qochiriladi. Tekshiruv (`src/validate.ts`, saytdagi bilan bir xil): Ism, Telefon (+998 + 9 raqam, `+998XXXXXXXXX` ga normalizatsiya), Xabar — majburiy; Email (format + domen MX yozuvi, DNS-over-HTTPS) va Telegram `@username` — ixtiyoriy. Xato: `400 {error, field}`.
- Testlar: `npm i && npm test`; tur tekshiruvi: `npm run typecheck`.
- Yashirin `sayt` maydoni: oddiy spam botlar uni to'ldiradi — bunday ariza yuborilmaydi.

## Yangi saytni ulash

1. `wrangler.toml` → `[vars]` → `SITES` JSON'iga **bitta qator** qo'shing (`origin: nom`):

   ```json
   "https://yangi-sayt.uz": "Yangi sayt"
   ```

   Origin — faqat `https://domen` (oxirida `/` va yo'lsiz). Nom — xabar sarlavhasida chiqadi (≤ 60 belgi).
   `SITES` noto'g'ri JSON bo'lsa Worker 500 qaytaradi va logga `[ariza-worker] sozlama xatosi: ...` yozadi.
2. Deploy: Actions → **Ariza worker (Cloudflare)** (yoki `npx wrangler deploy`).
3. Saytdan `POST /ariza` ga yuboring:

   ```js
   const res = await fetch("https://ariza-worker.<nom>.workers.dev/ariza", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     // Sahifa yo'li xabarda chiqishi uchun (ixtiyoriy): brauzer boshqa domenga Referer'da
     // faqat origin yuboradi, to'liq yo'l uchun:
     referrerPolicy: "no-referrer-when-downgrade",
     body: JSON.stringify({
       ism: "Jasur",              // majburiy, ≤ 60 belgi
       tel: "+998 90 123-45-67",  // majburiy, +998 va 9 raqam (bo'shliq/defis mumkin)
       email: "",                 // ixtiyoriy; berilsa format + MX tekshiriladi
       telegram: "",              // ixtiyoriy, @username (5–32 belgi)
       xabar: "",                 // ixtiyoriy, ≤ 1000 belgi
       sayt: "",                  // honeypot: yashirin input, odam to'ldirmaydi
     }),
   });
   const data = await res.json(); // { ok: true } yoki 400 { ok: false, error, field }
   ```

Javoblar: `200 {ok:true}` (honeypot to'lgan bo'lsa ham — bot bilmasin), `400 {ok:false, error, field}`,
`403` (origin ro'yxatda yo'q), `404` (noma'lum yo'l), `502` (Telegram qabul qilmadi).

## Portfolio formasi (`/contact`)

Maydonlar: `name`, `phone`, `message` (majburiy); `email`, `telegram` (ixtiyoriy); yashirin `botField`.
Qoidalar portfolio-3d `src/lib/contactRules.ts` bilan bir xil (PR #11): telefon **majburiy**
(`+998` va 9 raqam), email **ixtiyoriy** (berilsa — format va MX). Firebase Blaze kerak emas —
Cloudflare bepul tarif yetadi. Saytga manzil `portfolio-3d` reposida GitHub Variable `CONTACT_URL`
orqali beriladi (`docs/FIREBASE.md` → "Aloqa formasi: Cloudflare Worker").

## Tuzilish

`src/index.ts` — routing va javoblar · `sites.ts` — `SITES` va Referer · `validate.ts` — `/` ·
`contact.ts` — `/contact` · `generic.ts` — `/ariza` · `leads.ts` — holat tugmalari va `/tg` webhook · `telegram.ts` — xabar va Bot API chaqiruvi · `common.ts` — umumiy yordamchilar.
