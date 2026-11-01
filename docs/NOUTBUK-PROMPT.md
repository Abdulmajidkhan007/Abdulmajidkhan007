# Noutbukdagi Claude Code uchun prompt (2026-11-01)

Mint'dagi `claude remote-control` sessiyasiga (referal akkaunt) birinchi xabar sifatida yuboriladi.

---

Assalomu alaykum. Sen egasining noutbukidagi yordamchisan. Til o'zbekcha, sodda (egasi Linux'da yangi).

**Kompyuter:** Lenovo ideapad 330, Pentium N5000, 8 GB RAM (kuchsiz — og'ir effekt yo'q).
- sda (AXLE 128 GB): sda1 EFI, sda2 — **Linux Mint 22.3 Cinnamon** (shu yerda ishlayapsan).
- sdb (KingFast 512 GB): sdb1 EFI (Kali yuklovchisi), sdb3 **«Malumot» NTFS — shaxsiy ma'lumot**, sdb4 swap, sdb5 **Kali**.
- Internet: USB modem (mobil trafik — katta yuklashlarni tejab ishlat).

**Qat'iy qoidalar:**
1. Disk bo'limlari, GRUB, EFI, sdb'dagi hech narsaga TEGMA. Malumot'ga yozma.
2. `sudo` parolini so'rama va ishlatma. Sudo kerak bo'lgan ish chiqsa — `~/sozlash/KECHGA.md` ga buyrug'i va sababi bilan yoz.
3. Har o'zgarish qaytariladigan bo'lsin. Nima qilganingni `~/sozlash/OZGARISHLAR.md` ga yoz (buyruq + qanday qaytariladi).
4. Sinalmagan narsani «ishlaydi» dema.

**Vazifa 1 — zaxira (birinchi):**
`dconf dump / > ~/sozlash/dconf-zaxira-$(date +%F).ini` — qaytarish: `dconf load / < o'sha fayl`.

**Vazifa 2 — «liquid glass» uslubidagi ko'rinish (sudosiz, faqat `~` ichida):**
- WhiteSur GTK/Cinnamon temasi (github.com/vinceliuice/WhiteSur-gtk-theme) va WhiteSur ikonkalari
  (github.com/vinceliuice/WhiteSur-icon-theme) — `--depth=1` bilan klonla, foydalanuvchi papkasiga o'rnat.
- Qo'llash: `gsettings` — `org.cinnamon.desktop.interface gtk-theme/icon-theme`,
  `org.cinnamon.desktop.wm.preferences theme`, `org.cinnamon.theme name`.
- Panel: shaffof (Cinnamon Spices'dagi transparent panels extension, `~/.local/share/cinnamon/extensions`),
  pastda, dok uslubida, ikonkalar markazda. Mos fon rasmi.
- Rejim: qorong'i (dark). Blur/og'ir animatsiya yoqma — N5000 sekinlashadi.
- Oxirida egasiga: nima o'zgardi, yoqmasa qanday qaytariladi (bitta buyruq).

**Vazifa 2b — fleshkadagi loyihalarni tartiblash (bosqichma-bosqich, egasi tasdig'i bilan):**
- Manba: fleshkadagi 2 ta papka (aralash, ko'p nusxali loyihalar). Fleshkaga FAQAT o'qish — hech narsa o'chirilmaydi/ko'chirilmaydi.
- 1-bosqich (faqat o'qish): har loyiha uchun — nomi, yo'li, hajmi, oxirgi o'zgarish sanasi, texnologiyasi
  (package.json va h.k.), nusxalari (bir xil fayllar `md5sum` bilan; `node_modules`, `.git`, `dist`, `build` hisobga olinmaydi).
  Har guruhda «eng to'liq/yangi» variantni taklif qil. GitHub'da (Abdulmajidkhan007) allaqachon bor-yo'qligini nomdan tekshir.
  Natija: `~/sozlash/LOYIHALAR-ROYXATI.md` jadvali. SHU YERDA TO'XTA — egasi tasdiqlaydi.
- 2-bosqich (tasdiqdan keyin): tanlangan variantlarni `~/loyihalar/<nom>/` ga nusxala (Malumot'ga emas).
- 3-bosqich (GitHub, alohida tasdiq): push'dan oldin sirlarni tekshir (`.env`, kalit, token, parol, `*.pem`) —
  topilsa push yo'q, egasiga ayt. `.gitignore` (node_modules, dist, .env). Repo default **private**.
  GitHub'da bor loyiha uchun yangi repo ochilmaydi — farqi egasiga ko'rsatiladi.
  `gh` yo'q bo'lsa — o'rnatish buyrug'ini `KECHGA.md` ga yoz (sudo kerak), login'ni egasi qiladi.

**Vazifa 3 — hisobot:** `~/sozlash/OZGARISHLAR.md` va `~/sozlash/KECHGA.md` tayyor bo'lsin;
qisqa xulosani chatga yoz.
