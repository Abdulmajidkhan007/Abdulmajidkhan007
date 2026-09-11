Bu repo ikki vazifani bajaradi:
1. Nomi GitHub username bilan bir xil (Abdulmajidkhan007), ya'ni uning
   README.md si GITHUB PROFIL SAHIFAMDA ko'rinadi
2. Ayni paytda portfolio xaritam va rezyumem — ish beruvchi/hamkor
   ochib 2 daqiqada men kim ekanimni tushunsin

=== PROFIL README'ning TEXNIK SHARTLARI ===
- README.md ildizda turadi, GitHub uni profil sahifasida render qiladi
- Profil sahifasida NISBIY havolalar ishonchsiz hal bo'ladi. Shuning
  uchun README dagi BARCHA ichki havolalar TO'LIQ URL bo'lsin:
  https://github.com/Abdulmajidkhan007/Abdulmajidkhan007/blob/main/docs/<fayl>.md
- JavaScript va ko'p HTML render bo'lmaydi. Markdown jadval, badge,
  rasm, <img align> ishlaydi — shulardan foydalaning
- README qisqa va skanerlanadigan bo'lsin: profilga kirgan odam
  pastga uzoq aylantirmaydi. Batafsili docs/ da

=== TUZILISH ===
README.md              — profil sahifasi: rezyume + loyihalar jadvali
docs/<repo-nomi>.md    — har loyiha uchun alohida sahifa
docs/SHABLON.md        — yangi loyiha qo'shish uchun namuna
CLAUDE.md              — shu reponi yuritish qoidalari

=== README.md tarkibi ===
1. Kim: Abdulmajid Sharipov (Abdullohkhan)
   Middle Full-stack Engineer · O'zbekiston
   Aloqa: @Abdulloh_77700 · kanal: (nomi keyin beriladi)
2. Bir paragraf: nima qilaman va kim uchun —
   "O'zbek bozori uchun mahsulot quraman: veb, mobil, Telegram
   botlar, AI bilan ishlaydigan narsalar."
3. Stack — faqat HAQIQATAN ishlatganlarim, guruhlab:
   Frontend: React 19, Next.js 16, TypeScript, Tailwind v4,
     Redux Toolkit, TanStack Query, Zustand, Vite
   Mobil: React Native, Expo SDK 53, Expo Router, Reanimated
   Backend: NestJS 11, FastAPI, Express, Prisma 7, SQLAlchemy
   Baza: PostgreSQL, Firestore, Redis, MinIO
   3D: React Three Fiber, three.js, GSAP
   AI: Gemini, Anthropic SDK, Whisper
   DevOps: Docker Compose, Caddy, GitHub Actions, Firebase Hosting
   Botlar: node-telegram-bot-api, Telethon, aiogram
4. Loyihalar jadvali: nomi | nima qiladi | stack | holat | havola
   Holat FAQAT shu uchtadan biri:
     ✅ Ishlayapti   🚧 Qurilmoqda   ❄️ Muzlatilgan
   "Rejalashtirilgan" degan holat YO'Q — u bo'sh va'da.
   Jadval ✅ lardan boshlansin — eng kuchlisi birinchi ko'rinsin.

=== docs/<repo>.md — har biri uchun ===
- Bir qatorli tavsif
- Muammo: nima uchun qurilgan, kim uchun
- Stack (aniq versiyalar bilan)
- Arxitektura: 3-5 ta ASOSIY qaror va NEGA shunday qilingani
- Holat: nima ishlaydi, nima yo'q — rostini
- Havolalar: repo, jonli sayt (bo'lsa)
- Oxirgi yangilanish sanasi

"Nega" qismi eng muhimi. Stack ro'yxatini hamma yozadi; qaror
sababini yozgan odam ajralib turadi.

=== LOYIHALAR (boshlang'ich ro'yxat, tekshirilgan) ===
✅ Ishlayapti:
  atoyo-e-commerce — Next.js 16 + Firebase + Telegram integratsiya,
    10 000+ mahsulot, jonli: atoyo-uz.web.app
  telegram-bots — 11 ta bot monorepo (7 Node, 3 Python, 1 TS),
    bitta clone bilan hammasi, npm start bilan birdan ishga tushadi

🚧 Qurilmoqda:
  learning-datacenter-tc-project — on-premise maktab/o'quv markaz CRM.
    NestJS 11 + Prisma 7 + Next.js 16, 46 jadval, RBAC (rol emas —
    ruxsat), multi-tenancy, Docker + install.sh. Faza 0 tugagan
  portfolio-3d — R3F + GSAP + Lenis. Lighthouse desktop 97,
    mobil 65-71 (o'lchangan), Vitest invariant testlar
  rn-r-e-commerce (KidsWear) — web + Expo mobil monorepo, umumiy
    design token, uz/en/ru legal, SEO. Phase 8a
  go-uz (Vroom) — ride-hailing + kuryer super-app. Turborepo + pnpm,
    9 ta umumiy paket qurilgan, ilovalar in progress
  web-3d (NEBULA) — to'liq ekranli WebGL fon + Higgsfield AI.
    Bitta kodbaza uch rejimda: LIVE / MOCK / BROWSER
  lumina — Expo SDK 53 social app
  ios-asistent (Salom AI) — o'zbekcha ovozli AI yordamchi
  countlist — aiogram + FastAPI + Whisper xarajat boti

❄️ Muzlatilgan:
  DevCraft-AI — BYOK zero-knowledge (AES-256-GCM, PBKDF2),
    WebContainers sandbox. Hozircha faqat arxitektura hujjati

O'quv loyihalari (alohida bo'limda, kam joy bilan):
  bank, taxi, chat-app, social-app, calculator, chatapp,
  e-commerce-platform, atoyo

Arxivlanadi (README ga kiritilmaydi):
  first-bot, asistent-bot, portfolio-builder — bo'sh

Bu ro'yxat boshlang'ich nuqta. Har biri uchun repodagi README va
package.json ni o'qib aniqlashtiring — taxmin qilmang.

=== QOIDALAR (CLAUDE.md ga yozing) ===
- Til: o'zbekcha. Texnik atamalar inglizcha qolaveradi
- Hech qanday kalit, token, .env fayl bu repoda BO'LMAYDI
- Holatni bo'rttirmaslik: tugallanmagan loyiha "✅ Ishlayapti" deb
  yozilmaydi. Ishonch yo'qotishning eng tez yo'li — shu
- README dagi havolalar to'liq URL (profil sahifasi uchun)
- Har loyiha o'zgarganda docs/<repo>.md yangilanadi + sana qo'yiladi
- README jadvali bilan docs/ papkasi doim mos bo'lishi kerak

=== BIRINCHI VAZIFA ===
1. Tuzilishni yarating, docs/SHABLON.md yozing
2. README.md ni to'liq yozing (profil sahifasi sifatida ishlashini
   hisobga olib)
3. Eng kuchli 5 tasi uchun to'liq docs sahifasi:
   atoyo-e-commerce, learning-datacenter-tc-project, portfolio-3d,
   telegram-bots, web-3d
4. Qolganlari uchun qisqa sahifa — keyin to'ldiriladi

Ishni shoxchada qiling va PR oching.
