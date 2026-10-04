# Organick_org

> Organik oziq-ovqat do'koni: uch tilli React SPA, Firebase backend va Telegram bildirishnomalari.

**Repo:** https://github.com/Abdulmajidkhan007/Organick_org · **Jonli:** https://organick-e1c5a.web.app
**Holat:** ✅ Ishlayapti

---

## Muammo

Kichik do'konga katalog, savat, buyurtma va admin panelli sayt kerak, lekin
alohida server ushlash qimmat. Firebase (Hosting + Auth + Firestore + Functions)
serversiz shuni beradi; buyurtma va murojaatlar egasiga Telegram orqali boradi.

## Stack

React 19 · TypeScript · Vite 8 · Tailwind CSS 4.3 · Redux Toolkit 2 ·
React Router 7 · i18next 26 (uz/en/ru) · Firebase 12 (Auth, Firestore, Storage,
Cloud Functions v2) · Playwright e2e · GitHub Actions (PR tekshiruvi + deploy).

## Arxitektura: asosiy qarorlar

### 1. Admin huquqi — custom claim, zaxira sifatida `admins/{uid}`

`firestore.rules` da avval token'dagi `admin` claim tekshiriladi, faqat u yo'q
bo'lsa `admins/{uid}` hujjati.

**Nega:** claim'ni brauzerdan soxtalashtirib bo'lmaydi va qo'shimcha o'qish
talab qilmaydi. Tartib ataylab: `||` qisqa tutashuvi tufayli admin so'rovlari
ortiqcha (pullik) Firestore o'qishiga aylanmaydi.

### 2. Zaxirani kamaytirish — serverda, idempotent

`applyOrderStock` Cloud Function tranzaksiyada ishlaydi va
`orders/{id}.stockApplied` bayrog'ini qo'yadi.

**Nega:** mijoz tugmani ikki marta bossa yoki tarmoq qayta urinsa ham zaxira
bir marta kamayadi; mijoz miqdorni o'zi o'zgartira olmaydi.

### 3. Reyting — faqat Admin SDK yozadi

`rateProduct` har foydalanuvchining bahosini alohida saqlaydi va qayta
baholaganda eskisini ayiradi; bu kolleksiyaga mijoz umuman tegolmaydi.

**Nega:** klient yozgan o'rtacha baho — soxtalashtirishning eng oson yo'li.

### 4. Telegram xabarlari Function orqali, IP-limit bilan

Aloqa formasi, obuna va buyurtma `sendTelegramMessage` orqali guruhning
alohida topic'lariga tushadi. Bot tokeni — Functions secret.

**Nega:** token brauzerga chiqmaydi. App Check o'rniga IP bo'yicha limit
tanlandi — Console'da ko'p qadamli sozlashsiz ishlaydi; kod keyin App
Check'ga o'tishga tayyor.

### 5. Telefon + parol uchun psevdo-email himoyasi

`blockPseudoEmailSignup` (`beforeUserCreated`) telefon raqamiga o'xshash
email bilan ro'yxatdan o'tishni bloklaydi, agar u tasdiqlangan `phone`
provayderi orqali kelmasa.

**Nega:** aks holda kimdir boshqa odamning raqami nomidan hisob ochib qo'yishi mumkin.

## Holat

**Ishlaydi:** katalog (filtr, qidiruv, saralash), mahsulot sahifasi, savat,
buyurtma, Google / email / SMS OTP orqali kirish, admin panel (mahsulot,
blog, reyting), Telegram bildirishnomalari, dark/light rejim, uch til.
**Hali yo'q:** onlayn to'lov.

## Havolalar

- Repo: https://github.com/Abdulmajidkhan007/Organick_org
- Jonli sayt: https://organick-e1c5a.web.app

---

*Oxirgi yangilanish: 2026-10-04*
