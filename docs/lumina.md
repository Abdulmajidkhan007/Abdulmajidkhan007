# lumina

> Instagram uslubidagi social ilova — bare React Native CLI va TypeScript.

**Repo:** https://github.com/Abdulmajidkhan007/lumina · **Jonli (veb):** https://lumina-007app.web.app · **APK:** https://github.com/Abdulmajidkhan007/lumina/releases/latest/download/lumina.apk · **Holat:** 🚧 Qurilmoqda

---

## Muammo

React Native'da social ilovaning og'ir qismlarini — lenta, media, animatsiya,
offline kesh, push — real loyiha ustida o'rganish va mustahkamlash uchun qurilgan.

## Stack

React Native 0.79 (bare CLI, New Architecture) · React 19 · TypeScript (strict) ·
React Navigation 7 · TanStack Query 5 (AsyncStorage bilan offline kesh) · Zustand 5 ·
React Hook Form + Zod · Reanimated + Gesture Handler · @react-native-firebase
(Auth, Firestore, Storage, Messaging) · Sentry.

## Holat

**Ishlaydi (mobil + veb):** lenta, post (rasm/video), like/izoh/saqlash,
stories, highlights, reels, real-time direct xabarlar, explore, profil,
follow/block, shikoyat. Veb'da admin panel: foydalanuvchilar, faollik,
shikoyatlar. Real foydalanuvchilar post joylay boshlagan.
**Tarqatish:** veb — https://lumina-007app.web.app; Android APK — har
`main` push'da GitHub Release (`lumina.apk`), saytdagi "Get the app" shuni
yuklaydi. Play Store'ga chiqmagan.
**2026-10-09:** Firestore qoidalari: admin faqat tasdiqlangan email bilan,
`activityLogs` ga anonim yozish yopildi (emulyatorda sinaldi). Veb:
aniqlanmagan `bg-surface` rangi tufayli shaffof menyu/inputlar tuzatildi;
ochilmaydigan rasm o'rniga toza zaxira ko'rinish.
**Hali yo'q:** Play Store, veb'ning o'zbekcha tarjimasi, hisoblagichlarni
qoidada cheklash. To'liq tavsif va reja — repo ichida `docs/LOYIHA-HAQIDA.md`,
`docs/REJA.md`.

---

*Oxirgi yangilanish: 2026-10-09*
