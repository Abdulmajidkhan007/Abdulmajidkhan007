# learning-datacenter-tc-project

> O'quv markazlari va maktablar uchun on-premise CRM: o'quvchi, guruh, davomat, to'lov — hammasi markaz serverida.

**Repo:** 🔒 yopiq · **Jonli:** yo'q
**Holat:** 🚧 Qurilmoqda — Faza 0 tugagan

---

## Muammo

O'quv markazlari uchun mavjud CRM lar bulutda turadi: ma'lumot boshqa
kompaniyaning serverida, internet uzilsa ish to'xtaydi, obuna esa har oy
to'lanadi. Kichik markaz uchun bu uch tomonlama noqulaylik.

Bu loyiha teskari yondashadi: **markazning o'z serverida ishlaydi**, bitta
`install.sh` bilan ko'tariladi, internetsiz ham ishlaydi.

## Stack

| Qatlam | Texnologiya |
|---|---|
| Backend | NestJS 11 |
| ORM / Baza | Prisma 7 · PostgreSQL — 46 jadval |
| Frontend | Next.js 16 · TypeScript |
| Infra | Docker Compose · `install.sh` |

## Arxitektura: asosiy qarorlar

### 1. Ruxsatga asoslangan RBAC — rolga emas

Foydalanuvchiga rol emas, aniq **ruxsatlar** to'plami beriladi; rol — shunchaki
tayyor ruxsat to'plamining nomi.

**Nega:** "o'qituvchi", "administrator" kabi rollar real hayotda bir-biriga
o'xshamaydi — bir markazda o'qituvchi to'lovni ko'radi, boshqasida yo'q. Rolga
qattiq bog'langan tizimda har yangi holat uchun kod o'zgartirish kerak bo'ladi.
Ruxsat darajasida esa bu — sozlama.

### 2. Multi-tenancy

Bitta o'rnatma bir nechta filial yoki markazni ushlab tura oladi.

**Nega:** markazlar o'sadi va filial ochadi. Har filial uchun alohida server
ko'tarish — qo'llab-quvvatlashni ikkilantiradi.

### 3. On-premise, Docker Compose bilan

**Nega:** maqsadli mijoz — texnik xodimi bo'lmagan o'quv markazi. Yechim
"bitta skript ishga tushiring" darajasida sodda bo'lishi shart, aks holda
o'rnatilmaydi.

### 4. Prisma 7 + 46 jadval — sxema avval

**Nega:** ta'lim domeni bog'lanishlarga boy (o'quvchi ↔ guruh ↔ dars ↔ davomat
↔ to'lov). Sxemani avval to'g'ri qo'ymasa, keyingi migratsiyalar og'riqli
bo'ladi. Prisma migratsiya tarixini o'qiladigan holda saqlaydi.

## Holat

**Tugagan:** Faza 0 — ma'lumot sxemasi (46 jadval), RBAC modeli, loyiha
skeleti, Docker Compose va `install.sh`.

**Hali yo'q:** UI ning katta qismi, hisobotlar, to'lov moduli, zaxira nusxa
mexanizmi.

> ⚠️ Bu sahifa loyiha rejasi asosida yozilgan. Repo ochilganda `package.json`
> va migratsiyalar bilan solishtirib aniqlashtirilishi kerak.

---

*Oxirgi yangilanish: 2026-08-12 (repodagi so'nggi o'zgarish sanasi)*
