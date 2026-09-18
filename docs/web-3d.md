# web-3d (NEBULA)

> To'liq ekranli WebGL fon va Higgsfield AI integratsiyasi — bitta kodbaza uch rejimda ishlaydi.

**Repo:** 🔒 yopiq · **Jonli:** yo'q
**Holat:** 🚧 Qurilmoqda

---

## Muammo

AI media generatsiyasiga tayangan sayt ishlab chiqishda asosiy og'riq —
**rivojlanish sikli**. Har o'zgarishni ko'rish uchun haqiqiy API ga so'rov
yuborish kerak: sekin, pullik va internetsiz umuman ishlamaydi.

## Stack

| Qatlam | Texnologiya |
|---|---|
| 3D / grafika | three.js · WebGL |
| AI | Higgsfield AI API |
| Frontend | JavaScript |

## Arxitektura: asosiy qarorlar

### 1. Uch rejim: LIVE / MOCK / BROWSER

Bitta kodbaza uchta holatda ishlaydi:
- **LIVE** — haqiqiy Higgsfield API
- **MOCK** — oldindan tayyorlangan javoblar, tarmoqsiz
- **BROWSER** — faqat brauzer imkoniyatlari bilan

**Nega:** MOCK rejimi rivojlanishni tezlashtiradi va tekinga tushiradi —
UI ustida ishlaganda AI javobi o'zgarmasligi kerak ham. BROWSER rejimi esa
API ishlamay qolganda sayt butunlay o'lib qolmasligini ta'minlaydi.

**Narxi:** uch yo'lni ham ishlaydigan holda ushlab turish kerak — har
o'zgarishda uchalasi tekshirilishi shart.

### 2. WebGL fon — kontentdan mustaqil qatlam

**Nega:** fon va kontent bir-biriga bog'lansa, fonni o'zgartirish sahifani
sindirib qo'yadi. Mustaqil qatlam sifatida u o'chirilsa ham sayt o'qiladi.

## Holat

**Ishlaydi:** WebGL fon, uch rejimning almashishi, Higgsfield integratsiyasi.

**Hali yo'q:** kontent to'liq emas, mobil optimizatsiya qilinmagan, deploy yo'q.

> ⚠️ Bu sahifa loyiha holati bo'yicha yozilgan. Repo ochilganda kod bilan
> solishtirib aniqlashtirilishi kerak.

---

*Oxirgi yangilanish: 2026-08-01 (repodagi so'nggi o'zgarish sanasi)*
