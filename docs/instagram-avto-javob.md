# instagram-avto-javob

Instagram Direct'ga kelgan mijoz savoliga AI avtomatik javob beradigan ko'p mijozli servis
(B yo'li); har javob haqida egasiga Telegram hisobot, xavfli mavzu — odamga uzatish.

## Muammo
Kichik biznes (do'kon, salon, restoran) Instagram'dagi bir xil savollarga (narx, manzil,
ish vaqti) qo'lda javob beradi. A yo'li — tayyor xizmatni ulash qo'llanmasi
(`telegram-bots/bots/insta-avtojavob-bot`); B — o'z mahsulotimiz.

## Stack
F1 da: TypeScript 6.0 (`strict`), Node 22, Fastify 5.12, Zod 4.6, ESLint 10, `node:test`.
Reja: PostgreSQL, grammY, Railway.

## Arxitektura qarorlari
- **Faqat rasmiy Meta Instagram Messaging API (webhook + OAuth)** — norasmiy kutubxonalar
  mijoz akkauntini blok xavfiga qo'yadi va parol so'raydi.
- **Webhook faqat tekshiradi va saqlaydi, AI ishchida** — Meta tez javob kutadi; qayta
  yuborilgan xabar `message id` bo'yicha dedupe.
- **Navbat Postgres'da** (`SKIP LOCKED`) — dastlab Redis kerak emas.
- **Prompt injection — 5 qoida** (REJA 7.1, 2026-10-29): AI'da tool yo'q, mijoz matni
  ko'rsatma emas, FAQ ham ishonchsiz, eng kam ruxsat, chiqish tekshiruvi — F2 da ≥20
  hujum testi. Sabab: mijoz DM'i to'g'ridan-to'g'ri modelga boradi.
- **Alohida private repo** — tijorat mantig'i (shablon, prompt, narx) public `telegram-bots` da turmasin.

## Holat (rostini)
🚧 F1 skelet (2026-11-01): webhook — imzo tekshiruvi (noto'g'ri → 401), dedupe, Meta API moduli,
echo rejimi; 38 test, lint va typecheck toza. **Haqiqiy Meta bilan sinalmagan** — Faza 0
(Meta Developer ilova, Business Verification) egasida. Keyingi: F2 — AI javob va xavfsizlik testlari.
Reja 2026-10-24 da `telegram-bots` dan repo ichidagi `docs/REJA.md` ga ko'chirildi.

## Havolalar
🔒 Private repo — ko'rish uchun so'rang.

*Oxirgi yangilanish: 2026-11-01*
