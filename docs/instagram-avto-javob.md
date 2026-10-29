# instagram-avto-javob

Instagram Direct'ga kelgan mijoz savoliga AI avtomatik javob beradigan ko'p mijozli servis
(B yo'li); har javob haqida egasiga Telegram hisobot, xavfli mavzu — odamga uzatish.

## Muammo
Kichik biznes (do'kon, salon, restoran) Instagram'dagi bir xil savollarga (narx, manzil,
ish vaqti) qo'lda javob beradi. A yo'li — tayyor xizmatni ulash qo'llanmasi
(`telegram-bots/bots/insta-avtojavob-bot`); B — o'z mahsulotimiz.

## Stack (reja)
TypeScript, Node 22+, Fastify, Zod, PostgreSQL, grammY, Railway.

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
🚧 Faza 0: Meta Developer ilova va Business Verification (egasi qiladi). Kod hali yo'q.
Reja 2026-10-24 da `telegram-bots` dan repo ichidagi `docs/REJA.md` ga ko'chirildi.

## Havolalar
Repo private: `Abdulmajidkhan007/instagram-avto-javob`.

*Oxirgi yangilanish: 2026-10-29*
