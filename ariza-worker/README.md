# ariza-worker

Saytdagi ariza formasi → shu Worker → bot → Telegram guruh.
Bot tokeni saytda emas, Cloudflare'da (secret) turadi.

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

## Tekshirish

```bash
curl -X POST https://ariza-worker.<nom>.workers.dev \
  -H "Origin: https://abdulmajidkhan007.github.io" -H "Content-Type: application/json" \
  -d '{"ism":"Test","tel":"+998901234567","paket":"Telegram bot","tavsif":"sinov"}'
```

Guruhga xabar tushsa — tayyor.

## Himoya

- Faqat `ALLOWED_ORIGIN` (sayt manzili) dan kelgan so'rov qabul qilinadi.
- Maydon uzunligi cheklangan, telefon formati tekshiriladi, HTML qochiriladi.
- Yashirin `sayt` maydoni: oddiy spam botlar uni to'ldiradi — bunday ariza yuborilmaydi.
