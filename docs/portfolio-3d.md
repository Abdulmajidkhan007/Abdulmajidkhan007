# portfolio-3d

> 3D portfolio sayti: React Three Fiber sahnasi, GSAP animatsiyalari, Firebase backend bilan.

**Repo:** 🔒 yopiq · **Jonli:** https://abdulmajidkhan-portfolio.web.app
**Holat:** ✅ Ishlayapti (forma — Blaze'dan keyin)

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
| Test | Vitest — invariant testlar (431 ta) |
| Hosting | Firebase Hosting |
| Backend | Cloud Functions (Node 22, TypeScript) |
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

**Ishlaydi:** sayt jonli — https://abdulmajidkhan-portfolio.web.app (Firebase
Hosting, Spark). 3D sahna, scroll animatsiyalari, 451 ta test. Deploy telefondan:
`main` ga push → GitHub Actions → Firebase (service account bilan).
Rezyume bitta manbada (`scripts/resume/resume.html`); test PDF HTML'dan
yig'ilganini, email, Telegram va bot sonini saytdagi bilan solishtiradi —
eskirgan rezyume saytda qolib ketmaydi. Har loyiha kartasida shu `docs/`
sahifalariga "Batafsil" havolasi.

**Hali yo'q:** aloqa formasi — Cloud Functions Blaze talab qiladi; billing
hisobining loyiha limiti to'lgan (`FIREBASE_PLAN=spark` rejimida forma
xato o'rniga Telegram havolasini ko'rsatadi). Mobil unumdorlik 90+ ga
chiqarilmagan; Lighthouse jonli saytda qayta o'lchanmagan; domen ulanmagan.

**2026-10-09:** Firebase'ga chiqdi (`abdulmajidkhan-portfolio`). Statistika
kartalari halol raqamlarga almashtirildi (2 yil dasturlashda, 4 jonli sayt,
13 bot, 1 real do'kon); email — abdullohhacker007@gmail.com, Telegram qo'shildi.

**2026-10-03:** Netlify'dan qolgan izlar tozalandi (robots.txt, sitemap,
rezyume — endi `web.app`), runtime Node 22 ga o'tkazildi, CI `functions/`
ni ham tekshiradi.

---

*Oxirgi yangilanish: 2026-10-09*
