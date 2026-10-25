kanal: blog
holat: qoralama
loyiha: lumina

---

🔒 Lumina: soxta "follower" yozib bo'lmaydi

Lumina (Instagram uslubidagi ijtimoiy tarmoq, React Native + Firebase) da kichik,
lekin muhim teshik yopildi.

Muammo: Firestore qoidalari hisoblagichlarni (follower, like, izoh soni) faqat
maydon nomi bo'yicha tekshirardi. Profil yoki post egasi o'z sonini istalgan
qiymatga — masalan 1 000 000 ga — yozib qo'yishi mumkin edi.

Yechim: endi har yozuvda hisoblagich faqat ±1 ga o'zgaradi (egasi uchun ham),
yangi profil va post esa 0 dan boshlanadi. Bu qoidalar 9 ta yangi emulyator
testi bilan himoyalangan: eski qoidada 7 tasi yiqiladi, yangisida hammasi o'tadi.

Rostini aytsam: ±1 ni ko'p marta takrorlab sonni sekin oshirish hali mumkin.
To'liq yechim — server funksiyasi (Firebase Blaze tarifi kerak). Jonli bazada
deploy'dan keyin alohida sinalmagan.

#ReactNative #Firebase #xavfsizlik
