# Noutbuk yangilash — to'liq xulosa (2026-10-29)

Lenovo ideapad 330-15IGM · Pentium Silver N5000 · Windows 10 Home.
Qoida: bu noutbukka ~100$ dan ko'p sarflanmaydi, ortig'i yangi noutbuk uchun yig'iladi.

---

## 1. Usta nima qildi (Kokand_Computer)

| Band | Narx |
|---|---|
| RAM 8 GB DDR4 (eski 4 GB o'rniga) | 60$ |
| SSD 512 GB SATA (buzilgan 1 TB HDD o'rniga) | 65$ |
| Termopasta + tozalash | 150 ming (aytilgan; chegirma bo'lgan, aniq summa noma'lum) |
| Ish haqi | 240 ming |
| HDD o'qigich (eski diskdan ma'lumot olish uchun) | 80 ming |
| USB ko'paytirgich (portlar 2 ta) | 100 ming |
| Eski 4 GB RAM — usta oldi | −60 ming |
| **To'langan jami** | **1 755 000 so'm** |

- C: (eski 128 GB SSD, Windows) — **o'zgarishsiz qoldi**.
- Yangi 512 GB SSD — **bo'sh**, Windows o'rnatilmagan.
- Eski 1 TB HDD — usta olmadi (nosoz), **o'zingizda**.

**Bozor bilan solishtirish:** RAM (2026 da 8 GB DDR4 ≈ 48–64$) va SSD — normal narx.
Termopasta va ish haqi — qimmatroq. Saboq: narxni ish **boshlanishidan oldin** bandma-band kelishish.

## 2. Nega disklar kichik ko'rinadi

Ishlab chiqaruvchi 1 GB = 1 000 000 000 bayt, Windows esa 1 073 741 824 bayt deb hisoblaydi:
1 TB → 931 GB · 512 GB → 476 GB · 128 GB → 119 GB. Yana ~1 GB Windows'ning yashirin
bo'limlari (yuklash, tiklash) — shuning uchun C: **118 GB**. Hech narsa yo'qolmagan.

## 3. Eski 1 TB HDD dan ma'lumot olish

- Disk **tuzalmaydi** (jismonan yeyilgan). Muhim narsani faqat unda saqlamang.
- Fleshkaga emas, **yangi SSD ga** ko'chiring (tezroq). Avval eng muhim fayllar.
- ⚠️ Ko'chirishdan oldin `chkdsk` / «Исправить ошибки» ishlatmang — diskni o'ldirishi mumkin.
- Xatoli fayllarni tashlab ketadigan buyruq (Terminal **Администратор**; HDD harfi E: deb olingan):

```
robocopy E:\ D:\HDD-zaxira /E /R:1 /W:1 /XJ /XD "$RECYCLE.BIN" "System Volume Information" /LOG:D:\hdd-log.txt
```

## 4. Tanlov: Linux qanday ishlatiladi

Windows (118 GB) — asosiy tizim. Linux'ga o'tish ikki yo'l bilan:

| | **A: WSL2** (o'chirmasdan) | **B: Dual boot** (o'chirib-yoqib) |
|---|---|---|
| Ishlashi | Linux Windows ichida, oddiy dastur kabi | Yoqilganda menyu: Windows yoki Linux |
| Qayta yoqish | Kerak emas | Kerak |
| Tezlik | 8 GB RAM Windows bilan bo'linadi | Butun RAM Linux'ga, tezroq |
| 512 GB SSD | To'liq D: (NTFS) | ~250 GB Linux + ~225 GB «Malumot» |

**Tavsiya:** Windows asosiy bo'lsa — **A (WSL2)**. Sekin bo'lsa keyin B qo'shiladi.
Kali Linux — kundalik ish uchun emas (pentest tizimi); kerak bo'lsa fleshkada «live USB».

### A yo'li — WSL2

1. **Пуск** o'ng tugma → **Terminal (Администратор)**:
   ```
   wsl --install -d Ubuntu
   ```
2. Qayta yoqing → Ubuntu oynasida foydalanuvchi nomi va parol.
3. Linux'ni C dan D ga ko'chirish (C da joy kam), PowerShell (Администратор):
   ```
   wsl --shutdown
   wsl --export Ubuntu D:\ubuntu.tar
   wsl --unregister Ubuntu
   wsl --import Ubuntu D:\WSL\Ubuntu D:\ubuntu.tar
   del D:\ubuntu.tar
   ```
   Keyin Ubuntu ichida (ISMINGIZ — 2-qadamdagi nom):
   ```
   echo -e "[user]\ndefault=ISMINGIZ" | sudo tee /etc/wsl.conf
   ```
   PowerShell'da `wsl --shutdown` → Ubuntu'ni qayta oching.
4. VS Code'ga **WSL** kengaytmasi.
5. «Virtualizatsiya yoqilmagan» chiqsa: Fn+F2 → BIOS → Configuration →
   **Intel Virtual Technology → Enabled**.

### B yo'li — Linux Mint (Xfce) dual boot

**Nega Mint Xfce:** N5000 uchun eng yengil; Ubuntu asosida — Node, VS Code, Docker xuddi shunday.

**a) 512 GB diskni bo'lish (Windows'da):**
1. Win+X → **Управление дисками** → «Инициализация диска» → **GPT**.
2. 476 GB disk → o'ng tugma → **Создать простой том** → **230000 MB**, harf **D**,
   **NTFS**, metka **Malumot**.
3. Qolgan ~250 GB «Не распределена» qoladi — Linux uchun.

**b) Fleshka (8 GB+):**
1. linuxmint.com → Download → eng oxirgi versiya → **Xfce Edition** ISO.
2. rufus.ie → Rufus: fleshka + ISO, **GPT**, **UEFI** → START → **ISO Image mode**.

**c) Fast Startup'ni o'chirish (muhim):**
Panel управления → Электропитание → «Действия кнопок питания» → «Изменение параметров,
которые сейчас недоступны» → **«Включить быстрый запуск»** belgisini olib tashlang.

**d) Fleshkadan yuklash:**
Noutbukni yoqib darhol **Fn+F12** → USB. Ochilmasa: zaryad joyi yonidagi **Novo teshigi** →
Boot Menu. Yuklanmasa: Fn+F2 → Security → **Secure Boot → Disabled**.
«Start Linux Mint» — avval Wi-Fi, touchpad, ovozni sinang.

**e) O'rnatish:**
1. **Install Linux Mint** → til → **«Install multimedia codecs»** ✓.
2. Installation type: **«Something else»** (⚠️ «Erase disk» EMAS).
3. 476 GB diskda **«New Partition Table» BOSILMAYDI** (Malumot o'chib ketadi).
4. **~250 GB «free space»** → **+** → **Ext4**, Mount point **/** → OK.
5. **118 GB (Windows) va «Malumot» ga tegilmaydi.** → Install Now.
6. Vaqt zonasi **Tashkent**, ism, parol → 15–30 daqiqa → Restart → fleshkani oling.

**f) Keyin:**
- Update Manager → hamma yangilanish; **Timeshift** (zaxira); Driver Manager.
- Windows menyuda birinchi tursin: Software Manager → **Grub Customizer**.
- Windows'dan Linux'ga: Параметры → Обновление и безопасность → Восстановление →
  Особые варианты загрузки → «Использовать устройство» → **ubuntu**.
- Dasturchi uchun:
  ```bash
  sudo apt update && sudo apt install -y git curl build-essential
  curl -fsSL https://fnm.vercel.app/install | bash
  # terminalni qayta oching:
  fnm install --lts
  ```
  VS Code — code.visualstudio.com dan `.deb`.

| Muammo | Yechim |
|---|---|
| Menyuda Windows yo'q | `sudo update-grub` |
| Windows'da soat 5 soat xato | `timedatectl set-local-rtc 1 --adjust-system-clock` |
| To'g'ri Windows'ga kirib ketyapti | Fn+F2 → Boot → **ubuntu** birinchi |
| Wi-Fi yo'q | Driver Manager yoki telefondan USB internet |

## 5. Windows 10 ni yangilash

- Windows 10 qo'llab-quvvatlashi 2025-10 da tugagan; uy foydalanuvchilari uchun ESU ham
  2026-10 da tugagan (men bilishimcha) — yangi xavfsizlik yamoqlari kelmaydi.
1. Параметры → Обновление и безопасность → **Проверить наличие обновлений** — yangisi
   qolmaguncha takrorlang.
2. Win+R → `winver` → **22H2 (19045.xxxx)** bo'lishi kerak.
3. Windows 11: **PC Health Check** bilan tekshiring (N5000 ro'yxatda bo'lmasligi mumkin).
4. Windows 10 da qolsa: Defender'ni o'chirmang, brauzer doim yangi; bank/parol ishlari —
   Linux (dual boot) yoki telefonda.

## 6. Keyingi safar o'zingiz qilish (240 ming tejash)

| Ish | Qiyinligi |
|---|---|
| RAM / SSD almashtirish | **Oson**, ~30 daqiqa |
| Fen changini tozalash | O'rtacha |
| Termopasta | O'rtacha–qiyin — ustaga |

Asbob (~50–80 ming): PH0/PH1 otvertka, plastik lopatka, cho'tka.
Ehtiyot: zaryadlovchini uzing, qopqoq ochilgach batareya kabelini uzing, statik tokni
yo'qoting, vintlarni tartib bilan tering. Avval YouTube: **«Lenovo ideapad 330-15IGM RAM SSD upgrade»**.
Ehtiyot qismni o'zingiz oling (Uzum / bozor / OLX).

## 7. Halol fikr

N5000 — kuchsiz protsessor. 8 GB RAM + SSD bilan brauzer, VS Code, Telegram, React Native
(telefonni USB orqali ulab) yaxshi ishlaydi; Android emulyator va og'ir build sekin.
Yangi noutbukka pul yig'ish davom etadi.

## 8. Holat (2026-11-01)

- 118 GB diskka **Xubuntu 26.04** o'rnatildi (Windows o'rniga), 512 GB — «Malumot» (NTFS) + Kali uchun 80 GB.
- Egasiga yoqmagani: touchpad'ga yengil tegish bosish emas (tap-to-click o'chiq) — 9-bo'lim.
- Reja: Xfce'ni sozlash yoki Linux Mint Cinnamon'ga almashtirish — egasi tanlaydi.

## 9. Touchpad: bir tegish = bosish (Xubuntu va Kali uchun bir xil)

```bash
sudo mkdir -p /etc/X11/xorg.conf.d
sudo tee /etc/X11/xorg.conf.d/40-libinput.conf >/dev/null <<'CONF'
Section "InputClass"
  Identifier "touchpad"
  MatchIsTouchpad "on"
  Driver "libinput"
  Option "Tapping" "on"
  Option "TappingDrag" "on"
  Option "DisableWhileTyping" "on"
EndSection
CONF
```
Keyin tizimdan chiqib qayta kirish yoki `sudo reboot`. Ikki barmoq bilan tegish — o'ng tugma.
