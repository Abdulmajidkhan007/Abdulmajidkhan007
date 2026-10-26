# atoyo-e-commerce

> Qo'qondagi santexnika do'koni uchun e-commerce platformasi: veb, Android ilova, do'kon kompyuteri, televizor ekrani va Telegram bot — bitta baza ustida.

**Repo:** private (Abdulmajidkhan007/atoyo-e-commerce, 2026-10-26 dan) · ~~Jonli: atoyo.uz~~ (to'xtatilgan)
**Holat:** ❄️ Muzlatilgan — 2026-10-26 da to'xtatildi

---

## Muammo

Do'kon savdosi Telegram kanali va qo'ng'iroq orqali ketardi. Mahsulot narxini
bilish uchun mijoz yozishi, sotuvchi javob berishi kerak edi — kunning katta
qismi shunga ketardi. Katalog hech qayerda tartibli turmasdi: narx o'zgarsa,
kanalda eski post qolib ketardi.

Kerak bo'lgan narsa: mijoz o'zi ko'radigan katalog, sotuvchi o'zi yangilaydigan
panel va buyurtma tushganda darrov xabar beradigan kanal.

## Stack

| Qatlam | Texnologiya |
|---|---|
| Frontend | Next.js 16 · React · TypeScript · Tailwind |
| Baza | Firebase Firestore (real-time) |
| Auth | Firebase Authentication — Google Sign-In + OTP |
| Hosting | Firebase Hosting |
| Integratsiya | Telegram Bot API — buyurtma xabarnomasi |

## Arxitektura: asosiy qarorlar

### 1. Firestore, PostgreSQL emas

**Nega:** do'konning ma'lumot modeli oddiy (mahsulot, toifa, buyurtma) va
o'zaro bog'lanishlar kam. Firestore real-time obunani tekinga beradi — admin
panelda narx o'zgartirilsa, ochiq turgan sahifada darrov ko'rinadi. Alohida
backend va server ushlab turish kerak emas: bitta odamlik do'kon uchun bu
haqiqiy xarajat farqi.

**Narxi:** murakkab filtrlash va hisobot yozish PostgreSQL dagidan qiyinroq.
Mahsulot 50 000 dan oshsa bu qaror qayta ko'rib chiqilishi kerak.

### 2. Telegram — bildirishnoma kanali, alohida panel emas

Har yangi buyurtma va mijoz rekvizitlari darhol operator kanaliga yuboriladi.

**Nega:** sotuvchi kun bo'yi Telegram'da. Unga yangi ilova o'rnatib, uni
ochishni o'rgatish — ishlamaydigan yechim. Buyurtma o'zi keladigan joyga
kelishi kerak.

### 3. Admin panel — sayt ichida, alohida ilova emas

**Nega:** bitta kodbaza, bitta deploy, bitta auth. Mahsulot ma'lumoti bir
joyda turadi — admin ko'rgan narsa mijoz ko'rgan narsa bilan bir xil.

### 4. Firebase Hosting

**Nega:** statik build + CDN, sozlash deyarli yo'q. O'zbekistondan kirish
tezligi yetarli. VPS ushlab turish va sertifikat yangilash ishi qolmaydi.

## Holat

**Ishlaydi:**
- Katalog, filtr va qidiruv — jonli saytda (katalog to'ldirilmoqda, ~500 mahsulot)
- Admin panel: mahsulot, toifa, qoldiq, buyurtma boshqaruvi
- Telegram xabarnomasi
- Google Sign-In va OTP

**Hali yo'q:**
- Onlayn to'lov (hozircha naqd / karta o'tkazmasi)
- Ombor qoldig'ining avtomatik hisobi
- Ko'p tilli interfeys

## Bog'liq loyihalar

- [`atoyo-ai-bot`](https://github.com/Abdulmajidkhan007/telegram-bots) — rasmni katalog kartochkasiga aylantiradi
- [`atoyo-rag-bot`](https://github.com/Abdulmajidkhan007/telegram-bots) — katalog ustida AI savol-javob

## Havolalar

- Repo: private — so'rasangiz ko'rsataman
- Jonli sayt: yo'q (2026-10-26 dan atoyo.uz vaqtincha sahifaga yo'naltiriladi)

---

## To'xtatilishi (2026-10-26)

**Asosiy sabab (egasi, 2026-10-26):** atoyo.uz dagi do'kon xodimlarining saytni
boshqarishga hozir vaqti yo'q (mahsulot kiritish, buyurtmalarni ko'rish — buni kimdir doim
qilib turishi kerak). Buning ustiga, do'kon tomonida server uchun to'lash imkoni yo'q.

**Xarajat:** Firebase Blaze oyiga taxminan 10–13 dollar chiqdi (avgust 10.70, sentabr 13.44,
oktabr 10.85). Do'kon egalariga xarajatni ulashish taklif qilindi — ular "loyiha hozir foyda
bermayapti, kerak bo'lsa o'zimiz aloqaga chiqamiz" dedi. Shuning uchun 2026-10-26 da Firebase
loyihasi (`atoyo-uz`) o'chirildi, repo private qilindi.

**Holat (rost):**
- Kod GitHub'da (private repo), o'zgarishsiz.
- Firebase loyihasi o'chirilgan: Google Cloud'da 30 kun ichida (taxminan 2026-11-25 gacha)
  qayta tiklash mumkin. Firestore (≈500 mahsulot), Storage va Auth ma'lumoti **hali
  eksport qilinmagan** — buning uchun avval tiklash va Google Cloud hisobidagi ≈30$ qarzni
  to'lash kerak.
- Ahost'dagi atoyo.uz domeni egasida; vaqtincha sahifa:
  `site/atoyo-pauza/` (GitHub Pages).
- @Atoyo_uz_bot sayt bazasiga ulangan — Firebase'siz ishlamaydi deb hisoblanadi
  (tekshirilmagan).

**Reja:** kodni boshqa santexnika do'konlariga taklif qilish — har biriga o'z Firebase
loyihasi va domeni, xarajat mijoz tomonida yoki oylik xizmatga qo'shilgan holda, yozma
kelishuv bilan.

**Saboq:** to'lov va xarajat kelishuvi ishdan oldin yozma bo'lishi kerak; Firebase'da
budjet ogohlantirishi (budget alert) boshidan qo'yilishi shart.

*Oxirgi yangilanish: 2026-10-26*
