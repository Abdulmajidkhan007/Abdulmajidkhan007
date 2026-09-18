# telegram-bots

> 12 ta mustaqil Telegram bot bitta repoda: bitta clone, bitta buyruq — hammasi ishga tushadi.

**Repo:** https://github.com/Abdulmajidkhan007/telegram-bots · **Jonli:** botlar Telegram'da
**Holat:** ✅ Ishlayapti

---

## Muammo

Har bot uchun alohida repo ochish — har safar yangi `.gitignore`, yangi
`.env.example`, yangi deploy qadamlari, yangi "qayerda edi bu?" degan savol.
Botlar soni oltitadan oshgach bu boshqarib bo'lmas holga keldi: bittasida
tuzatilgan xato boshqasida qolib ketardi, kalit tekshiruvi esa umuman yo'q edi.

Monorepo buni hal qildi — lekin shartli: **botlar bir-biriga bog'lanmasligi
kerak**. Papkani nusxalab olsang, bot mustaqil ishlashi shart.

## Stack

| Qatlam | Texnologiya |
|---|---|
| Runtime | Node.js ≥18 (7 bot) · Python 3 (4 bot) · TypeScript (1 monorepo) |
| Telegram | node-telegram-bot-api · Telethon (MTProto/userbot) · aiogram 3 |
| AI | Google Gemini API (matn, vision, audio) |
| Baza | SQLite · PostgreSQL (killspam-bot) · ChromaDB (atoyo-rag-bot) |
| Boshqaruv | `tools/run.js` — o'z CLI si, tashqi kutubxonasiz |
| Test | `node:test` + `node:assert` · Python `unittest` |

## Arxitektura: asosiy qarorlar

### 1. Har bot — mustaqil loyiha, umumiy kod YO'Q

`bots/<id>/` ichida o'z `package.json`/`requirements.txt`, o'z `.env.example`,
o'z `README.md`. `bots/x` dan `bots/y` ga `require` qilish taqiqlangan.

**Nega:** umumiy "utils" papkasi monorepolarni o'ldiradi — bitta funksiyani
o'zgartirsang, qaysi bot buzilganini bilmaysan. Mustaqillik ozgina takrorlanish
evaziga keladi, lekin bitta botni tuzatish boshqasini sindirmaydi. Va bot
kerak bo'lsa — papkasini nusxalab, alohida repo qilib yuborish mumkin.

### 2. `bots.json` — yagona reestr, kod emas

Har bot `id`, `runtime`, `install`, `start`, `autoStart`, `requires` maydonlari
bilan JSON da tasvirlanadi. `tools/run.js` shu faylni o'qib ishlaydi.

**Nega:** yangi bot qo'shish uchun CLI kodiga tegish shart emas — JSON ga bitta
yozuv qo'shiladi. Mantiq `tools/registry.js` da, I/O siz, shuning uchun uni
testdan o'tkazish oson (`tools/registry.test.js`).

### 3. Kalit tekshiruvi — commit'dan oldin, avtomatik

`tools/scan-secrets.js` butun reponi skanerlaydi va `npm run scan` har
tekshiruv zanjirida ishlaydi.

**Nega:** repo **public**. Telethon `*.session` fayli tokendan ham xavfliroq —
u akkauntga to'liq kirish beradi. Bir marta commit qilinsa, git tarixidan
o'chirish og'riqli. Avtomatik tekshiruv — eng arzon sug'urta.

### 4. Har bug uchun regressiya testi

Test avval yiqilishi kerak, tuzatishdan keyin o'tishi kerak. Aks holda bug
qaytib keladi.

**Nega:** botlar ko'p, qo'lda tekshirish imkonsiz. Tashqi xizmatlar (Telegram,
Gemini, VirusTotal) mock qilinadi — test internetga chiqmaydi va soniyalarda
tugaydi. Sekin test yozilmaydi va ishlatilmaydi.

## Botlar

| Papka | Til | Nima qiladi |
|---|---|---|
| `save-video-downloader-bot` | Node | YouTube/Instagram/TikTok dan video va MP3 (yt-dlp + ffmpeg) |
| `anonim-bot` | Node | Anonim savol-javob: referral havola, ikki tomonlama suhbat, bloklash |
| `arxiv-topadi-bot` | Node | O'chgan xabarlarni Termux + Telethon bilan tiklashni o'rgatadi |
| `gemini-qa-bot` | Node | Gemini savol-javob, suhbat konteksti bilan |
| `idfinder-bot` | Node | Foydalanuvchi / kanal / guruh ID larini topadi |
| `malware-bot` | Node | Havola va fayllarni VirusTotal orqali tekshiradi |
| `quiz-bot` | Node | IT testlari: yakka va guruh rejimi, taymer, reyting |
| `killspam-bot` | Python | Guruhlarni spam va zararli havolalardan tozalaydi |
| `xulosa-ai-bot` | Python | Guruh/kanal yozishmalarini Gemini bilan xulosalaydi, ovozli xabarni matnga o'giradi |
| `atoyo-ai-bot` | Python | Mahsulot rasmini Gemini Vision bilan katalog kartochkasiga aylantiradi (pHash dublikat filtri) |
| `atoyo-rag-bot` | Python | Katalog ustida RAG savol-javob, lid → admin guruh + n8n |
| `countlist-ts-node` | TypeScript | Xarajat boti + NestJS API + React dashboard |

## Holat

**Ishlaydi:**
- 12 ta bot, `npm run list` / `npm run start` orqali boshqariladi
- `npm run check` — testlar + kalit skaneri, yashil
- Har botda o'z README va `.env.example`

**Hali yo'q:**
- Umumiy Docker Compose (ayrim botlarda alohida bor)
- Markazlashgan log yig'ish va monitoring
- CI da avtomatik test (hozircha lokal)

**Ma'lum cheklovlar:**
- `killspam-bot` uchun PostgreSQL alohida ko'tarilishi kerak
- `atoyo-rag-bot` ishga tushishidan oldin `sync_db.py` majburiy

## Havolalar

- Repo: https://github.com/Abdulmajidkhan007/telegram-bots
- Ishlash qoidalari: repo ichidagi `CLAUDE.md`
- Qarorlar tarixi: `docs/ARXITEKTURA-TARIXI.md`

---

*Oxirgi yangilanish: 2026-09-18*
