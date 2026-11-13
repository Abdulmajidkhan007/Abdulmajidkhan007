# uzbek-tg

> Telegram uchun uchinchi tomon mijozi (Android): haqiqiy akkaunt bilan kirish, chatlar, media va **ghost mode** — o'qildi, onlayn va "yozmoqda" belgilari yuborilmaydi.

**Repo:** https://github.com/Abdulmajidkhan007/uzbek-tg (public) · **Jonli:** yo'q (Android ilova)
**Holat:** 🚧 Qurilmoqda

---

## Muammo

Rasmiy Telegram ilovasida chatni ochsangiz, suhbatdoshingizga "o'qildi" belgisi ketadi va onlayn ko'rinasiz. Plus Messenger va Nicegram kabi mijozlar bunga yechim beradi. Bu loyiha shunday mijozni o'zbek tilida, o'zim qurib ko'rish uchun — kim uchun: maxfiylikni xohlaydigan Telegram foydalanuvchilari (hozircha faqat men sinayapman).

## Stack

| Qatlam | Texnologiya |
|---|---|
| Mobil | React Native 0.85.3 (bare CLI, New Architecture, Hermes), React 19.2, TypeScript 6.0 |
| Telegram aloqasi | TDLib 1.8.68 (JSON interfeys) + Kotlin native modul |
| Holat va navigatsiya | Zustand 5, React Navigation 7, Reanimated 4.6, FlashList 2 |
| Infra | GitHub Actions: TDLib yig'ish va APK release |

## Arxitektura: asosiy qarorlar

### 1. Bare React Native CLI, Expo emas
**Nega:** TDLib native kutubxona va o'z Kotlin modullarim (ekran surati, ovoz yozish, fayl tanlash) kerak; qolgan ilovalarim (KidsWear, Lumina) ham shu quvurda — CI'da APK va crash ekrani tayyor. Loyiha avval Expo'da boshlangan, 0-fazada ko'chirildi.

### 2. TDLib — o'z MTProto'm emas
**Nega:** protokolni noldan yozish xavfsizlik va barqarorlik xavfi; TDLib rasmiy kutubxona va Boost litsenziyasi — ishlatish mumkin. Rasmiy Telegram ilovalarining kodi GPL, shuning uchun undan kod ko'chirilmaydi (faqat g'oya).

### 3. `api_id` / `api_hash` repoda yo'q
**Nega:** bular kalit. Ular GitHub Actions secret'larida turadi, build vaqtida `BuildConfig`ga yoziladi va JS tomonga chiqmaydi. Eslatma: kalit APK ichiga tushadi (barcha Telegram mijozlarida shunday).

### 4. Ghost mode bitta joyda
**Nega:** "o'qildi", "onlayn", "yozmoqda", "hikoya ko'rildi" chaqiruvlari kodning turli joyida. Hammasi `src/services/tdlib/ghost.ts` dagi bitta tekshiruvdan o'tadi — qaysidir joy unutilib qolib, belgi sizib chiqmasligi uchun.

### 5. TDLib alohida release'da yig'iladi
**Nega:** TDLib'ni yig'ish uzoq. U faqat versiya o'zgarganda yig'iladi va alohida release'ga qo'yiladi; APK build tayyorini oladi. APK havolasi buzilmaydi.

## Holat: nima ishlaydi, nima yo'q

**Ishlaydi (egasi 2026-10-13 da haqiqiy akkaunt bilan sinagan):** kirish (kod, 2FA), chatlar ro'yxati, guruhlar, qidiruv, papkalar va arxiv, matn yuborish, reaksiya, o'chirish, uzatish, qadash, rasm/video/ovoz/fayl ko'rish va ijro.

**Kod yozilgan, telefonda hali sinalmagan:** ghost mode (3-faza, 2026-10-25), javob (reply) va tahrirlash, rasm/video/fayl yuborish, ovozli xabar yozish, 3 til (uz/en/ru), istoriyalar, maxfiylik va xotira sozlamalari, kun/tun mavzusi.

**Hali yo'q:** qo'ng'iroqlar (WebRTC kerak), yopiq ilovaga push bildirishnomalar, izohlar (post thread), animatsiyali stikerlar, iOS.

**Ma'lum cheklov:** ghost mode'da ham chatga xabar yuborsangiz, Telegram serveri kiruvchi xabarlarni o'qilgan deb belgilashi va sizni qisqa vaqt onlayn ko'rsatishi mumkin — bu server tomonidan, mijozga bog'liq emas. Ghost mode ikkinchi akkaunt bilan hali tekshirilmagan.

## Havolalar

- Repo: https://github.com/Abdulmajidkhan007/uzbek-tg
- Reja va holat (repo ichida): `docs/REJA.md`

---

*Oxirgi yangilanish: 2026-11-13 (oxirgi kod o'zgarishi — 2026-10-25, PR #12)*
