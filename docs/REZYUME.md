# Abdulmajid Sharipov

**AI Automation & Full-stack Engineer** · Python · LLM · React

📞 +998 90 854 56 03 · ✉️ abdulmajidsharipovic@gmail.com · 📍 Qo'qon, O'zbekiston
💬 Telegram: [@Abdulloh_77700](https://t.me/Abdulloh_77700)
🔗 GitHub: [github.com/Abdulmajidkhan007](https://github.com/Abdulmajidkhan007)
🔗 LinkedIn: [linkedin.com/in/abdulmajid-sharipov-profile](https://linkedin.com/in/abdulmajid-sharipov-profile)

---

## Profil

O'zbek bozori uchun LLM-ga asoslangan mahsulotlar quraman: Telegram botlar, RAG
tizimlari va ularni biznes jarayonlariga ulovchi integratsiyalar. Kuchli tomonim —
g'oyani ishlaydigan, foydalanuvchi qo'lidagi tizimga aylantirish: 11 ta bot ishlab
chiqarishda, e-commerce platformasi jonli ishlayapti.

Asosiy yo'nalish: **Python (aiogram, Telethon, FastAPI)**, **LLM integratsiyasi
(Gemini, Anthropic Claude)**, **RAG (LangChain + ChromaDB)** va **React/TypeScript**
frontend.

---

## Texnik ko'nikmalar

| Yo'nalish | Texnologiyalar |
|---|---|
| **AI & LLM** | Google Gemini API (matn, vision, audio — multimodal), Anthropic Claude API, Prompt engineering, RAG, LangChain, ChromaDB, vektor qidiruv va embeddinglar |
| **Python** | aiogram 3, Telethon (MTProto/userbot), FastAPI, asyncio, SQLite, Pillow |
| **JavaScript / TypeScript** | React, Next.js, Redux Toolkit, TailwindCSS, Node.js, NestJS, Prisma |
| **Integratsiya** | REST API, Webhook, Telegram Bot API, Firebase (Firestore, Auth, Functions), n8n webhook, CRM/admin kanallariga lid uzatish |
| **Ma'lumotlar bazasi** | Firestore, PostgreSQL (Prisma), SQLite, ChromaDB (vektor) |
| **DevOps & vositalar** | Git, GitHub, GitHub Actions, Docker Compose, Linux / CLI, Termux |

---

## Loyihalar

### 🤖 Telegram Bots Monorepo — 11 ta bot, bitta repo
`Python` `Node.js` `Telethon` `aiogram` `Gemini API` `SQLite`
🔗 https://github.com/Abdulmajidkhan007/telegram-bots · *2026-07 → hozirgacha*

- **11 ta mustaqil bot** bitta monorepoda: har biri o'z `requirements.txt`/`package.json`,
  o'z `.env.example` va README bilan — papkani nusxalab olsang, bot alohida ishlaydi.
- **Markazlashgan CLI** (`tools/run.js`) `bots.json` reestri asosida barcha botlarni
  ro'yxatlaydi, o'rnatadi va ishga tushiradi; `tools/registry.js` — I/O siz toza mantiq,
  test bilan qoplangan.
- **Kalit sizib chiqishiga qarshi himoya**: `tools/scan-secrets.js` har commit oldidan
  avtomatik ishlaydi — repo ochiq, ichida bironta token yo'q.

### 🧠 Xulosachi AI Bot — guruh va kanallarni LLM bilan xulosalash (SaaS)
`Python` `Telethon` `Google Gemini` `SQLite`
🔗 https://github.com/Abdulmajidkhan007/xulosa-ai-bot · *2026-08*

- Guruh yozishmalari, ochiq kanal postlari va xabar havolalarini tahlil qilib
  **o'zbek tilida qisqa xulosa** qaytaradi.
- **Multimodal**: ovozli va video xabarlarni Gemini orqali matnga o'giradi
  (transkripsiya), so'ng xulosaga qo'shadi.
- **To'rt xil ulanish rejimi** bitta kodbazada: QR-login, telefon+SMS, StringSession
  (userbot) va BotFather tokeni (rasmiy Bot API).
- **Monetizatsiya mantiqi**: 3 kunlik bepul sinov, kunlik limit, chek rasmini yuborish
  → admin tasdiqlashi → obuna faollashadi. Admin panel: statistika, broadcast,
  foydalanuvchi qidiruvi, loglar.

### 🛒 Atoyo AI Katalog Userbot — rasmdan katalog kartochkasi
`Python` `Telethon` `Gemini Vision` `pHash`
🔗 `bots/atoyo-ai-bot` — https://github.com/Abdulmajidkhan007/telegram-bots · *2026-08*

- Guruhga tashlangan **mahsulot rasmini Gemini Vision** bilan tahlil qilib, tayyor
  katalog kartochkasi (nomi, kodi, kategoriya, narx, tavsif) yasaydi va kerakli
  Telegram topicga joylaydi.
- **pHash dublikat filtri** — bir xil mahsulot ikki marta joylanmaydi.
- **Ko'p kalitli Gemini rotatsiyasi** — bir kalit `429` limitga yetsa, avtomatik
  keyingisiga o'tadi, oqim to'xtamaydi.
- **Arxivni bosqichma-bosqich ko'chirish** — qayerda to'xtaganini eslab qoladi.

### 🛍 Atoyo — E-Commerce va boshqaruv platformasi
`Next.js` `TypeScript` `Firebase Firestore` `Telegram integratsiya`
🔗 https://github.com/Abdulmajidkhan007/atoyo-e-commerce · 🌐 https://atoyo-uz.web.app
*2026-07 → hozirgacha · **jonli ishlayapti***

- Mahsulotlar, toifalar, qoldiq va buyurtmalarni boshqaruvchi **to'liq admin panel**
  noldan qurildi.
- **Telegram integratsiyasi**: har bir yangi buyurtma va mijoz rekvizitlari darhol
  operator kanaliga avtomatik yuboriladi.
- Firestore real-time baza + Firebase Authentication (Google Sign-In, OTP).

### 💰 Countlist — guruh xarajatlarini hisoblovchi tizim
`TypeScript` `NestJS` `Prisma` `React` `Python`
🔗 https://github.com/Abdulmajidkhan007/countlist-ts-node ·
https://github.com/Abdulmajidkhan007/countlist · *2026-05*

- Telegram bot + **NestJS API** + React dashboard — uchtasi bitta monorepoda,
  TypeScript `strict` rejimida.
- Guruhdagi xarajatlarni yozib boradi, bo'lishadi va veb-panelda ko'rsatadi.

### 🎙 Salom AI (ios-asistent) — o'zbekcha ovozli AI yordamchi
`TypeScript` `LLM API`
🔗 https://github.com/Abdulmajidkhan007/ios-asistent · *2026-05*

- O'zbek tilida ovozli so'rovlarni qabul qilib javob beradigan AI yordamchi.

> **Yopiq repolar** (talab qilinsa, ko'rsatishga tayyorman): o'quv markazlari uchun
> on-premise CRM (NestJS 11 + Prisma 7 + Next.js 16, 46 jadval, ruxsatga asoslangan
> RBAC, multi-tenancy), R3F/WebGL portfolio, ride-hailing super-app monorepo.

---

## Ta'lim va rivojlanish

- **Pro Teach** — Dasturlash va kompyuter texnologiyalari (2024 – 2025)
- Mustaqil izlanish: LLM integratsiyalari, RAG arxitekturasi, prompt muhandisligi,
  Webhook va API dizayni

---

## Tillar

O'zbek (ona tili) · Rus · Ingliz (texnik hujjatlar)

---

*Oxirgi yangilanish: 2026-09-17. Yuqoridagi barcha havolalar ochiq — kodni
bevosita tekshirib ko'rishingiz mumkin.*
