/**
 * E-Learning UNIVERSITAS JANABADRA - Sistem Informasi Pembelajaran Digital
 * Program Studi Informatika - Fakultas Teknik
 * Mahasiswa: Taja Abi Nugraha (NIM: 24330029)
 * Jadwal Matakuliah Tahun 2026 Semester Ganjil (Semester 5)
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
    semester: "Semester 5 (Informatika)",
    class: "Kelas IF-5A",
    dosenPa: "Eri Haryanto, S.Kom., M.Kom.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    email: "24330029@students.janabadra.ac.id",
    gpa: "3.92",
    totalSks: "22 SKS Semester Ini",
    attendanceRate: 98.5
  },

  users: {
    mahasiswa: {
      id: "mhs-1",
      role: "mahasiswa",
      name: "Taja Abi Nugraha",
      identifier: "NIM: 24330029",
      program: "S1 Informatika",
      semester: "Semester 5 (Informatika)",
      class: "Kelas IF-5A",
      dosenPa: "Eri Haryanto, S.Kom., M.Kom.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
      email: "24330029@students.janabadra.ac.id",
      gpa: "3.92",
      totalSks: "22 SKS",
      attendanceRate: 98.5
    },
    dosen: {
      id: "dsn-1",
      role: "dosen",
      name: "Eri Haryanto, S.Kom., M.Kom.",
      identifier: "NIDN: 0512068401",
      program: "Dosen Pengampu Pengembangan Aplikasi Web & Praktikum PAW",
      semester: "Dosen Pengampu & Pembimbing Akademik",
      class: "Informatika Semester 5",
      dosenPa: "Koordinator Laboratorium Komputer Terpadu UJB",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
      email: "eri.haryanto@janabadra.ac.id",
      gpa: "Lektor",
      totalSks: "14 SKS Mengajar",
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
      gpa: "v3.6.0 Enterprise",
      totalSks: "12 Matakuliah Aktif",
      attendanceRate: 99.9
    }
  },

  quickStats: {
    activeCourses: 12,
    pendingTasks: 3,
    completedTasks: 21,
    gpa: 3.92,
    attendancePct: 98.5,
    studyHours: 48.0
  },

  // Today's schedule highlighting Tuesday (Selasa) from the user's timetable
  todaySchedule: [
    {
      id: "sch-1",
      courseId: "c-sosio",
      courseName: "Sosio Informatika Dan Profesionalisme",
      code: "IF2351344",
      time: "Selasa, 07:30 - 09:30 WIB",
      status: "Selesai",
      isActive: false,
      room: "Ruang Kuliah B.201 Kampus Pusat UJB",
      lecturer: "Sofyan Lukmanfiandy, S.Kom., M.Kom.",
      meeting: "Pertemuan 8: Etika Profesi & Tanggung Jawab Hukum Teknologi Informasi"
    },
    {
      id: "sch-2",
      courseId: "c-paw",
      courseName: "Pengembangan Aplikasi Web",
      code: "IF2351445",
      time: "Selasa, 10:00 - 12:10 WIB",
      status: "Berlangsung Sekarang",
      isActive: true,
      room: "Lab Komputer Terpadu Kampus Timoho & E-Learning UJB",
      lecturer: "Eri Haryanto, S.Kom., M.Kom.",
      meeting: "Pertemuan 8: Single Page Application (SPA), State Management & Fetch API"
    },
    {
      id: "sch-3",
      courseId: "c-tpp",
      courseName: "Teknik Penulisan Dan Presentasi",
      code: "IF2351353",
      time: "Selasa, 13:00 - 14:30 WIB",
      status: "Akan Datang",
      isActive: false,
      room: "Ruang Teori Gedung B Lt. 3",
      lecturer: "Fatsyahrina Fitriastuti, S.Si., M.T.",
      meeting: "Pertemuan 8: Sistematika Penulisan Laporan Ilmiah & Proposal Proyek Web"
    },
    {
      id: "sch-4",
      courseId: "c-prak-paw",
      courseName: "Praktikum Pengembangan Aplikasi Web",
      code: "IF2351446",
      time: "Kamis, 13:00 - 14:30 WIB",
      status: "Kamis Mendatang",
      isActive: false,
      room: "Lab Pemrograman Web Kampus Timoho",
      lecturer: "Eri Haryanto, S.Kom., M.Kom.",
      meeting: "Pertemuan 8: Hands-on Single Page Application & LocalStorage Persistence"
    }
  ],

  // 12 Exact Courses from the User's Schedule Image
  courses: [
    {
      id: "c-paw",
      code: "IF2351445",
      title: "Pengembangan Aplikasi Web",
      category: "Wajib Prodi",
      sks: 3,
      semester: 5,
      day: "Selasa",
      time: "10:00 s/d 12:10",
      lecturer: "Eri Haryanto, S.Kom., M.Kom.",
      lecturerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80",
      description: "Mata kuliah unggulan: Mempelajari arsitektur web modern, Semantic HTML5, Vanilla CSS3 Flexbox & Grid, Modern JavaScript (ES6+), Asynchronous AJAX/Fetch, Single Page Application (SPA), State Management reaktif, dan Web Security.",
      progress: 82,
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
          desc: "Protokol HTTP/HTTPS, DNS, request-response cycle, browser engine rendering, dan workflow web modern.",
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
          desc: "Elemen semantik header, nav, main, section, article, semantic form validation, meta tags, dan Open Graph.",
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
          desc: "Layout fluid, mobile-first design, media queries, flexbox, CSS grid template areas, dan fluid typography.",
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
          desc: "Design token (warna, tipografi), CSS variables, tema Gelap/Terang (Dark/Light mode), dan efek glassmorphism.",
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
          desc: "let/const, template literals, array methods (map, filter, reduce), object destructuring, dan modul ES6.",
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
          desc: "Event loop, Promises, error handling try/catch, dan konsumsi REST API secara asinkron.",
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
          desc: "Evaluasi praktikum perancangan antarmuka responsif dan logika interaktivitas JavaScript.",
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
          desc: "Aplikasi satu halaman (SPA) tanpa reload, pengelolaan status reaktif (Pub/Sub pattern), dan localStorage.",
          hasMaterial: true,
          hasQuiz: true,
          hasAssignment: true,
          completed: false, // Active Now!
          videoDuration: "70 Menit",
          slides: "Slide_PAW_P8_SPA_StateManagement.pdf (6.8 MB)"
        },
        {
          week: 9,
          title: "Integrasi REST API, Autentikasi JWT & Role-Based Access Control",
          desc: "Komunikasi frontend dengan backend server, manajemen token JWT, dan proteksi hak akses pengguna.",
          hasMaterial: true,
          hasQuiz: false,
          hasAssignment: false,
          completed: false,
          videoDuration: "60 Menit",
          slides: "Slide_PAW_P9_JWT_Security.pdf (4.7 MB)"
        }
      ]
    },
    {
      id: "c-prak-paw",
      code: "IF2351446",
      title: "Praktikum Pengembangan Aplikasi Web",
      category: "Praktikum",
      sks: 1,
      semester: 5,
      day: "Kamis",
      time: "13:00 s/d 14:30",
      lecturer: "Eri Haryanto, S.Kom., M.Kom.",
      lecturerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80",
      description: "Praktikum laboratorium komputer: Implementasi langsung proyek antarmuka responsif, DOM scripting, CSS animations, dan arsitektur SPA.",
      progress: 85,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "emerald",
      coverGradient: "linear-gradient(135deg, #047857 0%, #059669 50%, #10b981 100%)",
      coverIcon: "terminal",
      nextDeadline: "01 Okt 2026, 23:59 WIB"
    },
    {
      id: "c-metnum",
      code: "IF2351447",
      title: "Metode Numerik",
      category: "Wajib Prodi",
      sks: 2,
      semester: 5,
      day: "Senin",
      time: "07:30 s/d 09:30",
      lecturer: "Yumarlin Mz, S.Kom., M.Pd., M.Kom.",
      lecturerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&q=80",
      description: "Solusi aproksimasi numerik sistem persamaan linear, akar persamaan nonlinear (Biseksi, Newton-Raphson), interpolasi Lagrange, dan integrasi numerik.",
      progress: 75,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "indigo",
      coverGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)",
      coverIcon: "hash",
      nextDeadline: "05 Okt 2026, 09:30 WIB"
    },
    {
      id: "c-prak-metnum",
      code: "IF2351448",
      title: "Praktikum Metode Numerik",
      category: "Praktikum",
      sks: 1,
      semester: 5,
      day: "Senin",
      time: "10:00 s/d 12:10",
      lecturer: "Yumarlin Mz, S.Kom., M.Pd., M.Kom.",
      lecturerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&q=80",
      description: "Implementasi komputasi algoritma numerik menggunakan pemrograman Python/Matlab di laboratorium komputasi Fakultas Teknik.",
      progress: 75,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "indigo",
      coverGradient: "linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)",
      coverIcon: "code",
      nextDeadline: "05 Okt 2026, 12:10 WIB"
    },
    {
      id: "c-sosio",
      code: "IF2351344",
      title: "Sosio Informatika Dan Profesionalisme",
      category: "Wajib Prodi",
      sks: 2,
      semester: 5,
      day: "Selasa",
      time: "07:30 s/d 09:30",
      lecturer: "Sofyan Lukmanfiandy, S.Kom., M.Kom.",
      lecturerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=80",
      description: "Etika profesi teknologi informasi, Undang-Undang ITE, hak kekayaan intelektual (HAKI), privasi data, dan dampak sosial kecerdasan buatan.",
      progress: 80,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "amber",
      coverGradient: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)",
      coverIcon: "users",
      nextDeadline: "Selesai"
    },
    {
      id: "c-tpp",
      code: "IF2351353",
      title: "Teknik Penulisan Dan Presentasi",
      category: "Wajib Prodi",
      sks: 2,
      semester: 5,
      day: "Selasa",
      time: "13:00 s/d 14:30",
      lecturer: "Fatsyahrina Fitriastuti, S.Si., M.T.",
      lecturerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80",
      description: "Metodologi penulisan ilmiah standar IEEE, teknik sitasi Mendeley, perancangan slide presentasi ilmiah, dan komunikasi publik saintis.",
      progress: 80,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "purple",
      coverGradient: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)",
      coverIcon: "file-text",
      nextDeadline: "06 Okt 2026, 14:30 WIB"
    },
    {
      id: "c-mobile",
      code: "IF2351950",
      title: "Pemrograman Perangkat Bergerak",
      category: "Wajib Prodi",
      sks: 2,
      semester: 5,
      day: "Rabu",
      time: "07:30 s/d 09:30",
      lecturer: "Ryan Ari Setyawan, S.Kom, M.Eng.",
      lecturerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80",
      description: "Arsitektur aplikasi mobile Android, Kotlin, lifecycle activity & fragment, layout UI, SQLite/Room database, dan integrasi REST API.",
      progress: 75,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "teal",
      coverGradient: "linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #14b8a6 100%)",
      coverIcon: "smartphone",
      nextDeadline: "07 Okt 2026, 09:30 WIB"
    },
    {
      id: "c-ski",
      code: "IF2351452",
      title: "Sistem Komputer Interaktif",
      category: "Wajib Prodi",
      sks: 2,
      semester: 5,
      day: "Rabu",
      time: "10:00 s/d 12:10",
      lecturer: "Agustin Setiyorini, S.Kom.",
      lecturerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&q=80",
      description: "Prinsip antarmuka manusia-mesin interaktif, cognitive ergonomics, sensor input, usability engineering, dan evaluasi pengalaman pengguna.",
      progress: 80,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "emerald",
      coverGradient: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #34d399 100%)",
      coverIcon: "monitor",
      nextDeadline: "07 Okt 2026, 12:10 WIB"
    },
    {
      id: "c-prak-mobile",
      code: "IF2351451",
      title: "Praktikum Pemrogr. Perangkat Bergerak",
      category: "Praktikum",
      sks: 1,
      semester: 5,
      day: "Rabu",
      time: "10:00 s/d 12:10",
      lecturer: "Ryan Ari Setyawan, S.Kom, M.Eng.",
      lecturerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80",
      description: "Praktikum langsung pembuatan aplikasi Android di Android Studio: Layouting, ViewModel, RecyclerView, dan pemanggilan API publik.",
      progress: 75,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "teal",
      coverGradient: "linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #2dd4bf 100%)",
      coverIcon: "layers",
      nextDeadline: "07 Okt 2026, 12:10 WIB"
    },
    {
      id: "c-keamanan",
      code: "IF2372478",
      title: "Keamanan Sistem",
      category: "Pilihan Konsentrasi",
      sks: 2,
      semester: 7,
      day: "Rabu",
      time: "13:00 s/d 14:30",
      lecturer: "Erry Maricha Oky Nur Haryanto, S.Kom.",
      lecturerAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&q=80",
      description: "Prinsip CIA Triad, kriptografi simetris & asimetris, penetration testing, vulnerability assessment, keamanan jaringan, dan manajemen risiko siber.",
      progress: 85,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "red",
      coverGradient: "linear-gradient(135deg, #881337 0%, #be123c 50%, #f43f5e 100%)",
      coverIcon: "lock",
      nextDeadline: "07 Okt 2026, 14:30 WIB"
    },
    {
      id: "c-egov",
      code: "IF2372481",
      title: "E-Government",
      category: "Pilihan Konsentrasi",
      sks: 2,
      semester: 7,
      day: "Kamis",
      time: "10:00 s/d 12:10",
      lecturer: "Sri Rahayu, S.Kom., M.Eng.",
      lecturerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80",
      description: "Penerapan sistem informasi pada sektor publik pemerintahan (G2C, G2B, G2G), Sistem Pemerintahan Berbasis Elektronik (SPBE), dan interoperabilitas data.",
      progress: 90,
      completedMeetings: 9,
      totalMeetings: 16,
      badgeColor: "indigo",
      coverGradient: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #4f46e5 100%)",
      coverIcon: "landmark",
      nextDeadline: "08 Okt 2026, 12:10 WIB"
    },
    {
      id: "c-tbo",
      code: "IF2351449",
      title: "Teori Bahasa Dan Otomata",
      category: "Wajib Prodi",
      sks: 2,
      semester: 5,
      day: "Jumat",
      time: "09:00 s/d 11:15",
      lecturer: "Fatsyahrina Fitriastuti, S.Si., M.T.",
      lecturerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80",
      description: "Konsep komputasi abstrak: Finite State Automata (DFA, NFA), Regular Expression, Context-Free Grammar (CFG), Pushdown Automata, dan Mesin Turing.",
      progress: 80,
      completedMeetings: 8,
      totalMeetings: 16,
      badgeColor: "amber",
      coverGradient: "linear-gradient(135deg, #713f12 0%, #a16207 50%, #eab308 100%)",
      coverIcon: "cpu",
      nextDeadline: "09 Okt 2026, 11:15 WIB"
    }
  ],

  assignments: [
    {
      id: "asg-1",
      courseId: "c-paw",
      courseTitle: "Pengembangan Aplikasi Web (IF2351445)",
      title: "Tugas Proyek 04: Implementasi Single Page Application (SPA) & Reactive State Management",
      deadline: "30 Sep 2026, 23:59 WIB",
      status: "Menunggu Penyerahan",
      grade: null,
      maxGrade: 100,
      priority: "high",
      instructions: "Buat arsitektur aplikasi web Single Page Application (SPA) interaktif dengan Vanilla HTML5, CSS3 Custom Properties (Dark/Light Mode), dan Modern ES6+ JavaScript. Wajib menyertakan pengelolaan state reaktif (localStorage), sistem routing modular, dan validasi form. Dosen Pengampu: Eri Haryanto, S.Kom., M.Kom.",
      submittedFile: null,
      submittedAt: null
    },
    {
      id: "asg-2",
      courseId: "c-prak-paw",
      courseTitle: "Praktikum Pengembangan Aplikasi Web (IF2351446)",
      title: "Laporan Praktikum 04: DOM Manipulation & Asynchronous Fetch API",
      deadline: "01 Okt 2026, 23:59 WIB",
      status: "Menunggu Penyerahan",
      grade: null,
      maxGrade: 100,
      priority: "medium",
      instructions: "Implementasikan teknik fetch asinkron pada mockup REST API dan manipulasi elemen tabel secara dinamis. Unggah file zip laporan praktikum dan link GitHub.",
      submittedFile: null,
      submittedAt: null
    },
    {
      id: "asg-3",
      courseId: "c-metnum",
      courseTitle: "Metode Numerik (IF2351447)",
      title: "Tugas 02: Penyelesaian SPL dengan Metode Eliminasi Gauss-Jordan",
      deadline: "22 Sep 2026, 23:59 WIB",
      status: "Dinilai",
      grade: 95,
      maxGrade: 100,
      priority: "completed",
      instructions: "Selesaikan sistem persamaan linear orde 4x4 dengan metode eliminasi Gauss-Jordan dan bandingkan dengan metode dekomposisi LU.",
      submittedFile: "Tugas2_MetodeNumerik_TajaAbiNugraha_24330029.pdf",
      submittedAt: "21 Sep 2026, 19:40 WIB",
      feedback: "Perhitungan matriks sangat akurat, langkah reduksi baris elementer dijelaskan dengan runtut. Sangat baik!"
    },
    {
      id: "asg-4",
      courseId: "c-mobile",
      courseTitle: "Pemrograman Perangkat Bergerak (IF2351950)",
      title: "Proyek Mini 01: Perancangan UI/UX Dashboard Android Kotlin",
      deadline: "18 Sep 2026, 23:59 WIB",
      status: "Dinilai",
      grade: 98,
      maxGrade: 100,
      priority: "completed",
      instructions: "Buat antarmuka aplikasi Android responsif dengan ConstraintLayout dan Material Design 3 di Android Studio.",
      submittedFile: "APK_Project1_TajaAbiNugraha_24330029.zip",
      submittedAt: "17 Sep 2026, 21:10 WIB",
      feedback: "Desain UI sangat estetis, transisi activity mulus, dan konsumsi memori efisien. Pertahankan!"
    }
  ],

  quizList: [
    {
      id: "quiz-paw-1",
      courseTitle: "Pengembangan Aplikasi Web (IF2351445)",
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

  // 12 Attendance Records corresponding to the 12 Courses
  attendanceRecords: [
    {
      courseId: "c-paw",
      courseCode: "IF2351445",
      courseName: "Pengembangan Aplikasi Web",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: true,
      todayCheckedIn: true,
      lastCheckIn: "Hari ini, 10:02 WIB (GPS Terverifikasi - Kampus Timoho UJB)"
    },
    {
      courseId: "c-prak-paw",
      courseCode: "IF2351446",
      courseName: "Praktikum Pengembangan Aplikasi Web",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "25 Sep 2026, 13:05 WIB"
    },
    {
      courseId: "c-metnum",
      courseCode: "IF2351447",
      courseName: "Metode Numerik",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "22 Sep 2026, 07:35 WIB"
    },
    {
      courseId: "c-prak-metnum",
      courseCode: "IF2351448",
      courseName: "Praktikum Metode Numerik",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "22 Sep 2026, 10:05 WIB"
    },
    {
      courseId: "c-sosio",
      courseCode: "IF2351344",
      courseName: "Sosio Informatika Dan Profesionalisme",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: true,
      todayCheckedIn: true,
      lastCheckIn: "Hari ini, 07:32 WIB"
    },
    {
      courseId: "c-tpp",
      courseCode: "IF2351353",
      courseName: "Teknik Penulisan Dan Presentasi",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: true,
      todayCheckedIn: false,
      lastCheckIn: "15 Sep 2026, 13:02 WIB"
    },
    {
      courseId: "c-mobile",
      courseCode: "IF2351950",
      courseName: "Pemrograman Perangkat Bergerak",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "24 Sep 2026, 07:35 WIB"
    },
    {
      courseId: "c-ski",
      courseCode: "IF2351452",
      courseName: "Sistem Komputer Interaktif",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "24 Sep 2026, 10:05 WIB"
    },
    {
      courseId: "c-prak-mobile",
      courseCode: "IF2351451",
      courseName: "Praktikum Pemrogr. Perangkat Bergerak",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "24 Sep 2026, 10:08 WIB"
    },
    {
      courseId: "c-keamanan",
      courseCode: "IF2372478",
      courseName: "Keamanan Sistem",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "24 Sep 2026, 13:05 WIB"
    },
    {
      courseId: "c-egov",
      courseCode: "IF2372481",
      courseName: "E-Government",
      totalMeetings: 16,
      attended: 9,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "25 Sep 2026, 10:05 WIB"
    },
    {
      courseId: "c-tbo",
      courseCode: "IF2351449",
      courseName: "Teori Bahasa Dan Otomata",
      totalMeetings: 16,
      attended: 8,
      absent: 0,
      permit: 0,
      percentage: 100,
      todayEligible: false,
      todayCheckedIn: false,
      lastCheckIn: "26 Sep 2026, 09:05 WIB"
    }
  ],

  forumThreads: [
    {
      id: "thm-1",
      courseId: "c-paw",
      courseTitle: "Pengembangan Aplikasi Web (IF2351445)",
      title: "Diskusi Arsitektur: State Management Reaktif di JavaScript Murni vs Framework?",
      author: "Taja Abi Nugraha (NIM: 24330029)",
      authorRole: "Mahasiswa",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80",
      timestamp: "Hari ini, 09:15 WIB",
      tags: ["PengembanganWeb", "JavaScript", "StateManagement", "Janabadra"],
      upvotes: 21,
      content: "Selamat pagi Pak Eri Haryanto dan rekan-rekan Informatika UJB. Dalam pengerjaan proyek mata kuliah Pengembangan Aplikasi Web, kami menerapkan pola Observer/PubSub pada Vanilla JavaScript untuk sinkronisasi antarmuka dan persistensi localStorage. Apakah pola ini sudah optimal untuk aplikasi skala menengah sebelum beralih ke library eksternal? Mohon arahannya.",
      replies: [
        {
          id: "rep-1",
          author: "Eri Haryanto, S.Kom., M.Kom.",
          authorRole: "Dosen Pengampu",
          authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80",
          timestamp: "Hari ini, 10:05 WIB",
          isLecturer: true,
          content: "Luar biasa, Taja! Memahami fondasi reactive state management di Vanilla JS (tanpa ketergantungan framework luar) adalah keahlian fundamental seorang web engineer. Pola Pub/Sub dengan data flow terarah dan persistensi localStorage yang Anda terapkan sangat bersih, memiliki overhead memori hampir nol, serta load time instan. Pertahankan arsitektur ini untuk demo proyek nanti."
        },
        {
          id: "rep-2",
          author: "Rian Hidayat (Informatika UJB)",
          authorRole: "Mahasiswa",
          authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&q=80",
          timestamp: "Hari ini, 10:20 WIB",
          isLecturer: false,
          content: "Sepakat sekali dengan penjelasan Pak Eri. Navigasi SPA dan responsivitas web punya Taja sangat cepat dan mulus!"
        }
      ]
    },
    {
      id: "thm-2",
      courseId: "c-mobile",
      courseTitle: "Pemrograman Perangkat Bergerak (IF2351950)",
      title: "Komunikasi Antara Aplikasi Mobile Android dan Web API (REST Endpoint)",
      author: "Siti Rahmawati (Informatika UJB)",
      authorRole: "Mahasiswa",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80",
      timestamp: "Kemarin, 14:10 WIB",
      tags: ["Mobile", "Android", "RestAPI"],
      upvotes: 14,
      content: "Apakah Retrofit 2 di Android dapat mengonsumsi endpoint REST yang sama persis dengan yang diakses oleh Fetch API pada aplikasi Pengembangan Aplikasi Web?",
      replies: [
        {
          id: "rep-3",
          author: "Ryan Ari Setyawan, S.Kom, M.Eng.",
          authorRole: "Dosen Pengampu",
          authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80",
          timestamp: "Kemarin, 15:30 WIB",
          isLecturer: true,
          content: "Tepat sekali Siti. Inilah esensi arsitektur RESTful API: backend menyediakan format pertukaran data standar (JSON) yang dapat dikonsumsi secara serentak oleh web frontend maupun mobile client."
        }
      ]
    }
  ],

  // 12 Exact Courses for Academic Transcript (Total 22 SKS)
  academicTranscripts: [
    { code: "IF2351445", course: "Pengembangan Aplikasi Web", sks: 3, tugas: 96, kuis: 95, uts: 94, uas: 97, akhir: 95.8, grade: "A", bobot: 4.0 },
    { code: "IF2351446", course: "Praktikum Pengembangan Aplikasi Web", sks: 1, tugas: 98, kuis: 96, uts: 95, uas: 98, akhir: 97.0, grade: "A", bobot: 4.0 },
    { code: "IF2351447", course: "Metode Numerik", sks: 2, tugas: 95, kuis: 90, uts: 92, uas: 94, akhir: 93.1, grade: "A", bobot: 4.0 },
    { code: "IF2351448", course: "Praktikum Metode Numerik", sks: 1, tugas: 96, kuis: 92, uts: 94, uas: 95, akhir: 94.5, grade: "A", bobot: 4.0 },
    { code: "IF2351344", course: "Sosio Informatika Dan Profesionalisme", sks: 2, tugas: 94, kuis: 92, uts: 90, uas: 93, akhir: 92.4, grade: "A", bobot: 4.0 },
    { code: "IF2351353", course: "Teknik Penulisan Dan Presentasi", sks: 2, tugas: 92, kuis: 90, uts: 91, uas: 94, akhir: 92.0, grade: "A", bobot: 4.0 },
    { code: "IF2351950", course: "Pemrograman Perangkat Bergerak", sks: 2, tugas: 96, kuis: 94, uts: 92, uas: 95, akhir: 94.4, grade: "A", bobot: 4.0 },
    { code: "IF2351451", course: "Praktikum Pemrogr. Perangkat Bergerak", sks: 1, tugas: 98, kuis: 95, uts: 94, uas: 96, akhir: 96.0, grade: "A", bobot: 4.0 },
    { code: "IF2351452", course: "Sistem Komputer Interaktif", sks: 2, tugas: 93, kuis: 90, uts: 92, uas: 94, akhir: 92.5, grade: "A", bobot: 4.0 },
    { code: "IF2372478", course: "Keamanan Sistem", sks: 2, tugas: 90, kuis: 88, uts: 89, uas: 92, akhir: 89.8, grade: "A-", bobot: 3.75 },
    { code: "IF2372481", course: "E-Government", sks: 2, tugas: 92, kuis: 90, uts: 91, uas: 93, akhir: 91.6, grade: "A", bobot: 4.0 },
    { code: "IF2351449", course: "Teori Bahasa Dan Otomata", sks: 2, tugas: 88, kuis: 86, uts: 88, uas: 90, akhir: 88.2, grade: "A-", bobot: 3.75 }
  ],

  announcements: [
    {
      id: "ann-1",
      title: "Jadwal Pengunggahan Tugas Proyek Akhir Pengembangan Aplikasi Web (IF2351445)",
      date: "27 Sep 2026",
      category: "Akademik",
      isImportant: true,
      author: "Eri Haryanto, S.Kom., M.Kom.",
      content: "Diberitahukan kepada seluruh mahasiswa Informatika peserta mata kuliah Pengembangan Aplikasi Web bahwa batas pengunggahan berkas proyek SPA, repository GitHub, dan dokumentasi arsitektur sistem adalah tanggal 30 September 2026 melalui portal E-Learning UJB ini."
    },
    {
      id: "ann-2",
      title: "Kuliah Daring & Praktikum Pemrograman Perangkat Bergerak di Lab Komputer Timoho",
      date: "25 Sep 2026",
      category: "Praktikum",
      isImportant: false,
      author: "Ryan Ari Setyawan, S.Kom, M.Eng.",
      content: "Mahasiswa diwajibkan telah memperbarui instalasi Android Studio dan emulator sebelum sesi praktikum hari Rabu pukul 10:00 WIB."
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
      message: "Eri Haryanto, S.Kom., M.Kom. menerbitkan Tugas Proyek 04: Implementasi Single Page Application (SPA).",
      time: "1 jam yang lalu",
      read: false,
      type: "assignment"
    },
    {
      id: "notif-2",
      title: "Nilai Tugas Metode Numerik Telah Keluar",
      message: "Taja Abi Nugraha, nilai Tugas 02 Metode Numerik: 95/100 (Sangat Memuaskan).",
      time: "Kemarin",
      read: false,
      type: "grade"
    },
    {
      id: "notif-3",
      title: "Tanggapan Dosen di Forum Diskusi",
      message: "Eri Haryanto, S.Kom., M.Kom. membalas pertanyaan Anda di topik State Management JavaScript.",
      time: "Hari ini",
      read: false,
      type: "forum"
    }
  ]
};

// Export to window for vanilla JS application
window.INITIAL_DATA = INITIAL_DATA;
