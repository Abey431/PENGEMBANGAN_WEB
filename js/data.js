/**
 * E-Learning UNIVERSITAS JANABADRA - Sistem Informasi Pembelajaran Digital
 * Program Studi Informatika - Fakultas Teknik
 * Mahasiswa: Taja Abi Nugraha (NIM: 24330029)
 * Mata Kuliah Utama: Pengembangan Aplikasi Web
 */

const INITIAL_DATA = {
  university: {
    name: "Universitas Janabadra",
    shortName: "UNIVERSITAS JANABADRA",
    city: "Yogyakarta",
    faculty: "Fakultas Teknik",
    department: "Informatika",
    accreditation: "Baik Sekali",
    motto: "Nasional, Berwawasan Kebangsaan, Berjiwa Kewirausahaan di Era Digital",
    semester: "Semester Ganjil 2026/2027",
    dateInfo: "Yogyakarta, Indonesia"
  },

  currentUser: {
    id: "mhs-1",
    role: "mahasiswa", // 'mahasiswa', 'dosen', 'admin'
    name: "Taja Abi Nugraha",
    identifier: "NIM: 24330029",
    program: "S1 Informatika",
    semester: "Semester 3 (Informatika)",
    class: "IF-Web A",
    dosenPa: "Ir. Bambang Pratama, S.T., M.Eng.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    email: "24330029@students.janabadra.ac.id",
    gpa: "3.90",
    totalSks: "64 SKS",
    attendanceRate: 98.0
  },

  users: {
    mahasiswa: {
      id: "mhs-1",
      role: "mahasiswa",
      name: "Taja Abi Nugraha",
      identifier: "NIM: 24330029",
      program: "S1 Informatika",
      semester: "Semester 3 (Informatika)",
      class: "IF-Web A",
      dosenPa: "Ir. Bambang Pratama, S.T., M.Eng.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
      email: "24330029@students.janabadra.ac.id",
      gpa: "3.90",
      totalSks: "64 SKS",
      attendanceRate: 98.0
    },
    dosen: {
      id: "dsn-1",
      role: "dosen",
      name: "Ir. Bambang Pratama, S.T., M.Eng.",
      identifier: "NIDN: 0514088201",
      program: "Dosen Pengampu Pengembangan Aplikasi Web / Lab Komputer",
      semester: "Dosen Pengampu & Pembimbing Akademik",
      class: "Kelas Informatika A & B",
      dosenPa: "Kepala Laboratorium Rekayasa Perangkat Lunak & Web UJB",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
      email: "bambang.pratama@janabadra.ac.id",
      gpa: "Lektor",
      totalSks: "12 SKS Mengajar",
      attendanceRate: 100.0
    },
    admin: {
      id: "adm-1",
      role: "admin",
      name: "Administrator Portal E-Learning UJB",
      identifier: "Admin ID: BAPSI-UJB-01",
      program: "Biro Administrasi Perencanaan dan Sistem Informasi (BAPSI)",
      semester: "System Administrator",
      class: "All Systems Operational",
      dosenPa: "Kepala BAPSI Universitas Janabadra",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80",
      email: "elearning.support@janabadra.ac.id",
      gpa: "v3.5.0 Enterprise",
      totalSks: "38 Matakuliah Aktif",
      attendanceRate: 99.9
    }
  },

  quickStats: {
    activeCourses: 6,
    pendingTasks: 2,
    completedTasks: 16,
    gpa: 3.90,
    attendancePct: 98.0,
    studyHours: 46.0
  },

  todaySchedule: [
    {
      id: "sch-1",
      courseId: "c-web",
      courseName: "Pengembangan Aplikasi Web",
      code: "INF-2401",
      time: "08.00 - 10.30 WIB",
      status: "Berlangsung Sekarang",
      isActive: true,
      room: "Lab Komputer Terpadu Kampus Timoho & E-Learning UJB",
      lecturer: "Ir. Bambang Pratama, S.T., M.Eng.",
      meeting: "Pertemuan 8: Modern JavaScript (ES6+), Single Page App Architecture & State Management"
    },
    {
      id: "sch-2",
      courseId: "c-rpl",
      courseName: "Rekayasa Perangkat Lunak",
      code: "INF-2403",
      time: "13.00 - 15.30 WIB",
      status: "Akan Datang",
      isActive: false,
      room: "Ruang Kuliah Gedung B Lt. 2 Kampus Pusat UJB",
      lecturer: "Dr. Sri Hartati, M.Kom.",
      meeting: "Pertemuan 8: Pemodelan Unified Modeling Language (UML) & Design Patterns"
    },
    {
      id: "sch-3",
      courseId: "c-db",
      courseName: "Sistem Basis Data",
      code: "INF-2405",
      time: "Besok, 08.30 WIB",
      status: "Besok",
      isActive: false,
      room: "Laboratorium Basis Data Kampus Timoho",
      lecturer: "Nurhadi, S.Kom., M.Cs.",
      meeting: "Pertemuan 8: Optimasi Query SQL, Relational Schema & Indexing"
    }
  ],

  courses: [
    {
      id: "c-web",
      code: "INF-2401",
      title: "Pengembangan Aplikasi Web",
      category: "Wajib Prodi",
      sks: 3,
      semester: 3,
      lecturer: "Ir. Bambang Pratama, S.T., M.Eng.",
      lecturerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80",
      description: "Mempelajari perancangan dan implementasi aplikasi web modern dari sisi frontend hingga integrasi backend: Semantic HTML5, Vanilla CSS3 Flexbox & Grid, Modern JavaScript (ES6+), Asynchronous AJAX/Fetch, Single Page Application (SPA), State Management, RESTful API, dan Keamanan Web.",
      progress: 80,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "emerald",
      coverGradient: "linear-gradient(135deg, #065f46 0%, #047857 50%, #0d9488 100%)",
      coverIcon: "globe",
      nextDeadline: "30 Sep 2026, 23:59 WIB",
      syllabus: [
        {
          week: 1,
          title: "Fondasi Web & Arsitektur Client-Server Modern",
          desc: "Protokol HTTP/HTTPS, DNS, request-response cycle, cara kerja rendering browser engine, dan instalasi workflow web development modern.",
          hasMaterial: true,
          hasQuiz: false,
          hasAssignment: false,
          completed: true,
          videoDuration: "45 Menit",
          slides: "Slide_PAW_P1_WebFoundation.pdf (2.8 MB)"
        },
        {
          week: 2,
          title: "Semantic HTML5, Aksesibilitas Web (WCAG), & SEO",
          desc: "Elemen semantik header, nav, main, section, article, form validation, semantic markup, meta tags, dan Open Graph social sharing.",
          hasMaterial: true,
          hasQuiz: true,
          hasAssignment: false,
          completed: true,
          videoDuration: "50 Menit",
          slides: "Slide_PAW_P2_HTML5_Semantic.pdf (3.4 MB)"
        },
        {
          week: 3,
          title: "Modern CSS3 Layouts: Flexbox, CSS Grid, & Responsive Design",
          desc: "Teknik layout fluid, mobile-first design, media queries, flex container & items, dynamic CSS grid template areas, dan responsive typography.",
          hasMaterial: true,
          hasQuiz: false,
          hasAssignment: true,
          completed: true,
          videoDuration: "60 Menit",
          slides: "Slide_PAW_P3_CSS_Layouts.pdf (4.5 MB)"
        },
        {
          week: 4,
          title: "Design System, CSS Custom Properties & Glassmorphism",
          desc: "Pembangunan design token (warna, tipografi, shadows), CSS Variables, implementasi tema Gelap/Terang (Dark/Light mode), dan glassmorphism efek modern.",
          hasMaterial: true,
          hasQuiz: true,
          hasAssignment: true,
          completed: true,
          videoDuration: "55 Menit",
          slides: "Slide_PAW_P4_CSS_DesignSystem.pdf (5.1 MB)"
        },
        {
          week: 5,
          title: "JavaScript Modern (ES6+): Arrow Functions, Destructuring & Modules",
          desc: "Konsep let/const, template literals, array methods (map, filter, reduce), object destructuring, spread operator, dan modul ES6 (import/export).",
          hasMaterial: true,
          hasQuiz: false,
          hasAssignment: false,
          completed: true,
          videoDuration: "65 Menit",
          slides: "Slide_PAW_P5_ES6_ModernJS.pdf (4.2 MB)"
        },
        {
          week: 6,
          title: "Asynchronous JavaScript: Promises, Async/Await & Fetch API",
          desc: "Event loop, callback hell solution, pembuatan Promises, penanganan error dengan try/catch, dan konsumsi REST API secara asinkron.",
          hasMaterial: true,
          hasQuiz: false,
          hasAssignment: true,
          completed: true,
          videoDuration: "58 Menit",
          slides: "Slide_PAW_P6_Async_FetchAPI.pdf (3.9 MB)"
        },
        {
          week: 7,
          title: "Review & Evaluasi Tengah Semester (ETS) Pengembangan Web",
          desc: "Evaluasi praktikum perancangan antarmuka responsif dan logika interaktivitas JavaScript murni pada aplikasi web.",
          hasMaterial: true,
          hasQuiz: true,
          hasAssignment: false,
          completed: true,
          videoDuration: "30 Menit",
          slides: "Panduan_ETS_PAW_2026.pdf (1.5 MB)"
        },
        {
          week: 8,
          title: "Arsitektur Single Page Application (SPA) & Reactive State Management",
          desc: "Pembuatan aplikasi satu halaman (SPA) tanpa reload, pengelolaan status reaktif (Pub/Sub pattern), localStorage persistence, dan routing modular berbasis hash/history API.",
          hasMaterial: true,
          hasQuiz: true,
          hasAssignment: true,
          completed: false, // Active Now
          videoDuration: "70 Menit",
          slides: "Slide_PAW_P8_SPA_StateManagement.pdf (6.8 MB)"
        },
        {
          week: 9,
          title: "Integrasi REST API, Autentikasi JWT & Role-Based Access Control",
          desc: "Komunikasi frontend dengan backend server, manajemen token JWT, proteksi rute aplikasi, dan verifikasi peran pengguna (Admin/Dosen/Mahasiswa).",
          hasMaterial: true,
          hasQuiz: false,
          hasAssignment: false,
          completed: false,
          videoDuration: "60 Menit",
          slides: "Slide_PAW_P9_JWT_Security.pdf (4.7 MB)"
        },
        {
          week: 10,
          title: "Web Security: Pencegahan Serangan XSS, CSRF, & Content Security Policy",
          desc: "Sanitasi input pengguna, SameSite cookie, HTTP security headers, sanitasi DOM, dan best practice keamanan aplikasi web komersial.",
          hasMaterial: true,
          hasQuiz: false,
          hasAssignment: false,
          completed: false,
          videoDuration: "50 Menit",
          slides: "Slide_PAW_P10_WebSecurity.pdf (3.6 MB)"
        }
      ]
    },
    {
      id: "c-rpl",
      code: "INF-2403",
      title: "Rekayasa Perangkat Lunak (RPL)",
      category: "Wajib Prodi",
      sks: 3,
      semester: 3,
      lecturer: "Dr. Sri Hartati, M.Kom.",
      lecturerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&q=80",
      description: "Metodologi pengembangan perangkat lunak (Agile, Scrum), requirement engineering, pemodelan sistem UML, software architecture, dan jaminan mutu pengujian perangkat lunak.",
      progress: 75,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "indigo",
      coverGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)",
      coverIcon: "code-branch",
      nextDeadline: "02 Okt 2026, 23:59 WIB"
    },
    {
      id: "c-db",
      code: "INF-2405",
      title: "Sistem Basis Data",
      category: "Wajib Prodi",
      sks: 3,
      semester: 3,
      lecturer: "Nurhadi, S.Kom., M.Cs.",
      lecturerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=80",
      description: "Desain konseptual dan logika ERD, normalisasi basis data (1NF hingga BCNF), bahasa query SQL kompleks, subquery, index optimization, dan transaksi ACID.",
      progress: 85,
      completedMeetings: 9,
      totalMeetings: 16,
      badgeColor: "amber",
      coverGradient: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)",
      coverIcon: "database",
      nextDeadline: "04 Okt 2026, 17:00 WIB"
    },
    {
      id: "c-alpro",
      code: "INF-2407",
      title: "Algoritma & Struktur Data Lanjut",
      category: "Wajib Prodi",
      sks: 3,
      semester: 3,
      lecturer: "Drs. Hendro Wijaya, M.T.",
      lecturerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80",
      description: "Analisis kompleksitas algoritma Big-O, struktur data Linked List, Stack, Queue, Binary Search Tree, Graph, serta algoritma sorting dan dynamic programming.",
      progress: 70,
      completedMeetings: 7,
      totalMeetings: 16,
      badgeColor: "purple",
      coverGradient: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)",
      coverIcon: "cpu",
      nextDeadline: "06 Okt 2026, 23:59 WIB"
    },
    {
      id: "c-jarkom",
      code: "INF-2409",
      title: "Jaringan Komputer & Komunikasi Data",
      category: "Wajib Prodi",
      sks: 3,
      semester: 3,
      lecturer: "Eko Prasetyo, S.T., M.Eng.",
      lecturerAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&q=80",
      description: "Model OSI Layer, TCP/IP, IP addressing (IPv4/IPv6), subnetting CIDR, routing protokol, VLAN switching, packet analysis menggunakan Wireshark, dan konfigurasi server.",
      progress: 88,
      completedMeetings: 10,
      totalMeetings: 16,
      badgeColor: "teal",
      coverGradient: "linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #14b8a6 100%)",
      coverIcon: "network",
      nextDeadline: "08 Okt 2026, 20:00 WIB"
    },
    {
      id: "c-pancasila",
      code: "UJB-1002",
      title: "Pancasila dan Kewarganegaraan",
      category: "Wajib Universitas",
      sks: 2,
      semester: 3,
      lecturer: "Dra. Siti Aminah, M.Hum.",
      lecturerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80",
      description: "Pendidikan karakter kebangsaan, integritas moral, etika digital saintis, dan wawasan nusantara berlandaskan semangat kebangsaan Universitas Janabadra.",
      progress: 95,
      completedMeetings: 11,
      totalMeetings: 16,
      badgeColor: "emerald",
      coverGradient: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #34d399 100%)",
      coverIcon: "shield",
      nextDeadline: "Makalah Siap"
    }
  ],

  assignments: [
    {
      id: "asg-1",
      courseId: "c-web",
      courseTitle: "Pengembangan Aplikasi Web",
      title: "Tugas Proyek 04: Implementasi Single Page Application (SPA) & Responsive Design System",
      deadline: "30 Sep 2026, 23:59 WIB",
      status: "Menunggu Penyerahan", // 'Menunggu Penyerahan', 'Telah Diserahkan', 'Dinilai'
      grade: null,
      maxGrade: 100,
      priority: "high",
      instructions: "Buat arsitektur aplikasi web Single Page Application (SPA) interaktif dengan Vanilla HTML5, CSS3 Variables (mendukung Dark/Light Mode), dan Modern ES6+ JavaScript. Wajib menyertakan pengelolaan state reaktif (localStorage), sistem routing modular, dan validasi form. Unggah berkas ZIP proyek atau link repository GitHub dan dokumen PDF laporan ringkas. Mahasiswa: Taja Abi Nugraha (NIM: 24330029).",
      submittedFile: null,
      submittedAt: null
    },
    {
      id: "asg-2",
      courseId: "c-rpl",
      courseTitle: "Rekayasa Perangkat Lunak",
      title: "Tugas 03: Pemodelan Use Case, Activity & Class Diagram",
      deadline: "02 Okt 2026, 23:59 WIB",
      status: "Menunggu Penyerahan",
      grade: null,
      maxGrade: 100,
      priority: "medium",
      instructions: "Rancang dokumen SRS ringkas dan pemodelan diagram UML untuk studi kasus sistem portal akademik kampus. Sertakan Use Case Diagram, Class Diagram relasional, dan Sequence Diagram.",
      submittedFile: null,
      submittedAt: null
    },
    {
      id: "asg-3",
      courseId: "c-db",
      courseTitle: "Sistem Basis Data",
      title: "Praktikum 02: Normalisasi Basis Data & Skrip DDL/DML",
      deadline: "20 Sep 2026, 23:59 WIB",
      status: "Dinilai",
      grade: 96,
      maxGrade: 100,
      priority: "completed",
      instructions: "Lakukan proses dekomposisi tabel dari Unnormalized Form (UNF) ke 3NF serta buat skrip query SQL pembuatan tabel beserta relasi foreign key.",
      submittedFile: "Tugas2_BasisData_TajaAbiNugraha_24330029.pdf",
      submittedAt: "19 Sep 2026, 20:15 WIB",
      feedback: "Struktur normalisasi 3NF sangat tepat, integritas referensial dan penentuan primary key sangat rapi. Luar biasa!"
    },
    {
      id: "asg-4",
      courseId: "c-jarkom",
      courseTitle: "Jaringan Komputer & Komunikasi Data",
      title: "Praktikum 01: Subnetting VLSM & Simulasi Topologi Cisco Packet Tracer",
      deadline: "16 Sep 2026, 23:59 WIB",
      status: "Dinilai",
      grade: 98,
      maxGrade: 100,
      priority: "completed",
      instructions: "Rancang pembagian alokasi IP address menggunakan Variable Length Subnet Masking (VLSM) untuk 4 laboratorium komputer Universitas Janabadra.",
      submittedFile: "Laporan_Jarkom_TajaAbiNugraha_24330029.pkt",
      submittedAt: "15 Sep 2026, 17:40 WIB",
      feedback: "Tabel perhitungan subnet mask sangat rapi dan konfigurasi routing statis pada router berjalan lancar saat ping test."
    }
  ],

  quizList: [
    {
      id: "quiz-web-1",
      courseTitle: "Pengembangan Aplikasi Web",
      title: "Kuis Interaktif: Modern Web Architecture, DOM, ES6+ & Responsive UI",
      duration: "10 Menit",
      questionsCount: 4,
      passingScore: 75,
      completed: false,
      questions: [
        {
          id: 1,
          question: "Dalam pengembangan antarmuka web modern dengan CSS3, apa keuntungan utama menggunakan 'CSS Custom Properties' (Variabel CSS, e.g. --primary-color) dibanding nilai statis?",
          options: [
            "CSS Custom Properties membuat web tidak bisa dibuka di peramban seluler",
            "Memungkinkan pembuatan sistem token desain yang dinamis, mempermudah implementasi tema Gelap/Terang (Dark/Light mode) secara instan tanpa duplikasi kode",
            "Menghapus kebutuhan tag HTML5",
            "Mengharuskan instalasi runtime bahasa C++ di server"
          ],
          correct: 1,
          explanation: "CSS Custom Properties (Variables) diwariskan secara cascading pada DOM dan dapat diubah secara real-time via class / data-theme atribut, menjadikannya standar utama dalam implementasi Dark Mode dan Design System modern."
        },
        {
          id: 2,
          question: "Dalam JavaScript modern (ES6+), fitur 'Asynchronous' menggunakan async/await dan Fetch API bertujuan untuk:",
          options: [
            "Mematikan koneksi internet pengguna secara permanen",
            "Melakukan pengambilan data dari server (HTTP request) di latar belakang tanpa membekukan antarmuka pengguna (non-blocking I/O)",
            "Menghapus cache browser secara paksa setiap detik",
            "Mengubah browser menjadi compiler bahasa Assembly"
          ],
          correct: 1,
          explanation: "JavaScript berjalan secara single-threaded pada event loop. Mekanisme asynchronous (Promises & async/await) memungkinkan web mengambil data dari server atau memproses tugas berat tanpa membuat UI 'freeze' atau lag."
        },
        {
          id: 3,
          question: "Pada arsitektur Single Page Application (SPA), bagaimana cara kerja navigasi antar tampilan halaman?",
          options: [
            "Browser harus selalu memuat ulang (full page refresh) seluruh dokumen HTML dari server pada setiap klik tombol",
            "JavaScript menangkap event klik, mencegah reload halaman penuh (e.preventDefault()), dan memperbarui komponen DOM secara dinamis menggunakan data status (client-side routing)",
            "Server menutup socket HTTP seketika",
            "Mengunduh file PDF secara otomatis ke folder download"
          ],
          correct: 1,
          explanation: "Dalam SPA, satu halaman utama dimuat sekali di awal. Navigasi selanjutnya dikelola oleh JavaScript di sisi browser dengan mengganti konten DOM secara dinamis, sehingga interaksi terasa secepat dan semulus aplikasi desktop."
        },
        {
          id: 4,
          question: "Di era digital saat ini, prinsip 'Mobile-First Design' dalam Pengembangan Aplikasi Web berarti:",
          options: [
            "Aplikasi web hanya boleh dibuka di komputer desktop berlayar besar",
            "Merancang layout dan pengalaman pengguna untuk layar seluler terlebih dahulu, kemudian menambahkan media query bertahap untuk layar tablet dan desktop",
            "Mengganti seluruh elemen teks dengan gambar resolusi rendah",
            "Menonaktifkan JavaScript pada semua perangkat smartphone"
          ],
          correct: 1,
          explanation: "Mobile-First Design mengutamakan konten inti dan performa optimal pada perangkat dengan keterbatasan layar dan bandwidth (smartphone), lalu memperkaya tampilan secara progresif (progressive enhancement) untuk layar lebih lebar."
        }
      ]
    }
  ],

  attendanceRecords: [
    {
      courseId: "c-web",
      courseName: "Pengembangan Aplikasi Web",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: true,
      todayCheckedIn: true,
      lastCheckIn: "27 Sep 2026, 08:02 WIB (GPS Terverifikasi - Kampus Timoho UJB)"
    },
    {
      courseId: "c-rpl",
      courseName: "Rekayasa Perangkat Lunak",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: true,
      todayCheckedIn: false,
      lastCheckIn: "21 Sep 2026, 13.05 WIB"
    },
    {
      courseId: "c-db",
      courseName: "Sistem Basis Data",
      totalMeetings: 16,
      attended: 9,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "22 Sep 2026, 08:35 WIB"
    },
    {
      courseId: "c-alpro",
      courseName: "Algoritma & Struktur Data Lanjut",
      totalMeetings: 16,
      attended: 7,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "23 Sep 2026, 10:05 WIB"
    },
    {
      courseId: "c-jarkom",
      courseName: "Jaringan Komputer & Komunikasi Data",
      totalMeetings: 16,
      attended: 10,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "24 Sep 2026, 09.00 WIB"
    },
    {
      courseId: "c-pancasila",
      courseName: "Pancasila dan Kewarganegaraan",
      totalMeetings: 16,
      attended: 11,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "25 Sep 2026, 11:15 WIB"
    }
  ],

  forumThreads: [
    {
      id: "thm-1",
      courseId: "c-web",
      courseTitle: "Pengembangan Aplikasi Web",
      title: "Diskusi Arsitektur: Keuntungan State Management Reaktif di JavaScript Murni vs Framework?",
      author: "Taja Abi Nugraha (NIM: 24330029)",
      authorRole: "Mahasiswa",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80",
      timestamp: "Hari ini, 08:45 WIB",
      tags: ["PengembanganWeb", "JavaScript", "StateManagement", "Janabadra"],
      upvotes: 18,
      content: "Selamat pagi Bapak Dosen dan rekan-rekan mahasiswa Informatika UJB. Dalam pengerjaan proyek akhir mata kuliah Pengembangan Aplikasi Web, kami menerapkan pola Observer/PubSub pada Vanilla JavaScript untuk sinkronisasi antarmuka dan penyimpanan localStorage. Apakah pola ini sudah cukup tangguh untuk aplikasi skala menengah sebelum beralih ke state manager pihak ketiga? Mohon arahannya.",
      replies: [
        {
          id: "rep-1",
          author: "Ir. Bambang Pratama, S.T., M.Eng.",
          authorRole: "Dosen Pengampu",
          authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80",
          timestamp: "Hari ini, 09:30 WIB",
          isLecturer: true,
          content: "Luar biasa, Taja! Memahami fondasi reactive state management di Vanilla JS (tanpa ketergantungan library luar) adalah pemahaman paling fundamental seorang web engineer. Pola Pub/Sub dengan unidirectional data flow dan persistensi localStorage yang Anda terapkan sangat bersih, memiliki overhead memori hampir nol, serta load time instan. Pertahankan arsitektur ini untuk demo proyek nanti."
        },
        {
          id: "rep-2",
          author: "Rian Hidayat (Informatika UJB)",
          authorRole: "Mahasiswa",
          authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&q=80",
          timestamp: "Hari ini, 09:55 WIB",
          isLecturer: false,
          content: "Setuju sekali dengan penjelasan Pak Bambang. Setelah mencoba demo web punya Taja, perpindahan antar halaman terasa sangat cepat tanpa lag reload sama sekali!"
        }
      ]
    },
    {
      id: "thm-2",
      courseId: "c-web",
      courseTitle: "Pengembangan Aplikasi Web",
      title: "Best Practice CSS Custom Properties untuk Fitur Dark/Light Mode yang Efisien",
      author: "Siti Rahmawati (Informatika UJB)",
      authorRole: "Mahasiswa",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80",
      timestamp: "Kemarin, 15:20 WIB",
      tags: ["CSS3", "DesignSystem", "DarkMode"],
      upvotes: 11,
      content: "Apakah lebih dianjurkan mendefinisikan variabel warna pada :root dan menggantinya dengan atribut [data-theme='dark'], atau membuat stylesheet terpisah?",
      replies: [
        {
          id: "rep-3",
          author: "Ir. Bambang Pratama, S.T., M.Eng.",
          authorRole: "Dosen Pengampu",
          authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80",
          timestamp: "Kemarin, 16:10 WIB",
          isLecturer: true,
          content: "Pendekatan dengan atribut data-theme='dark' pada tag root HTML adalah best practice standar industri saat ini karena tidak memerlukan request HTTP ulang untuk download file css baru, sehingga pergantian warna terjadi secara instan (zero latency)."
        }
      ]
    }
  ],

  academicTranscripts: [
    { code: "INF-2401", course: "Pengembangan Aplikasi Web", sks: 3, tugas: 96, kuis: 95, uts: 94, uas: 97, akhir: 95.8, grade: "A", bobot: 4.0 },
    { code: "INF-2403", course: "Rekayasa Perangkat Lunak", sks: 3, tugas: 92, kuis: 90, uts: 91, uas: 93, akhir: 91.8, grade: "A", bobot: 4.0 },
    { code: "INF-2405", course: "Sistem Basis Data", sks: 3, tugas: 96, kuis: 92, uts: 90, uas: 94, akhir: 93.2, grade: "A", bobot: 4.0 },
    { code: "INF-2407", course: "Algoritma & Struktur Data Lanjut", sks: 3, tugas: 88, kuis: 86, uts: 89, uas: 90, akhir: 88.5, grade: "A-", bobot: 3.75 },
    { code: "INF-2409", course: "Jaringan Komputer & Komunikasi Data", sks: 3, tugas: 98, kuis: 94, uts: 92, uas: 95, akhir: 95.1, grade: "A", bobot: 4.0 },
    { code: "UJB-1002", course: "Pancasila dan Kewarganegaraan", sks: 2, tugas: 94, kuis: 92, uts: 95, uas: 93, akhir: 93.6, grade: "A", bobot: 4.0 }
  ],

  announcements: [
    {
      id: "ann-1",
      title: "Jadwal Pengumpulan Proyek Akhir Mata Kuliah Pengembangan Aplikasi Web",
      date: "27 Sep 2026",
      category: "Akademik",
      isImportant: true,
      author: "Biro Akademik Fakultas Teknik Universitas Janabadra",
      content: "Diberitahukan kepada seluruh mahasiswa Informatika peserta mata kuliah Pengembangan Aplikasi Web bahwa batas pengunggahan berkas proyek SPA, repository GitHub, dan dokumentasi arsitektur sistem adalah tanggal 30 September 2026 melalui portal E-Learning UJB ini."
    },
    {
      id: "ann-2",
      title: "Seminar Teknologi: 'Modern Web Engineering & Cloud Deployment 2026'",
      date: "25 Sep 2026",
      category: "Seminar",
      isImportant: false,
      author: "Himpunan Mahasiswa Informatika (HIMTI) UJB",
      content: "Seminar diadakan di Auditorium K.R.T. Soedjadmiko Kampus Pusat Universitas Janabadra Yogyakarta. Registrasi peserta dibuka melalui menu acara di sistem ini."
    },
    {
      id: "ann-3",
      title: "Peningkatan Kapasitas Server E-Learning Universitas Janabadra",
      date: "22 Sep 2026",
      category: "Sistem",
      isImportant: false,
      author: "BAPSI Universitas Janabadra",
      content: "Server portal E-Learning telah ditingkatkan untuk mendukung akses perkuliahan daring secara cepat dan stabil bagi seluruh sivitas akademika Universitas Janabadra."
    }
  ],

  notifications: [
    {
      id: "notif-1",
      title: "Tugas Pengembangan Aplikasi Web Diterbitkan",
      message: "Ir. Bambang Pratama menerbitkan Tugas Proyek 04: Implementasi Single Page Application (SPA).",
      time: "1 jam yang lalu",
      read: false,
      type: "assignment"
    },
    {
      id: "notif-2",
      title: "Nilai Praktikum Basis Data Telah Keluar",
      message: "Taja Abi Nugraha, nilai Tugas Praktikum 02 Anda: 96/100 (Sangat Memuaskan).",
      time: "Kemarin",
      read: false,
      type: "grade"
    },
    {
      id: "notif-3",
      title: "Tanggapan Dosen di Forum Diskusi",
      message: "Ir. Bambang Pratama membalas pertanyaan Anda di topik State Management JavaScript.",
      time: "Hari ini",
      read: false,
      type: "forum"
    }
  ]
};

// Export to window for vanilla JS application
window.INITIAL_DATA = INITIAL_DATA;
