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
**Hali yo'q:** Android ilova Play Store'ga chiqarilmagan
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
Keyin xuddi shu funksiyalar Android ilovaga ham qo'shildi: sevimlilar
(yurakcha + alohida ekran), blog, aloqa formasi, checkout'da promo-kod va
hudud bo'yicha yetkazish narxi, profilda hudud tanlash; admin bo'limida
hisobot, xabarlar, blog, promo-kodlar va yetkazish narxlari. Ilova ham
buyurtma paytida promo va narxlarni bazadan qayta o'qiydi — qoidalar bir xil.
Tekshiruv: tsc, lint, 168 test, Metro bundle.
APK har `main` push'da GitHub Release'ga chiqadi: https://github.com/Abdulmajidkhan007/rn-r-e-commerce/releases/latest/download/kidswear.apk
(debug kalit bilan imzolangan — telefonga o'rnatish uchun, Play Store uchun emas).

**2026-10-11:** foydalanuvchi sinovida ikki jiddiy xato chiqdi va tuzatildi:
vebda Google bilan kirish umuman ishlamagan (`initializeAuth` ga popup
resolver berilmagan, xato esa ekranda ko'rsatilmagan); APK ochilishi bilan
yopilgan (CI build'da `google-services.json` yo'q — push moduli startda
yiqitgan). Endi CI Android config'ni loyihadan oladi, push config bo'lmasa
o'chadi. Do'kon egasi har deploy'da avtomatik admin qilinadi.

**2026-10-12/13:** APK hali ham ochilishda yiqilardi (`useState of null` —
bundle'da React ikki nusxada). Metro endi bitta React oladi; ikonkalar, til va
tema tanlash, bosh sahifa dizayni tuzatildi. **2026-10-21:** egasi APK **1.0.9**
ni telefonda ochdi — bosh sahifa, katalog, Blog, Aloqa ishlaydi. Ilovada Google
bilan kirish va to'liq buyurtma oqimi hali sinalmagan.

**2026-10-21/22:** mahsulot rasmi Spark'da Firestore'ga siqib yoziladi (loyihada
Storage bucket yo'q); APK 1.0.10 dan chiqqan karta nuqsonlari (rasm eni,
yurakcha/nishon, karta eni) tuzatildi. **Mahsulot turlari:** zaxira va narx endi
har o'lcham × rang uchun alohida; tugagan kombinatsiyani tanlab bo'lmaydi; eski
mahsulot va savatlar buzilmaydi. Vebda emulyatorda to'liq oqim sinaldi, qoidalar
testlari 61 ta; Android'da bu o'zgarishlar telefonda hali sinalmagan. Spark'da
buyurtmada zaxira avtomatik kamaymasdi — endi admin tasdiqlaganda tranzaksiyada kamayadi, jurnal va "Ombor" sahifasi bor; mijoz to'lanmagan buyurtmasini bekor qila oladi (vebda emulyatorda sinalgan, Android'da sinalmagan). Fazalar rejasi:
repoda `docs/FAZALAR.md`. **Kartaga o'tkazma:** mijoz chek rasmini yuklaydi, admin
tasdiqlaydi → buyurtma to'langan (vebda emulyatorda sinalgan; telefonda va haqiqiy
o'tkazma bilan sinalmagan). **Sharhlar:** faqat yetkazilgan buyurtma egasi yozadi,
admin moderatsiya qiladi, bosh sahifada "Mijozlar fikri" (vebda emulyatorda sinalgan, Android'da sinalmagan).
**2026-10-25 — katalog boshqaruvi (Faza 6, PR #17):** chernovik, «O'chirilganlar»
(tiklash, 30 kundan keyin admin tozalaydi), ommaviy yashirish/ko'chirish/o'chirish,
rasmsizlarni yashirish, CSV eksport/import (import nofaol holda). CI yashil, CSV
import→eksport testi o'tadi; admin UI brauzerda va telefonda hali sinalmagan,
mobil adminda bu amallar yo'q (faqat veb).

## Havolalar

- Repo: https://github.com/Abdulmajidkhan007/rn-r-e-commerce
- Jonli sayt: https://kids-wear-007.web.app (Spark: demo katalog, test to'lov)
- Repo ichidagi to'liq tavsif: `docs/LOYIHA-HAQIDA.md`; funksiyalar xaritasi: `docs/FUNKSIYALAR.md`; fazalar: `docs/FAZALAR.md`

---

*Oxirgi yangilanish: 2026-10-25*
