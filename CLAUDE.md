# Abdulmajidkhan007 — profil repo qoidalari

Repo nomi = GitHub username → `README.md` profil sahifasida chiqadi. Ayni paytda
portfolio xaritasi va rezyume: ish beruvchi 2 daqiqada kimligimni tushunsin.
**Bu repo ommaviy.** Shaxsiy va ichki hujjatlar (reja, ish hisoboti, sessiyalar, mijozlar,
kompyuter, kanal matnlari, post qoralamalari) — yopiq **`Abdulmajidkhan007/hujjatlar`** repoda
(2026-11-01 dan). Bu yerga ularni qaytarib yozma.
**Yangi sessiya `hujjatlar` repodagi `docs/REJA.md` dan boshlaydi.**

## Tuzilish
- `README.md` — profil: rezyume + loyihalar jadvali
- `docs/<repo>.md` — har loyiha sahifasi (namuna `docs/SHABLON.md`)
- `docs/REZYUME.md`, `docs/REZYUME-EN-AI.md`, `docs/KEYS-ATOYO.md` — rezyume va keys
- `vizitka/` — vizitka (manba HTML, bosma PDF, PNG); lavozim/telefon o'zgarsa yangilanadi
- `hujjatlar` repoda: `docs/REJA.md`, `docs/ISH-HISOBOTI.md`, `docs/SESSIYALAR.md`,
  `docs/KANALLAR.md`, `docs/MUQOVA-XATI.md`, `docs/KOMPYUTER.md`, `docs/MIJOZ-*.md`,
  `posts/YYYY-MM-DD-<repo>-<mavzu>.md` (har post alohida fayl)
- `site/index.html` — xizmatlar sayti (GitHub Pages, `.github/workflows/pages.yml`);
  `site/keys-atoyo.html` — keys sahifasi. Ariza formasi `ARIZA_URL` ga (`ariza-worker/`,
  Cloudflare Worker — token GitHub Secrets → `.github/workflows/ariza-worker.yml` → Worker secret) yuboradi; URL bo'sh/xato bo'lsa
  Telegram chatini tayyor matn bilan ochadi

## README qoidalari
- Profil sahifasida nisbiy havola ishonchsiz → ichki havolalar TO'LIQ URL:
  `https://github.com/Abdulmajidkhan007/Abdulmajidkhan007/blob/main/docs/<fayl>.md`
- JS va ko'p HTML ishlamaydi: markdown jadval, badge, rasm, `<img align>`.
- Qisqa va skanerlanadigan; batafsili `docs/` da.
- Tarkib (2026-10-25, rezyume uslubi — darhonbek gist namunasi, o'zbekcha): ism (setext H1) →
  H3 lavozim (Strong Junior Frontend Developer) · shahar → kontaktlar bir qatorda `|` bilan →
  bir gap → buyurtma qatori → ISH TAJRIBASI → LOYIHALAR → STACK → TA'LIM → QO'SHIMCHA.
  Bo'lim sarlavhalari katta harf, setext H2. Rezyume (`docs/REZYUME.md`, portfolio-3d PDF) bilan mos.
- Loyihalar (2026-10-04 qarori, shu tartibda): atoyo-e-commerce (atoyo.uz), Organick_org,
  telegram-bots (ochiq botlar username bilan), portfolio-3d, learning-center-front
  (nurulloh-coder-dev, jamoaviy — men frontend), lumina, rn-r-e-commerce, suhbat (2026-10-30
  qo'shildi), go-uz.
  lumina va go-uz — bare React Native CLI, Expo emas.
- Holat faqat: ✅ Ishlayapti · 🚧 Qurilmoqda · ❄️ Muzlatilgan. "Rejalashtirilgan" yo'q.
  ✅ lar birinchi.
- Stack'da versiya faqat hozirgi major bo'lsa (React 19, Next.js 16, Tailwind v4, Vite 8,
  Prisma 7); aks holda versiyasiz. `docs/` da aniq versiya — fakt sifatida.

## docs/<repo>.md
Bir qatorli tavsif · muammo (kim uchun) · stack (aniq versiyalar) · arxitektura: 3–5 asosiy
qaror va **NEGA** (eng muhimi) · holat: nima ishlaydi, nima yo'q — rostini · havolalar ·
oxirgi yangilanish sanasi.

## Qoidalar
- Til o'zbekcha, texnik atamalar inglizcha.
- Kalit, token, `.env` bu repoda BO'LMAYDI.
- Holat bo'rttirilmaydi: tugallanmagan loyiha ✅ deb yozilmaydi.
- Loyiha o'zgarsa `docs/<repo>.md` yangilanadi + sana; README jadvali va `docs/` doim mos.
- Taxmin qilinmaydi: holat repodagi kod, README va commit'lardan olinadi.
- **Har loyihada sezilarli o'zgarish bo'lsa — post qoralamasi yoziladi** (`hujjatlar` repo `posts/`),
  qaysi repoda ishlanayotganidan qat'i nazar. Faqat rost: sinalmagan narsa "ishlaydi" deb yozilmaydi.
