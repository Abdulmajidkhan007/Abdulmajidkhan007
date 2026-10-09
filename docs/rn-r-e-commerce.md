# rn-r-e-commerce

> KidsWear — bolalar kiyimi do'koni: React veb va React Native (bare CLI) Android ilova, bitta monorepoda.

**Repo:** https://github.com/Abdulmajidkhan007/rn-r-e-commerce · **Jonli:** https://kids-wear-007.web.app · **Holat:** 🚧 Qurilmoqda

---

## Muammo

Veb va mobil ilovani alohida qurish — domen modeli, Firebase qatlami, savat
mantiqi va tarjimalarni ikki joyda ushlash degani. Narx yoki buyurtma
statusi qoidasi o'zgarsa, ikki marta yangilash kerak bo'ladi va ikkalasi
vaqt o'tib bir-biridan ajrab ketadi.

## Stack

| Qatlam | Veb (`apps/web`) | Mobil (`apps/mobile`) |
|---|---|---|
| Framework | Vite 8 + React 19 + TypeScript (strict) | React Native 0.85 (bare CLI) + TypeScript |
| UI | MUI 9 + Tailwind CSS v4 | React Native Paper (MD3) + NativeWind |
| Routing | react-router-dom | React Navigation 7 |
| State | Redux Toolkit 2 + redux-persist | Redux Toolkit 2 + redux-persist (AsyncStorage) |
| i18n | react-i18next (uz/en/ru) | react-i18next + react-native-localize |

Umumiy: Turborepo, Zod, TanStack Query, Firebase 12 (Auth, Firestore, Storage,
Cloud Functions, FCM), Vitest + GitHub Actions CI.

## Arxitektura: asosiy qarorlar

### 1. UI'dan boshqa hamma narsa — umumiy paketda

9 ta paket: `core` (Zod domen modeli), `firebase`, `auth`, `data`
(TanStack Query hook'lari), `store`, `i18n`, `theme`, `utils`, `config`.
UI esa har platformada alohida yoziladi.

**Nega:** MUI va React Native Paper komponentlarini bitta qilishga urinish
ikkala platformani ham yomonlashtiradi. Mantiqni bo'lishish esa arzon va
xatoni bir joyda tuzatish imkonini beradi.

### 2. Bitta design token tizimi

`@kidswear/theme` — sof TypeScript tokenlar (rang, spacing, radius,
tipografiya, animatsiya). MUI va Paper adapterlari shu tokenlardan theme
yasaydi; tegilgan komponentlarda qo'lda yozilgan hex yoki spacing qolmagan.

**Nega:** ikki xil UI kutubxonasi bo'lsa ham mahsulot bir xil ko'rinishi kerak.

### 3. Mijoz o'zini "to'ladim" deb e'lon qila olmaydi

50% oldindan to'lov Payme yoki Click orqali. Buyurtma `pending` holatda
yaratiladi, to'lov tizimi Cloud Function webhook'ini chaqiradi va statusni
faqat server admin huquqi bilan o'zgartiradi. Firestore rules buni majburlaydi.

**Nega:** to'lov holatini klientga ishonish — eng oddiy firibgarlik yo'li.

### 4. Qidiruv server tomonda

Firestore'da substring qidiruv yo'q, shuning uchun har mahsulotga so'z
prefikslari massivi (`searchTokens`) yoziladi va qidiruv bitta indekslangan
`array-contains` so'roviga aylanadi; natijalar keyset pagination bilan.

**Nega:** butun katalogni klientga yuklab filtrlash mahsulot ko'paygan sari
sekinlashadi va Firestore o'qish narxini oshiradi.

### 5. Expo'dan voz kechildi

Avval Expo bilan boshlangan, keyin bare React Native CLI ga o'tkazildi
(commit tarixida "purge Expo leftovers").

**Nega:** `@react-native-firebase`, biometrik AppLock va release signing kabi
native modullar bilan to'liq nazorat kerak bo'ldi.

## Holat

**Kodda bor:** veb va Android ilova, katalog va qidiruv, savat va checkout,
buyurtmalar (real-time), admin panel, Google Sign-In, Payme/Click oqimi,
FCM push, Firestore rules testlari, CI.
**Hali yo'q:** jonli sayt yo'q; Android ilova Play Store'ga chiqarilmagan
(faqat listing qoralamasi bor); Payme/Click merchant shartnomasi yo'q —
hozircha `mock` provayder bilan ishlaydi.

**2026-10-09:** telefondan deploy qo'shildi — `main` ga push yoki Actions →
Deploy (Firebase): test → web config loyihadan avtomatik olinadi → build →
Hosting + Firestore (`FIREBASE_PLAN=spark`). Qo'lda ishga tushirganda demo
katalogni yuklash va emailga admin huquqi berish mumkin. CI iyuldan beri
qizil edi (functions testlari uchun kutubxona o'rnatilmagan, functions
type-check test fayllarni ham tekshirgan) — tuzatildi. Functions Node 22.
Sayt chiqdi, lekin xunuk edi: MUI stillari `@layer mui` da eng past
ustuvorlikka tushib, Tailwind reset'i hamma padding/ramkani o'chirgan —
tuzatildi; do'kon sahifalari brauzer tilida (inglizcha) chiqardi — til
endi hamma joyda saqlangan tanlovga bo'ysunadi. Bosh sahifa: hero, toifadan
filtrlangan katalog, chegirmalar bo'limi.
Shu kuni atoyo'dagi 1-guruh funksiyalar qo'shildi (veb): aloqa formasi,
blog (uz/en/ru), promo-kod, 14 hudud bo'yicha yetkazish narxi, sevimlilar,
admin hisobot. Chegirma, yetkazish narxi, jami va depozit Firestore
qoidalarida qayta hisoblanadi (51 qoida testi); emulyatorda brauzer bilan
to'liq buyurtma oqimi sinaldi. Topilgan eski xato: buyurtmadan keyin mijoz
muvaffaqiyat sahifasi o'rniga bo'sh savatga tushardi — tuzatildi.

## Havolalar

- Repo: https://github.com/Abdulmajidkhan007/rn-r-e-commerce
- Jonli sayt: https://kids-wear-007.web.app (Spark: demo katalog, test to'lov)
- Repo ichidagi to'liq tavsif: `docs/LOYIHA-HAQIDA.md`; atoyo funksiyalari rejasi: `docs/REJA.md`

---

*Oxirgi yangilanish: 2026-10-09*
