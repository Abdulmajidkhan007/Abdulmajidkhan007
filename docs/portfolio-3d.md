# portfolio-3d

> 3D portfolio sayti: React Three Fiber sahnasi, GSAP animatsiyalari, o'lchangan unumdorlik.

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
| Test | Vitest — invariant testlar |

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

### 3. Lenis — brauzer scroll'i ustiga

**Nega:** GSAP animatsiyalarini scroll bilan sinxronlashtirish uchun scroll
qiymati bashorat qilinadigan bo'lishi kerak. Brauzerlarning native scroll
xatti-harakati bir xil emas.

## Holat

**Ishlaydi:** 3D sahna, scroll animatsiyalari, invariant testlar,
o'lchangan Lighthouse natijalari.

**Hali yo'q:** mobil unumdorlik 90+ ga chiqarilmagan; kontent to'liq
to'ldirilmagan; domen ulanmagan.

> ⚠️ Bu sahifa loyiha holati bo'yicha yozilgan. Repo ochilganda kod bilan
> solishtirib aniqlashtirilishi kerak.

---

*Oxirgi yangilanish: 2026-08-08 (repodagi so'nggi o'zgarish sanasi)*
