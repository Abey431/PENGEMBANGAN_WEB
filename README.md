# **UNIVERSITAS JANABADRA**
## **FAKULTAS TEKNIK**
## **INFORMATIKA**

### **PENGEMBANGAN APLIKASI WEB**

#### **PROYEK AKHIR SEMESTER**

## **Aplikasi Sistem Informasi E-Learning untuk Meningkatkan Mutu Pendidikan di Era Digital**

---

### **Disusun Oleh:**
- **Nama** : Taja Abi Nugraha
- **NIM**  : 24330029
- **Program Studi** : S1 Informatika
- **Fakultas** : Fakultas Teknik
- **Perguruan Tinggi** : Universitas Janabadra (UJB) Yogyakarta
- **Mata Kuliah** : Pengembangan Aplikasi Web

---

## 📌 Deskripsi Proyek
Aplikasi Sistem Informasi E-Learning ini dirancang dan dikembangkan sebagai solusi pembelajaran daring modern, interaktif, dan responsif untuk meningkatkan mutu pendidikan tinggi di era digital. Sistem ini berfokus pada kurikulum mata kuliah **Pengembangan Aplikasi Web** di Program Studi Informatika, Fakultas Teknik, Universitas Janabadra.

Dibangun dengan arsitektur **Single Page Application (SPA)** berbasis **HTML5 Semantik, Vanilla CSS3 (Custom Design System & Dark/Light Mode), dan Modern JavaScript (ES6+)** tanpa ketergantungan framework eksternal, menghasilkan performa rendering yang sangat cepat, ringan, dan efisien.

---

## 🚀 Fitur Unggulan Sistem

| No | Modul / Fitur | Deskripsi |
|---|---|---|
| 1 | **Dashboard Terpadu** | Sambutan personal untuk Taja Abi Nugraha (24330029), jam digital real-time WIB, kalender akademik, KPI statistik (IPK 3.90, Kehadiran 98%), dan jadwal perkuliahan hari ini. |
| 2 | **Ruang Belajar Interaktif** | Pemutar video kuliah (kontrol scrub, playback speed 1.0x-2.0x, fullscreen), silabus 16 pertemuan, unduhan slide materi PDF, dan *Catatan Pribadi Mahasiswa* otomatis tersimpan lokal (`localStorage`). |
| 3 | **Pusat Tugas & Proyek SPA** | Unggah berkas proyek (drag & drop simulator), submit link repositori GitHub, serta rekap nilai dan catatan umpan balik dosen. |
| 4 | **Kuis CBT Interaktif** | Ujian daring interaktif 4 soal studi kasus arsitektur web modern, timer hitung mundur 10 menit otomatis, penilaian instan (*instant scoring*), dan pembahasan kunci jawaban. |
| 5 | **Presensi Digital Kampus** | Validasi kehadiran mahasiswa dengan simulasi verifikasi radius Geolocation / GPS Kampus Timoho Universitas Janabadra disertai animasi radar scan. |
| 6 | **Forum Diskusi Akademik** | Ruang interaksi keilmuan dosen dan mahasiswa Informatika UJB dengan fitur *upvote*, balasan (*replies*), tag topik, dan pembuatan thread baru. |
| 7 | **KHS & Transkrip Digital** | Kartu Hasil Studi (KHS) resmi semester ganjil atas nama Taja Abi Nugraha lengkap dengan perhitungan IPS dan tombol cetak/simpan PDF resmi (`window.print()`). |
| 8 | **Multi-Role Switcher** | Kemampuan simulasi beralih hak akses instan antara **Mahasiswa** (*Taja Abi Nugraha*), **Dosen Pengampu** (*Ir. Bambang Pratama, M.Eng.*), dan **Admin BAPSI UJB**. |
| 9 | **Theme Engine (Dark/Light)** | Pergantian tema instan (*Zero Latency*) dengan CSS Custom Properties berpalet warna Hijau Zamrud dan Aksen Emas. |
| 10 | **Command Palette (Ctrl + K)** | Pintasan navigasi cepat ke seluruh menu, materi, dan mata kuliah secara instan. |

---

## 🛠️ Teknologi yang Digunakan

- **Struktur**: HTML5 Semantik (Header, Nav, Main, Aside, Section, Article)
- **Styling**: Vanilla CSS3 (Flexbox, CSS Grid, CSS Variables, Backdrop Filter Glassmorphism, Micro-Animations)
- **Logika & State**: Modern JavaScript (ES6+, DOM Manipulation, Pub/Sub Event Pattern, LocalStorage Persistence)
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Outfit*, dan *JetBrains Mono*)
- **Icons**: Custom Lightweight Scalable Vector Graphics (SVG)

---

## 💻 Panduan Menjalankan Aplikasi

Aplikasi bersifat *standalone* (klien mandiri) tanpa perlu menginstal dependensi Node.js atau server database eksternal:

### Cara 1: Buka Langsung di Browser
1. Buka folder proyek di File Explorer:
   ```text
   C:\Users\User\OneDrive\文档\GitHub\PENGEMBANGAN_WEB
   ```
2. **Klik dua kali (double-click)** pada file `index.html`.
3. Aplikasi akan langsung berjalan di peramban web default Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll.).

### Cara 2: Melalui VS Code Live Server (Opsional)
1. Buka folder ini di Visual Studio Code.
2. Klik kanan pada file `index.html`.
3. Pilih **"Open with Live Server"**.

---

## 📂 Struktur Direktori Proyek

```text
PENGEMBANGAN_WEB/
│
├── index.html            # Berkas HTML utama portal E-Learning UJB
├── README.md             # Dokumentasi akademik dan teknis proyek
│
├── styles/
│   ├── main.css          # Design system tokens, variabel CSS, tema gelap/terang, layout
│   ├── components.css    # Komponen tombol, kartu, badge, modal dialog, toast notifikasi
│   └── modules.css       # Modul video player, kuis CBT, presensi radar, forum, KHS
│
└── js/
    ├── data.js           # Basis data kurikulum UJB, silabus PAW, kuis, pengumuman
    ├── state.js          # Pengelola state aplikasi reaktif & persistensi localStorage
    └── app.js            # Controller logika aplikasi, client routing, & event listeners
```

---

*Proyek Akhir Semester Mata Kuliah Pengembangan Aplikasi Web — Program Studi Informatika, Fakultas Teknik, Universitas Janabadra Yogyakarta, 2026.*