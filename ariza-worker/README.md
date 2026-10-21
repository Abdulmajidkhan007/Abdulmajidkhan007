# ariza-worker

Saytdagi ariza formasi → shu Worker → bot → Telegram guruh.
Bot tokeni saytda emas, Cloudflare'da (secret) turadi.

## Bir martalik sozlash (~10 daqiqa, bepul, karta kerak emas)

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
