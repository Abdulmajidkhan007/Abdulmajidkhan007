# portfolio-3d

> 3D portfolio sayti: React Three Fiber sahnasi, GSAP animatsiyalari, Firebase backend bilan.

**Repo:** 🔒 yopiq · **Jonli:** yo'q
**Holat:** 🚧 Qurilmoqda

---

## Muammo

Dasturchi portfoliosi odatda ikki uchdan biri bo'ladi: yo oddiy statik sahifa
(esda qolmaydi), yo og'ir 3D sayt (telefonda ochilmaydi). Bu loyiha
uchinchisini izlaydi — ko'rinishi esda qoladigan, lekin **o'lchangan** sayt.

## Stack

| Qatlam | Texnologiya |
|---|---|
| 3D | React Three Fiber · three.js |
| Animatsiya | GSAP · Lenis (silliq scroll) |
| Frontend | TypeScript |
| Test | Vitest — invariant testlar (427 ta) |
| Hosting | Firebase Hosting |
| Backend | Cloud Functions (Node 20, TypeScript) |
| Baza | Cloud Firestore |

## Arxitektura: asosiy qarorlar

### 1. Unumdorlik — taxmin emas, o'lchov

Lighthouse natijalari: **desktop 97**, **mobil 65–71**.

**Nega:** "tez ko'rinadi" — tekshiruv emas. Mobil ko'rsatkich rostini aytadi:
3D sahna telefonda qimmat. Uni yashirish o'rniga yozib qo'yilgan, chunki
keyingi optimizatsiya nimadan boshlanishini aynan shu raqam ko'rsatadi.

### 2. Vitest da invariant testlar

**Nega:** 3D sahnada vizual regressiyani ko'z bilan ushlash qiyin. Invariant
test o'rniga boshqa savolga javob beradi: sahna holati qoidabuzarlikka
tushmadimi (kamera chegarasi, obyekt soni, resurs tozalanishi). Bu tez va
barqaror tekshiruv.

### 3. Netlify Forms o'rniga o'z backendi

Netlify hisobi yopilgach sayt Firebase'ga ko'chirildi. Lekin aloqa formasi
**Netlify Forms** ga tayanardi — bu faqat Netlify'da bor xizmat.

**Nega muhim:** hostingni almashtirish avtomatik ravishda backend yozishni
talab qildi. Endi forma `POST /api/contact` ga boradi, Cloud Function uni
tekshiradi (honeypot, IP bo'yicha rate limit, server tomon validatsiya),
Firestore'ga yozadi va Telegramga xabar yuboradi. Firestore qoidalari
brauzerdan har qanday o'qish va yozishni taqiqlaydi — faqat funksiyaning
o'zi tega oladi.

Shu bilan loyiha statik saytdan **full-stack** loyihaga aylandi.

### 4. Lenis — brauzer scroll'i ustiga

**Nega:** GSAP animatsiyalarini scroll bilan sinxronlashtirish uchun scroll
qiymati bashorat qilinadigan bo'lishi kerak. Brauzerlarning native scroll
xatti-harakati bir xil emas.

## Holat

**Ishlaydi:** 3D sahna, scroll animatsiyalari, 427 ta invariant test,
o'lchangan Lighthouse natijalari, Firebase Hosting konfiguratsiyasi va
aloqa formasi backendi (kod tayyor, deploy qilinmagan).

**Hali yo'q:** Firebase'ga haqiqiy deploy (Blaze rejasi kerak); mobil
unumdorlik 90+ ga chiqarilmagan; kontent to'liq to'ldirilmagan; domen
ulanmagan.

---

*Oxirgi yangilanish: 2026-09-22*
