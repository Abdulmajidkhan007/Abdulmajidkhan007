# atoyo-e-commerce

> Qo'qondagi santexnika do'koni uchun to'liq e-commerce platformasi: 10 000+ mahsulot, admin panel, Telegram integratsiya.

**Repo:** https://github.com/Abdulmajidkhan007/atoyo-e-commerce · **Jonli:** https://atoyo.uz
**Holat:** ✅ Ishlayapti

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
- Katalog, filtr va qidiruv — jonli saytda
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

- Repo: https://github.com/Abdulmajidkhan007/atoyo-e-commerce
- Jonli sayt: https://atoyo.uz

---

*Oxirgi yangilanish: 2026-09-15 (repodagi so'nggi o'zgarish sanasi)*
