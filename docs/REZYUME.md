# Abdulmajid Sharipov

**Frontend Engineer**

+998 90 854 56 03 · [abdullohhacker007@gmail.com](mailto:abdullohhacker007@gmail.com) ·
Telegram: [@Abdulloh_77700](https://t.me/Abdulloh_77700) · Qo'qon, O'zbekiston
[github.com/Abdulmajidkhan007](https://github.com/Abdulmajidkhan007) ·
[linkedin.com/in/abdulmajid-sharipov-profile](https://linkedin.com/in/abdulmajid-sharipov-profile)

---

## Profil

React va TypeScript bilan veb interfeyslar quraman. So'nggi yildagi asosiy ishim —
Next.js asosidagi e-commerce platformasi: katalog, admin panel va buyurtma oqimi;
u bugun ham real do'konda ishlatilmoqda, shu bitta baza ustida Android va desktop
ilovalarini ham yig'dim. Backend tomonini o'zim yopaman (Node.js, Python) va kerak
bo'lganda LLM integratsiyalarini qo'shaman — lekin asosiy yo'nalishim frontend.

---

## Texnik ko'nikmalar

**Frontend:** React, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux Toolkit
**Mobil va desktop:** React Native, Electron
**Backend:** Node.js, NestJS, Python (FastAPI, aiogram), REST API
**Ma'lumotlar bazasi:** Firestore, PostgreSQL, SQLite
**Vositalar:** Git, Docker, Firebase, Vite, Vitest, Playwright
**AI:** Gemini API, LangChain, ChromaDB

---

## Loyihalar

### Atoyo — e-commerce platformasi
[atoyo.uz](https://atoyo.uz) · [kod](https://github.com/Abdulmajidkhan007/atoyo-e-commerce)
`Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · Firebase (Auth, Firestore, Storage) · React Native 0.76 · Electron 33`

- Qo'qondagi santexnika do'koni uchun qurdim. Katalogda 10 000 dan ortiq mahsulot,
  bugun ham savdoda ishlatilmoqda.
- **Bitta baza — besh kanal.** Sayt, Android ilova, do'kon kompyuteri uchun ilova,
  televizor ekrani va Telegram bot bir xil Firestore ma'lumoti ustida ishlaydi: admin
  narxni bir joyda o'zgartiradi, hamma kanalda yangilanadi.
- **Android ilova** (`mobile/`) — React Native 0.76, @react-native-firebase
  (Auth, Firestore, Messaging), Google Sign-In, React Navigation 7,
  Redux Toolkit + redux-persist. Push bildirishnomalar FCM orqali.
- **Do'kon kompyuteri uchun ilova** (`desktop/`) — Electron 33 + electron-builder;
  Windows, Linux va macOS uchun yig'iladi, internet uzilganda offline sahifa
  ko'rsatiladi.
- **Do'kon televizori** — `/tv` sahifasi. Alohida ilova kerak emas: Smart TV brauzeri
  yoki Android TV box kiosk rejimida shu manzilni ochadi. Avtomatik slayder, katta narx
  va QR kod; nima ko'rsatilishi admin panelda sozlanadi.
- Katalog: cursor-based pagination va infinite scroll, kompozit indeksli filtrlar,
  xatoga chidamli qidiruv (Firestore prefiks + Fuse.js).
- Buyurtma Telegram guruhining forum topic'iga tushadi; xabar ostidagi tugmalar webhook
  orqali Firestore statusini yangilaydi — operator saytga kirmaydi. Admin yo'llari ikki
  qatlamda tekshiriladi, optom narx va tannarx mijozga umuman uzatilmaydi.

### Organick — organik oziq-ovqat do'koni
[kod](https://github.com/Abdulmajidkhan007/organick_org)
`React 19 · TypeScript · Vite · Redux Toolkit · Tailwind CSS v4 · Firebase · i18next · Playwright`

- Uch tilli interfeys (o'zbek, ingliz, rus), dark/light rejim, mobile-first layout.
- Katalog (filtr, qidiruv, saralash), savat, mahsulot sahifasi; admin panelda mahsulot
  va blog CRUD, reyting boshqaruvi.
- Firebase Auth uch usulda: Google, email/parol va SMS OTP; aloqa formasi va obuna
  Telegram guruhiga boradi.
- Playwright e2e testlari; `master` ga push bo'lganda GitHub Actions Firebase Hosting'ga
  avtomatik deploy qiladi.

### telegram-bots — 12 ta botning monorepo'si
[github.com/Abdulmajidkhan007/telegram-bots](https://github.com/Abdulmajidkhan007/telegram-bots)
`Node.js · Python · TypeScript · Gemini API · PostgreSQL · SQLite · Docker`

- 12 ta mustaqil bot bitta repoda. Boshqaruv uchun o'z CLI mni yozdim: JSON reestr
  asosida hammasini ro'yxatlaydi, o'rnatadi, sozlaydi va bittada ishga tushiradi.
- Ichida: Gemini savol-javob va yozishmalarni xulosalovchi botlar; do'kon katalogi ustida
  RAG qidiruv (LangChain + ChromaDB); rasmdan katalog kartochkasi yasovchi userbot;
  spam filtri; VirusTotal tekshiruvi; video yuklovchi; xarajat hisobi (NestJS API +
  React dashboard).
- Repo ochiq: har commit oldidan kalit skaneri ishlaydi, har tuzatilgan xato uchun
  regressiya testi yoziladi.

---

**Boshqa loyihalar.** Yuqoridagilar — production'da ishlayotgani va chiqishga tayyori.
Qolganlari (veb+mobil monorepo, React Three Fiber portfolio, o'quv markazlar uchun CRM)
GitHub profilimda.

---

*Oxirgi yangilanish: 2026-10-02*
