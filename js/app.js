/**
 * E-Learning UNIVERSITAS JANABADRA - Main Application Logic
 * Program Studi Informatika - Fakultas Teknik
 * Mahasiswa: Taja Abi Nugraha (NIM: 24330029)
 * Mata Kuliah Utama: Pengembangan Aplikasi Web (Eri Haryanto, S.Kom., M.Kom.)
 */

document.addEventListener('DOMContentLoaded', () => {
  const store = window.appStore;

  // DOM Elements
  const appContainer = document.getElementById('view-container');
  const navLinks = document.querySelectorAll('.nav-link[data-view]');
  const themeToggleBtn = document.getElementById('btn-toggle-theme');
  const roleButtons = document.querySelectorAll('.role-pill-btn');
  const mobileMenuToggle = document.getElementById('btn-mobile-menu');
  const sidebar = document.querySelector('.app-sidebar');
  const mobileBackdrop = document.querySelector('.mobile-backdrop');
  const searchPaletteBtn = document.getElementById('btn-search-palette');
  const searchModal = document.getElementById('search-palette-modal');
  const searchInput = document.getElementById('palette-input');
  const searchResults = document.getElementById('palette-results');
  const toastContainer = document.getElementById('toast-container');
  const notifBtn = document.getElementById('btn-notifications');
  const notifModal = document.getElementById('notif-modal');

  // SVG Icons helper
  const ICONS = {
    dashboard: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    book: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    assignment: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="m9 14 2 2 4-4"></path></svg>`,
    quiz: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    attendance: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>`,
    forum: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    grade: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    calendar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    play: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    upload: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
    sparkles: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`
  };

  // Toast Function
  window.showToast = function(type, title, message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-icon">${type === 'success' ? '✓' : type === 'warning' ? '!' : 'ℹ'}</div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // Clock Update
  function updateLiveClock() {
    const clockEl = document.getElementById('live-time-display');
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB';
    }
  }
  setInterval(updateLiveClock, 1000);

  // Initialize Theme
  document.documentElement.setAttribute('data-theme', store.state.theme);

  // Toggle Theme Listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      store.toggleTheme();
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    if (!themeToggleBtn) return;
    const isDark = store.state.theme === 'dark';
    themeToggleBtn.innerHTML = isDark
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
  updateThemeIcon();

  // Role Buttons Click
  roleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const role = e.currentTarget.dataset.role;
      store.setRole(role);
      showToast('info', 'Mode Pengguna Berganti', `Sekarang melihat sistem sebagai: ${store.state.currentUser.name} (${store.state.currentUser.role.toUpperCase()})`);
    });
  });

  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      mobileBackdrop.classList.toggle('show');
    });
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      mobileBackdrop.classList.remove('show');
    });
  }

  // Nav link click handler
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      store.setView(view);
      if (window.innerWidth <= 868) {
        sidebar.classList.remove('mobile-open');
        mobileBackdrop.classList.remove('show');
      }
    });
  });

  // Search Palette Command (Ctrl + K)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      toggleSearchPalette();
    }
    if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
      toggleSearchPalette(false);
    }
  });

  if (searchPaletteBtn) {
    searchPaletteBtn.addEventListener('click', () => toggleSearchPalette(true));
  }

  function toggleSearchPalette(show = null) {
    if (!searchModal) return;
    const isActive = searchModal.classList.contains('active');
    const newState = show !== null ? show : !isActive;
    if (newState) {
      searchModal.classList.add('active');
      searchInput.value = '';
      renderPaletteResults('');
      setTimeout(() => searchInput.focus(), 50);
    } else {
      searchModal.classList.remove('active');
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderPaletteResults(e.target.value);
    });
  }

  function renderPaletteResults(query) {
    if (!searchResults) return;
    const q = query.toLowerCase().trim();
    const items = [];

    // Add views
    items.push({ type: 'Halaman', title: 'Dashboard Utama', desc: 'Jadwal Kuliah & Ringkasan Semester 5 Informatika UJB', action: () => store.setView('dashboard') });
    items.push({ type: 'Halaman', title: 'Pengembangan Aplikasi Web', desc: 'Mata kuliah utama (Selasa 10:00 - 12:10) • Eri Haryanto, M.Kom.', action: () => store.setView('course-detail', { courseId: 'c-paw' }) });
    items.push({ type: 'Halaman', title: 'Katalog Mata Kuliah (12 Matkul)', desc: 'Lihat seluruh jadwal semester ganjil 2026', action: () => store.setView('courses') });
    items.push({ type: 'Halaman', title: 'Tugas Proyek Web & Praktikum', desc: 'Deadline tugas SPA dan praktikum', action: () => store.setView('assignments') });
    items.push({ type: 'Halaman', title: 'Kuis Interaktif Web', desc: 'Uji kompetensi arsitektur web modern', action: () => store.setView('quiz') });
    items.push({ type: 'Halaman', title: 'Presensi Digital UJB', desc: 'Validasi kehadiran Kampus Timoho', action: () => store.setView('attendance') });
    items.push({ type: 'Halaman', title: 'Forum Diskusi Informatika', desc: 'Tanya jawab dosen & mahasiswa UJB', action: () => store.setView('forum') });
    items.push({ type: 'Halaman', title: 'Transkrip / KHS Digital (22 SKS)', desc: 'Kartu Hasil Studi resmi Taja Abi Nugraha (24330029)', action: () => store.setView('grades') });

    // Add all 12 courses to palette
    store.state.courses.forEach(c => {
      items.push({
        type: 'Mata Kuliah',
        title: `${c.code} - ${c.title}`,
        desc: `${c.day}, ${c.time} • ${c.lecturer} (${c.sks} SKS)`,
        action: () => store.setView('course-detail', { courseId: c.id })
      });
    });

    const filtered = q ? items.filter(it => it.title.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q) || it.type.toLowerCase().includes(q)) : items;

    if (filtered.length === 0) {
      searchResults.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Tidak ditemukan hasil untuk "${query}"</div>`;
      return;
    }

    searchResults.innerHTML = filtered.map(item => `
      <div class="palette-item" data-action>
        <div>
          <div style="font-weight: 700; font-size: 0.9rem;">${item.title}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${item.desc}</div>
        </div>
        <span class="badge badge-emerald">${item.type}</span>
      </div>
    `).join('');

    const itemEls = searchResults.querySelectorAll('.palette-item');
    itemEls.forEach((el, index) => {
      el.addEventListener('click', () => {
        toggleSearchPalette(false);
        filtered[index].action();
      });
    });
  }

  // Notification Modal toggle
  if (notifBtn && notifModal) {
    notifBtn.addEventListener('click', () => {
      renderNotificationList();
      notifModal.classList.toggle('active');
    });
  }

  function renderNotificationList() {
    const listEl = document.getElementById('notif-list-body');
    if (!listEl) return;
    const notifs = store.state.notifications;
    if (notifs.length === 0) {
      listEl.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Tidak ada notifikasi baru</div>`;
      return;
    }

    listEl.innerHTML = notifs.map(n => `
      <div style="padding: 1rem; border-bottom: 1px solid var(--border-color); display: flex; gap: 0.75rem; align-items: flex-start; ${!n.read ? 'background: var(--bg-subtle);' : ''}">
        <div style="width: 8px; height: 8px; border-radius: 50%; background: ${!n.read ? 'var(--primary-600)' : 'transparent'}; margin-top: 6px; flex-shrink: 0;"></div>
        <div style="flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 700; color: var(--text-main);">${n.title}</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">${n.message}</div>
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem;">${n.time}</div>
        </div>
      </div>
    `).join('');
  }

  // --- RENDER APP VIEWS ---

  function render() {
    const state = store.state;
    const user = state.currentUser;

    // Update Header & Sidebar UI info
    document.querySelectorAll('.current-user-name').forEach(el => el.textContent = user.name);
    document.querySelectorAll('.current-user-identifier').forEach(el => el.textContent = user.identifier);
    document.querySelectorAll('.current-user-program').forEach(el => el.textContent = user.program);
    document.querySelectorAll('.current-user-role-badge').forEach(el => el.textContent = user.role.toUpperCase());
    document.querySelectorAll('.current-user-avatar').forEach(el => el.src = user.avatar);

    // Update Role Switcher Buttons
    roleButtons.forEach(btn => {
      if (btn.dataset.role === state.currentRole) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Active Nav Link
    navLinks.forEach(link => {
      if (link.dataset.view === state.currentView) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update Course Count Badge
    const courseBadge = document.getElementById('sidebar-course-badge');
    if (courseBadge) {
      courseBadge.textContent = state.courses.length;
    }

    // Update Pending task badge
    const taskBadge = document.getElementById('sidebar-task-badge');
    if (taskBadge) {
      taskBadge.textContent = state.quickStats.pendingTasks;
      taskBadge.style.display = state.quickStats.pendingTasks > 0 ? 'inline-block' : 'none';
    }

    // Render active view
    switch (state.currentView) {
      case 'dashboard':
        renderDashboard(state);
        break;
      case 'courses':
        renderCourses(state);
        break;
      case 'course-detail':
        renderCourseDetail(state);
        break;
      case 'assignments':
        renderAssignments(state);
        break;
      case 'quiz':
        renderQuiz(state);
        break;
      case 'attendance':
        renderAttendance(state);
        break;
      case 'forum':
        renderForum(state);
        break;
      case 'grades':
        renderGrades(state);
        break;
      default:
        renderDashboard(state);
    }
  }

  // --- VIEW: DASHBOARD ---
  function renderDashboard(state) {
    const user = state.currentUser;
    const now = new Date();
    const dateFormatted = now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    appContainer.innerHTML = `
      <!-- Welcome Hero Banner -->
      <section class="hero-welcome-card">
        <div style="z-index: 2;">
          <div class="hero-badge-tag">
            ${ICONS.sparkles} ${state.university.shortName} • FAKULTAS TEKNIK • INFORMATIKA
          </div>
          <h1 class="hero-title">Selamat Datang, ${user.name.split(' ')[0]}!</h1>
          <p class="hero-subtitle">
            Portal E-Learning Resmi Universitas Janabadra Yogyakarta. Jadwal perkuliahan Semester Ganjil 2026 (Semester 5): <strong>12 Mata Kuliah (Total 22 SKS)</strong> dengan mata kuliah utama <strong>Pengembangan Aplikasi Web</strong> bersama Dosen Pengampu <strong>Eri Haryanto, S.Kom., M.Kom.</strong>
          </p>
          <div class="hero-meta-row">
            <div class="hero-meta-item">
              ${ICONS.calendar} ${dateFormatted}
            </div>
            <div class="hero-meta-item">
              ${ICONS.clock} <span class="hero-live-time" id="live-time-display">${now.toLocaleTimeString('id-ID')} WIB</span>
            </div>
            <div class="hero-meta-item">
              ${ICONS.book} ${state.university.semester} • 22 SKS
            </div>
          </div>
        </div>
        <div class="hero-stats-pill">
          <div class="hero-stats-val">${user.gpa}</div>
          <div class="hero-stats-label">Indeks Prestasi Kumulatif</div>
          <div style="font-size: 0.75rem; margin-top: 0.4rem; color: #a7f3d0; font-weight: 700;">★ Status: Pujian (Cumlaude)</div>
        </div>
      </section>

      <!-- KPI Stats Grid -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-emerald">
            ${ICONS.book}
          </div>
          <div class="stat-info">
            <span class="stat-value">${state.courses.length} Matkul</span>
            <span class="stat-label">Total Beban: 22 SKS</span>
            <span class="stat-trend">✓ Semester 5 Ganjil</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-amber">
            ${ICONS.assignment}
          </div>
          <div class="stat-info">
            <span class="stat-value">${state.quickStats.pendingTasks}</span>
            <span class="stat-label">Tugas Menunggu</span>
            <span class="stat-trend" style="color: var(--accent-600);">⏳ Batas 30 Sep</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-indigo">
            ${ICONS.attendance}
          </div>
          <div class="stat-info">
            <span class="stat-value">${state.quickStats.attendancePct}%</span>
            <span class="stat-label">Presensi Kampus Timoho</span>
            <span class="stat-trend">↑ Sangat Baik & Lengkap</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-teal">
            ${ICONS.clock}
          </div>
          <div class="stat-info">
            <span class="stat-value">${state.quickStats.studyHours} Jam</span>
            <span class="stat-label">Aktivitas Belajar</span>
            <span class="stat-trend">★ Terverifikasi BAPSI UJB</span>
          </div>
        </div>
      </div>

      <!-- Dashboard Grid: Schedule & Active Courses -->
      <div class="dashboard-grid">
        <!-- Left Column -->
        <div>
          <!-- Quick Action Bar -->
          <div class="card" style="margin-bottom: 1.75rem; padding: 1.25rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
              <div>
                <div style="font-size: 1rem; font-weight: 700;">Akses Perkuliahan Hari Ini</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Masuk langsung ke ruang materi kuliah Pengembangan Aplikasi Web (Eri Haryanto, M.Kom.)</div>
              </div>
              <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm" id="btn-quick-paw">
                  ${ICONS.play} Masuk Kelas Web (IF2351445)
                </button>
                <button class="btn btn-accent btn-sm" id="btn-quick-quiz">
                  ${ICONS.quiz} Ikuti Kuis Web
                </button>
                <button class="btn btn-secondary btn-sm" id="btn-quick-attendance">
                  ${ICONS.attendance} Presensi Timoho
                </button>
              </div>
            </div>
          </div>

          <!-- Courses Quick List (Highlighting First 6) -->
          <div class="card" style="margin-bottom: 1.75rem;">
            <div class="card-header">
              <div>
                <h2 class="card-title">${ICONS.book} Daftar Mata Kuliah Semester 5 (2026 Ganjil)</h2>
                <div class="card-subtitle">Sesuai Kartu Rencana Studi (KRS) Taja Abi Nugraha — 12 Mata Kuliah</div>
              </div>
              <button class="btn btn-subtle btn-sm" id="btn-see-all-courses">Lihat Semua (12) →</button>
            </div>

            <div class="courses-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
              ${state.courses.slice(0, 4).map(c => `
                <div class="course-card card-interactive" data-course-id="${c.id}">
                  <div class="course-card-banner" style="background: ${c.coverGradient};">
                    <div class="course-banner-top">
                      <span class="course-code-pill">${c.code}</span>
                      <span class="course-sks-badge">${c.sks} SKS • ${c.category}</span>
                    </div>
                    <div class="course-card-title">${c.title}</div>
                  </div>
                  <div class="course-card-body">
                    <div class="badge badge-amber" style="width: fit-content; font-size: 0.72rem; margin-bottom: 0.25rem;">
                      🗓 ${c.day}, ${c.time} WIB
                    </div>
                    <div class="course-lecturer-row">
                      <img src="${c.lecturerAvatar}" alt="${c.lecturer}" class="course-lecturer-avatar">
                      <span class="course-lecturer-name">${c.lecturer}</span>
                    </div>
                    <p class="course-desc-snippet">${c.description}</p>
                    <div class="course-progress-wrapper">
                      <div class="course-progress-info">
                        <span>Kemajuan Belajar</span>
                        <span>${c.progress}% (${c.completedMeetings}/${c.totalMeetings} Pertemuan)</span>
                      </div>
                      <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${c.progress}%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Urgent Assignments -->
          <div class="card">
            <div class="card-header">
              <div>
                <h2 class="card-title">${ICONS.assignment} Tugas Proyek & Praktikum</h2>
                <div class="card-subtitle">Mahasiswa: ${user.name} (${user.identifier})</div>
              </div>
              <button class="btn btn-subtle btn-sm" id="btn-see-all-tasks">Semua Tugas →</button>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              ${state.assignments.filter(a => a.status === 'Menunggu Penyerahan').map(a => `
                <div class="schedule-item" style="border-left: 4px solid var(--accent-500);">
                  <div>
                    <div class="badge badge-amber" style="margin-bottom: 0.35rem;">Deadline: ${a.deadline}</div>
                    <div class="schedule-course-title">${a.title}</div>
                    <div class="schedule-meta">
                      <span>Mata Kuliah: <strong>${a.courseTitle}</strong></span>
                      <span>Maks Nilai: ${a.maxGrade}</span>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-sm submit-task-btn" data-task-id="${a.id}">
                    ${ICONS.upload} Kumpulkan
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right Column: Today's Schedule & Announcements -->
        <div>
          <!-- Today's Schedule -->
          <div class="card" style="margin-bottom: 1.75rem;">
            <div class="card-header">
              <div>
                <h3 class="card-title">${ICONS.calendar} Jadwal Perkuliahan Hari Ini</h3>
                <div class="card-subtitle">${dateFormatted}</div>
              </div>
              <span class="badge badge-emerald">Aktif</span>
            </div>
            <div>
              ${state.todaySchedule.map(s => `
                <div class="schedule-item ${s.isActive ? 'active-now' : ''}">
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                      <span class="badge ${s.isActive ? 'badge-emerald' : 'badge-subtle'}">${s.time}</span>
                      ${s.isActive ? '<span class="badge badge-danger">Live Sekarang</span>' : ''}
                    </div>
                    <div class="schedule-course-title">${s.courseName} (${s.code})</div>
                    <div class="schedule-meta" style="flex-direction: column; align-items: flex-start; gap: 0.2rem; margin-top: 0.35rem;">
                      <div>📍 ${s.room}</div>
                      <div>👤 ${s.lecturer}</div>
                      <div style="color: var(--primary-700); font-weight: 600;">📖 ${s.meeting}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Academic Announcements -->
          <div class="card">
            <div class="card-header">
              <div>
                <h3 class="card-title">${ICONS.sparkles} Pengumuman Universitas</h3>
                <div class="card-subtitle">Fakultas Teknik Universitas Janabadra</div>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${state.announcements.map(ann => `
                <div style="padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span class="badge ${ann.isImportant ? 'badge-danger' : 'badge-emerald'}">${ann.category}</span>
                    <span style="font-size: 0.72rem; color: var(--text-muted);">${ann.date}</span>
                  </div>
                  <div style="font-weight: 700; font-size: 0.875rem; margin-bottom: 0.35rem; color: var(--text-main);">${ann.title}</div>
                  <div style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45;">${ann.content}</div>
                  <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 0.4rem; font-style: italic;">Oleh: ${ann.author}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind dashboard buttons
    document.getElementById('btn-quick-paw')?.addEventListener('click', () => {
      store.setView('course-detail', { courseId: 'c-paw' });
    });
    document.getElementById('btn-quick-quiz')?.addEventListener('click', () => {
      store.setView('quiz');
    });
    document.getElementById('btn-quick-attendance')?.addEventListener('click', () => {
      store.setView('attendance');
    });
    document.getElementById('btn-see-all-courses')?.addEventListener('click', () => {
      store.setView('courses');
    });
    document.getElementById('btn-see-all-tasks')?.addEventListener('click', () => {
      store.setView('assignments');
    });

    // Course card click bindings
    document.querySelectorAll('.course-card[data-course-id]').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.courseId;
        store.setView('course-detail', { courseId: id });
      });
    });

    // Submit task button bindings
    document.querySelectorAll('.submit-task-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.taskId;
        openSubmitModal(id);
      });
    });
  }

  // --- VIEW: COURSES CATALOG (ALL 12 COURSES) ---
  function renderCourses(state) {
    appContainer.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h1 style="font-size: 1.75rem; font-weight: 800;">Jadwal & Katalog Mata Kuliah Tahun 2026 Semester Ganjil</h1>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Program Studi Informatika - Fakultas Teknik Universitas Janabadra (Total: 12 Mata Kuliah / 22 SKS)</p>
        </div>
      </div>

      <div class="courses-grid" id="courses-catalog-grid">
        ${state.courses.map(c => `
          <div class="course-card card-interactive" data-course-id="${c.id}">
            <div class="course-card-banner" style="background: ${c.coverGradient};">
              <div class="course-banner-top">
                <span class="course-code-pill">${c.code}</span>
                <span class="course-sks-badge">${c.sks} SKS • SMT ${c.semester}</span>
              </div>
              <div class="course-card-title">${c.title}</div>
            </div>
            <div class="course-card-body">
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge badge-amber" style="font-size: 0.72rem;">🗓 ${c.day}, ${c.time} WIB</span>
                <span class="badge badge-emerald" style="font-size: 0.72rem;">${c.category}</span>
              </div>
              <div class="course-lecturer-row">
                <img src="${c.lecturerAvatar}" alt="${c.lecturer}" class="course-lecturer-avatar">
                <span class="course-lecturer-name">${c.lecturer}</span>
              </div>
              <p class="course-desc-snippet">${c.description}</p>
              <div class="course-progress-wrapper">
                <div class="course-progress-info">
                  <span>Progres Kuliah</span>
                  <span>${c.progress}% (${c.completedMeetings}/${c.totalMeetings} Pertemuan)</span>
                </div>
                <div class="progress-bar-container">
                  <div class="progress-bar-fill" style="width: ${c.progress}%;"></div>
                </div>
              </div>
              <button class="btn btn-primary btn-sm btn-full" style="margin-top: 0.5rem;">
                ${ICONS.play} Masuk Ruang Kuliah
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.querySelectorAll('.course-card[data-course-id]').forEach(card => {
      card.addEventListener('click', () => {
        store.setView('course-detail', { courseId: card.dataset.courseId });
      });
    });
  }

  // --- VIEW: COURSE DETAIL & LEARNING ROOM ---
  function renderCourseDetail(state) {
    const course = state.courses.find(c => c.id === state.selectedCourseId) || state.courses[0];
    const syllabus = course.syllabus || state.courses[0].syllabus;

    appContainer.innerHTML = `
      <!-- Header -->
      <div class="course-detail-header">
        <div>
          <button class="btn btn-subtle btn-sm" id="btn-back-to-courses" style="margin-bottom: 0.75rem;">
            ← Kembali ke Katalog Kursus (${state.courses.length} Matkul)
          </button>
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.35rem; flex-wrap: wrap;">
            <span class="course-code-pill" style="background: var(--primary-600); color: #fff;">${course.code}</span>
            <span class="badge badge-emerald">${course.sks} SKS • SMT ${course.semester}</span>
            <span class="badge badge-amber">🗓 ${course.day}, ${course.time} WIB</span>
          </div>
          <h1 style="font-size: 1.85rem; font-weight: 800; color: var(--text-main);">${course.title}</h1>
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            <img src="${course.lecturerAvatar}" alt="${course.lecturer}" class="course-lecturer-avatar">
            <span>Dosen Pengampu: <strong>${course.lecturer}</strong></span>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.25rem;">Pencapaian Belajar</div>
          <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; color: var(--primary-600);">${course.progress}%</div>
          <button class="btn btn-accent btn-sm" id="btn-syllabus-attendance" style="margin-top: 0.5rem;">
            ${ICONS.attendance} Presensi Pertemuan Ini
          </button>
        </div>
      </div>

      <!-- Main Course Detail Grid -->
      <div class="course-detail-grid">
        <!-- Left: Interactive Video Player & Lesson Notes -->
        <div>
          <!-- Video Player Simulation -->
          <div class="mock-video-player" style="margin-bottom: 1.5rem;">
            <div class="mock-video-screen" id="mock-video-canvas">
              <div class="mock-play-btn" id="btn-video-play-toggle">
                ${ICONS.play}
              </div>
              <div style="font-weight: 700; font-size: 1.15rem; color: #fff;" id="video-now-playing-title">
                ${course.title} (${course.code}) - Pertemuan 8
              </div>
              <div style="font-size: 0.8rem; color: rgba(255, 255, 255, 0.75); margin-top: 0.35rem;">
                Dosen: ${course.lecturer} • Lab Komputer Kampus Timoho UJB
              </div>
            </div>
            <!-- Video Controls -->
            <div class="mock-video-controls">
              <button style="color: #fff; font-size: 1rem;" id="video-ctrl-btn">▶</button>
              <span style="font-size: 0.75rem; font-family: var(--font-mono); color: #cbd5e1;" id="video-time-indicator">22:45 / 70:00</span>
              <div class="mock-scrubber" id="video-scrubber">
                <div class="mock-scrubber-progress" id="video-scrubber-bar" style="width: 35%;"></div>
              </div>
              <button class="badge badge-emerald" style="border: none; cursor: pointer;" id="video-speed-btn">1.0x</button>
              <button style="color: #fff; font-size: 0.85rem;" id="video-fs-btn">⛶ Layar Penuh</button>
            </div>
          </div>

          <!-- Lesson Material Card -->
          <div class="card" style="margin-bottom: 1.5rem;">
            <div class="card-header">
              <div>
                <h3 class="card-title">${ICONS.book} Ringkasan Materi & Capaian Pembelajaran (CPMK)</h3>
                <div class="card-subtitle">${course.title} • Pertemuan 8</div>
              </div>
              <button class="btn btn-primary btn-sm" id="btn-download-slide">
                ${ICONS.download} Unduh Slide PDF Materi
              </button>
            </div>
            <div style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">
              <p style="margin-bottom: 0.75rem;">
                Membahas capaian kompetensi dasar dan tingkat lanjut pada mata kuliah <strong>${course.title}</strong>, implementasi studi kasus nyata, integrasi praktikum laboratorium komputer, dan penugasan proyek.
              </p>
              <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary-600); margin-bottom: 1rem;">
                <strong>Jadwal Perkuliahan:</strong> Hari ${course.day}, Pukul ${course.time} WIB • Dosen Pengampu: ${course.lecturer}.
              </div>
              <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <span class="badge badge-emerald">#${course.code}</span>
                <span class="badge badge-indigo">#InformatikaUJB</span>
                <span class="badge badge-amber">#Semester5</span>
                <span class="badge badge-subtle">#UniversitasJanabadra</span>
              </div>
            </div>
          </div>

          <!-- Personal Student Notes Box -->
          <div class="card">
            <h3 class="card-title" style="margin-bottom: 0.75rem;">📝 Catatan Mahasiswa: ${state.currentUser.name} (${state.currentUser.identifier})</h3>
            <textarea class="form-control" id="personal-notes-input" placeholder="Tuliskan catatan penting materi kuliah di sini (otomatis tersimpan ke browser Anda)..." style="min-height: 120px;"></textarea>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem;">
              <span style="font-size: 0.75rem; color: var(--text-muted);" id="notes-status-text">Status: Tersimpan Lokal</span>
              <button class="btn btn-primary btn-sm" id="btn-save-notes">Simpan Catatan</button>
            </div>
          </div>
        </div>

        <!-- Right: Syllabus Timeline (Weeks 1 to 16) -->
        <div>
          <div class="card">
            <div class="card-header">
              <div>
                <h3 class="card-title">${ICONS.calendar} Silabus & Pertemuan</h3>
                <div class="card-subtitle">${course.title}</div>
              </div>
            </div>
            <div class="syllabus-list">
              ${syllabus.map((s, idx) => `
                <div class="syllabus-item ${s.week === 8 ? 'active' : ''}" data-week="${s.week}">
                  <div class="syllabus-item-header">
                    <div>
                      <div class="syllabus-week-badge">Minggu ${s.week} ${s.completed ? '• ✓ Selesai' : s.week === 8 ? '• ★ Berlangsung' : ''}</div>
                      <div style="font-size: 0.875rem; font-weight: 700; color: var(--text-main); margin-top: 0.15rem;">${s.title}</div>
                    </div>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">${s.completed ? '✅' : s.week === 8 ? '▶' : '🔒'}</span>
                  </div>
                  <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.4;">
                    ${s.desc}
                  </div>
                  <div style="display: flex; gap: 0.5rem; margin-top: 0.65rem; flex-wrap: wrap;">
                    ${s.videoDuration ? `<span class="badge badge-emerald" style="font-size: 0.68rem;">🎬 ${s.videoDuration}</span>` : ''}
                    ${s.hasQuiz ? `<span class="badge badge-amber" style="font-size: 0.68rem;">📝 Ada Kuis</span>` : ''}
                    ${s.hasAssignment ? `<span class="badge badge-indigo" style="font-size: 0.68rem;">📁 Tugas</span>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Event Handlers
    document.getElementById('btn-back-to-courses')?.addEventListener('click', () => {
      store.setView('courses');
    });

    document.getElementById('btn-syllabus-attendance')?.addEventListener('click', () => {
      store.checkInAttendance(course.id);
      showToast('success', 'Presensi Berhasil', `Kehadiran pada matakuliah ${course.title} tercatat!`);
      render();
    });

    // Mock video controls
    const playBtn = document.getElementById('btn-video-play-toggle');
    const ctrlBtn = document.getElementById('video-ctrl-btn');
    let isPlaying = false;
    function togglePlay() {
      isPlaying = !isPlaying;
      if (ctrlBtn) ctrlBtn.textContent = isPlaying ? '⏸' : '▶';
      if (playBtn) playBtn.innerHTML = isPlaying ? '⏸' : ICONS.play;
      showToast('info', isPlaying ? 'Video Diputar' : 'Video Dijeda', 'Pemutar video perkuliahan daring Universitas Janabadra.');
    }
    playBtn?.addEventListener('click', togglePlay);
    ctrlBtn?.addEventListener('click', togglePlay);

    // Speed button
    const speedBtn = document.getElementById('video-speed-btn');
    const speeds = ['1.0x', '1.25x', '1.5x', '2.0x'];
    let currentSpeedIdx = 0;
    speedBtn?.addEventListener('click', () => {
      currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
      speedBtn.textContent = speeds[currentSpeedIdx];
      showToast('info', 'Kecepatan Video', `Kecepatan diubah menjadi ${speeds[currentSpeedIdx]}`);
    });

    // Download slide
    document.getElementById('btn-download-slide')?.addEventListener('click', () => {
      showToast('success', 'Mulai Mengunduh', 'Berkas materi kuliah sedang diunduh ke komputer Anda.');
    });

    // Personal Notes
    const notesInput = document.getElementById('personal-notes-input');
    const savedNotes = localStorage.getItem('ujb_notes_' + course.id);
    if (notesInput && savedNotes) {
      notesInput.value = savedNotes;
    }
    document.getElementById('btn-save-notes')?.addEventListener('click', () => {
      if (notesInput) {
        localStorage.setItem('ujb_notes_' + course.id, notesInput.value);
        showToast('success', 'Catatan Disimpan', 'Catatan kuliah Anda berhasil disimpan.');
      }
    });
  }

  // --- VIEW: ASSIGNMENTS ---
  function renderAssignments(state) {
    appContainer.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h1 style="font-size: 1.75rem; font-weight: 800;">Manajemen Tugas & Proyek Digital</h1>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Unggah proyek, laporan praktikum, repository kode GitHub, dan periksa umpan balik dosen</p>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        ${state.assignments.map(a => `
          <div class="card" style="border-left: 5px solid ${a.status === 'Dinilai' ? 'var(--primary-600)' : a.status === 'Telah Diserahkan' ? 'var(--tech-indigo)' : 'var(--accent-500)'};">
            <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
              <div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
                  <span class="badge ${a.status === 'Dinilai' ? 'badge-emerald' : a.status === 'Telah Diserahkan' ? 'badge-indigo' : 'badge-amber'}">
                    ${a.status}
                  </span>
                  <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted);">${a.courseTitle}</span>
                </div>
                <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">${a.title}</h3>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.85rem; max-width: 800px;">
                  ${a.instructions}
                </p>
                <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); flex-wrap: wrap;">
                  <span>⏰ Batas Pengumpulan: <strong>${a.deadline}</strong></span>
                  <span>🏆 Bobot Nilai Maksimal: <strong>${a.maxGrade} Poin</strong></span>
                  ${a.submittedFile ? `<span>📎 Berkas: <strong>${a.submittedFile}</strong> (${a.submittedAt})</span>` : ''}
                </div>
              </div>

              <div style="text-align: right; min-width: 160px;">
                ${a.grade !== null ? `
                  <div style="background: var(--primary-50); border: 1px solid var(--primary-300); border-radius: var(--radius-md); padding: 0.65rem 1rem; margin-bottom: 0.5rem;">
                    <div style="font-size: 0.72rem; color: var(--primary-800); font-weight: 700;">NILAI ANDA</div>
                    <div style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--primary-700);">${a.grade} <span style="font-size: 1rem;">/ ${a.maxGrade}</span></div>
                  </div>
                ` : ''}

                ${a.status === 'Menunggu Penyerahan' ? `
                  <button class="btn btn-primary submit-asg-btn" data-id="${a.id}">
                    ${ICONS.upload} Kumpulkan Tugas
                  </button>
                ` : `
                  <button class="btn btn-subtle btn-sm submit-asg-btn" data-id="${a.id}">
                    ✏ Edit Penyerahan
                  </button>
                `}
              </div>
            </div>

            ${a.feedback ? `
              <div style="margin-top: 1rem; padding: 0.85rem 1rem; background: var(--bg-subtle); border-radius: var(--radius-md); border-left: 3px solid var(--primary-500); font-size: 0.825rem;">
                <div style="font-weight: 700; color: var(--primary-700); margin-bottom: 0.2rem;">💬 Catatan Umpan Balik Dosen:</div>
                <div style="color: var(--text-secondary); font-style: italic;">"${a.feedback}"</div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;

    document.querySelectorAll('.submit-asg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openSubmitModal(btn.dataset.id);
      });
    });
  }

  // --- MODAL: ASSIGNMENT SUBMISSION ---
  function openSubmitModal(assignmentId) {
    const asg = store.state.assignments.find(a => a.id === assignmentId);
    if (!asg) return;

    let selectedFileName = asg.submittedFile || 'Proyek_PAW_TajaAbiNugraha_24330029.zip';

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            ${ICONS.upload} Unggah Tugas: Taja Abi Nugraha (24330029)
          </div>
          <button class="modal-close-btn" id="btn-close-modal">✕</button>
        </div>
        <div class="modal-body">
          <div style="margin-bottom: 1rem;">
            <div style="font-size: 0.8rem; color: var(--text-muted);">${asg.courseTitle} • Universitas Janabadra</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">${asg.title}</div>
            <div style="font-size: 0.8rem; color: var(--danger-600); margin-top: 0.25rem;">Batas waktu: ${asg.deadline}</div>
          </div>

          <!-- Drag and drop box -->
          <div id="dropzone-box" style="border: 2px dashed var(--primary-400); background: var(--primary-50); border-radius: var(--radius-lg); padding: 2rem; text-align: center; cursor: pointer; transition: all 0.2s; margin-bottom: 1.25rem;">
            <div style="color: var(--primary-600); margin-bottom: 0.5rem;">${ICONS.upload}</div>
            <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);" id="dropzone-text">
              Klik atau Seret Berkas Proyek ke Sini
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">
              Format berkas: ZIP, PDF, RAR (Maksimal 15 MB)
            </div>
            <div style="margin-top: 0.85rem; font-size: 0.85rem; font-weight: 700; color: var(--primary-700);" id="selected-file-label">
              Berkas terpilih: ${selectedFileName}
            </div>
          </div>

          <!-- Student note -->
          <div class="form-group">
            <label class="form-label">Tautan Repository GitHub / Catatan Mahasiswa:</label>
            <textarea class="form-control" id="asg-note-input" placeholder="Tuliskan link repositori GitHub atau catatan implementasi proyek web Anda...">${asg.studentNote || 'https://github.com/Abey431/PENGEMBANGAN_WEB'}</textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="btn-cancel-modal">Batal</button>
          <button class="btn btn-primary" id="btn-confirm-submit">
            ${ICONS.check} Simpan & Serahkan Berkas
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector('#btn-close-modal').onclick = close;
    modal.querySelector('#btn-cancel-modal').onclick = close;

    // Dropzone simulator
    const dropzone = modal.querySelector('#dropzone-box');
    dropzone.onclick = () => {
      selectedFileName = `Proyek_PAW_TajaAbiNugraha_${Date.now().toString().slice(-4)}.zip`;
      modal.querySelector('#selected-file-label').textContent = `Berkas terpilih: ${selectedFileName}`;
      showToast('info', 'Berkas Dipilih', selectedFileName);
    };

    // Confirm submit
    modal.querySelector('#btn-confirm-submit').onclick = () => {
      const note = modal.querySelector('#asg-note-input').value;
      store.submitAssignment(assignmentId, selectedFileName, note);
      close();
      showToast('success', 'Tugas Berhasil Diserahkan!', `Tugas ${asg.title} berhasil diunggah.`);
      render();
    };
  }

  // --- VIEW: INTERACTIVE QUIZ ENGINE ---
  let currentQuizState = {
    currentIndex: 0,
    answers: {},
    timeRemaining: 600, // 10 minutes in seconds
    timerInterval: null
  };

  function renderQuiz(state) {
    const quiz = state.quizList[0];
    const totalQ = quiz.questions.length;

    if (quiz.completed && !currentQuizState.isRetaking) {
      renderQuizResult(quiz);
      return;
    }

    const currentQ = quiz.questions[currentQuizState.currentIndex];
    const selectedOpt = currentQuizState.answers[currentQ.id];

    const mins = Math.floor(currentQuizState.timeRemaining / 60).toString().padStart(2, '0');
    const secs = (currentQuizState.timeRemaining % 60).toString().padStart(2, '0');

    appContainer.innerHTML = `
      <div class="quiz-container">
        <!-- Top bar -->
        <div class="quiz-header-bar">
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${quiz.courseTitle} • Universitas Janabadra</div>
            <h2 style="font-size: 1.15rem; font-weight: 800;">${quiz.title}</h2>
          </div>
          <div class="quiz-timer-pill">
            ${ICONS.clock} <span id="quiz-timer-text">${mins}:${secs}</span>
          </div>
        </div>

        <!-- Progress Indicator -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.825rem; font-weight: 700;">
          <span>Soal ${currentQuizState.currentIndex + 1} dari ${totalQ}</span>
          <span>${Math.round(((currentQuizState.currentIndex + 1) / totalQ) * 100)}% Selesai</span>
        </div>
        <div class="progress-bar-container" style="margin-bottom: 1.5rem; height: 6px;">
          <div class="progress-bar-fill" style="width: ${((currentQuizState.currentIndex + 1) / totalQ) * 100}%;"></div>
        </div>

        <!-- Question Card -->
        <div class="quiz-card">
          <div class="quiz-question-text">
            ${currentQ.id}. ${currentQ.question}
          </div>

          <div class="quiz-options-list">
            ${currentQ.options.map((opt, idx) => `
              <div class="quiz-option-item ${selectedOpt === idx ? 'selected' : ''}" data-opt-idx="${idx}">
                <div class="quiz-option-indicator">
                  ${String.fromCharCode(65 + idx)}
                </div>
                <div style="font-size: 0.95rem; font-weight: 500; flex: 1;">
                  ${opt}
                </div>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
            <button class="btn btn-secondary btn-sm" id="btn-quiz-prev" ${currentQuizState.currentIndex === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
              ← Soal Sebelumnya
            </button>

            ${currentQuizState.currentIndex < totalQ - 1 ? `
              <button class="btn btn-primary" id="btn-quiz-next">
                Soal Selanjutnya →
              </button>
            ` : `
              <button class="btn btn-accent btn-lg" id="btn-quiz-finish">
                ${ICONS.check} Selesaikan & Kumpulkan Kuis
              </button>
            `}
          </div>
        </div>
      </div>
    `;

    if (!currentQuizState.timerInterval) {
      currentQuizState.timerInterval = setInterval(() => {
        if (currentQuizState.timeRemaining > 0) {
          currentQuizState.timeRemaining--;
          const m = Math.floor(currentQuizState.timeRemaining / 60).toString().padStart(2, '0');
          const s = (currentQuizState.timeRemaining % 60).toString().padStart(2, '0');
          const timerEl = document.getElementById('quiz-timer-text');
          if (timerEl) timerEl.textContent = `${m}:${s}`;
        } else {
          clearInterval(currentQuizState.timerInterval);
          finishQuiz();
        }
      }, 1000);
    }

    document.querySelectorAll('.quiz-option-item').forEach(el => {
      el.addEventListener('click', () => {
        const optIdx = parseInt(el.dataset.optIdx, 10);
        currentQuizState.answers[currentQ.id] = optIdx;
        renderQuiz(store.state);
      });
    });

    document.getElementById('btn-quiz-prev')?.addEventListener('click', () => {
      if (currentQuizState.currentIndex > 0) {
        currentQuizState.currentIndex--;
        renderQuiz(store.state);
      }
    });

    document.getElementById('btn-quiz-next')?.addEventListener('click', () => {
      if (currentQuizState.currentIndex < totalQ - 1) {
        currentQuizState.currentIndex++;
        renderQuiz(store.state);
      }
    });

    document.getElementById('btn-quiz-finish')?.addEventListener('click', () => {
      finishQuiz();
    });
  }

  function finishQuiz() {
    clearInterval(currentQuizState.timerInterval);
    currentQuizState.timerInterval = null;

    const quiz = store.state.quizList[0];
    let correctCount = 0;
    quiz.questions.forEach(q => {
      if (currentQuizState.answers[q.id] === q.correct) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / quiz.questions.length) * 100);
    store.recordQuizScore(quiz.id, score, currentQuizState.answers);
    currentQuizState.isRetaking = false;
    renderQuizResult(quiz);
  }

  function renderQuizResult(quiz) {
    const score = quiz.lastScore !== undefined ? quiz.lastScore : 100;
    const isPassed = score >= quiz.passingScore;

    appContainer.innerHTML = `
      <div class="quiz-container">
        <div class="card quiz-score-card">
          <div class="quiz-score-circle">
            <span style="font-size: 2.75rem; font-weight: 800; line-height: 1;">${score}</span>
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.9;">Nilai Akhir</span>
          </div>

          <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-main);">
            ${isPassed ? 'Selamat, Taja Abi Nugraha! Anda Lulus Kuis' : 'Perlu Evaluasi Kembali'}
          </h2>
          <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 500px; margin: 0 auto 1.5rem;">
            ${isPassed ? 'Pemahaman Anda mengenai dasar arsitektur web modern, CSS custom properties, asynchronous JavaScript, dan Single Page Application sangat memuaskan!' : 'Silakan pelajari kembali modul materi pertemuan 1 - 8 dan ulangi kuis untuk perbaikan nilai.'}
          </p>

          <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
            <button class="btn btn-primary" id="btn-retake-quiz">
              🔄 Kerjakan Ulang Kuis
            </button>
            <button class="btn btn-secondary" id="btn-back-dashboard-quiz">
              ${ICONS.dashboard} Kembali ke Dashboard
            </button>
          </div>

          <!-- Explanation Review -->
          <div style="text-align: left; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;">Pembahasan Soal & Kunci Jawaban</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${quiz.questions.map((q, qIdx) => `
                <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary-500);">
                  <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem;">
                    ${q.id}. ${q.question}
                  </div>
                  <div style="font-size: 0.85rem; color: var(--primary-700); font-weight: 700; margin-bottom: 0.35rem;">
                    ✓ Jawaban Benar: ${q.options[q.correct]}
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.45;">
                    💡 <em>Penjelasan:</em> ${q.explanation}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-retake-quiz')?.addEventListener('click', () => {
      currentQuizState = {
        currentIndex: 0,
        answers: {},
        timeRemaining: 600,
        timerInterval: null,
        isRetaking: true
      };
      renderQuiz(store.state);
    });

    document.getElementById('btn-back-dashboard-quiz')?.addEventListener('click', () => {
      store.setView('dashboard');
    });
  }

  // --- VIEW: DIGITAL ATTENDANCE (12 COURSES) ---
  function renderAttendance(state) {
    const records = state.attendanceRecords;
    const pawRecord = records.find(r => r.courseId === 'c-paw') || records[0];

    appContainer.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <h1 style="font-size: 1.75rem; font-weight: 800;">Presensi Perkuliahan Digital</h1>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Sistem validasi kehadiran otomatis berbasis radius Kampus Timoho Universitas Janabadra Yogyakarta</p>
      </div>

      <!-- Hero Check-In Card -->
      <div class="attendance-hero">
        <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
          <div class="attendance-radar-wrapper">
            <div class="attendance-radar-circle"></div>
            <div class="attendance-radar-circle" style="animation-delay: 0.8s;"></div>
            <div class="attendance-radar-inner">
              ${ICONS.attendance}
            </div>
          </div>
          <div>
            <span class="badge badge-emerald" style="margin-bottom: 0.5rem;">GPS Status: Radius Kampus Timoho UJB Terverifikasi</span>
            <h2 style="font-size: 1.35rem; font-weight: 800;">Presensi Kuliah: ${pawRecord.courseName} (${pawRecord.courseCode})</h2>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
              Selasa, 10:00 - 12:10 WIB • Dosen: Eri Haryanto, S.Kom., M.Kom.
            </p>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.35rem;">
              Status Anda: <strong>${pawRecord.todayCheckedIn ? '✅ Sudah Presensi (' + pawRecord.lastCheckIn + ')' : '⏳ Belum Mengisi Kehadiran'}</strong>
            </div>
          </div>
        </div>

        <div>
          ${pawRecord.todayCheckedIn ? `
            <button class="btn btn-primary" disabled style="opacity: 0.85; cursor: default;">
              ✓ Kehadiran Terverifikasi
            </button>
          ` : `
            <button class="btn btn-accent btn-lg" id="btn-do-checkin">
              ${ICONS.check} Isi Presensi Sekarang
            </button>
          `}
        </div>
      </div>

      <!-- Attendance Table -->
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${ICONS.attendance} Rekapitulasi Presensi Semester Ganjil 2026 (12 Mata Kuliah)</h3>
            <div class="card-subtitle">Mahasiswa: ${state.currentUser.name} (${state.currentUser.identifier}) • Syarat Mengikuti UAS: Kehadiran Min. 75%</div>
          </div>
        </div>

        <div class="khs-table-container">
          <table class="khs-table">
            <thead>
              <tr>
                <th>Kode</th>
                <th>Mata Kuliah</th>
                <th>Total Pertemuan</th>
                <th>Hadir</th>
                <th>Izin / Sakit</th>
                <th>Alpa</th>
                <th>Persentase</th>
                <th>Status Kelayakan</th>
              </tr>
            </thead>
            <tbody>
              ${records.map(r => `
                <tr>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${r.courseCode}</td>
                  <td style="font-weight: 700; color: var(--text-main);">${r.courseName}</td>
                  <td>${r.totalMeetings} Sesi</td>
                  <td style="color: var(--primary-600); font-weight: 700;">${r.attended}</td>
                  <td>${r.permit}</td>
                  <td>${r.absent}</td>
                  <td style="font-weight: 700;">${r.percentage}%</td>
                  <td>
                    <span class="badge ${r.percentage >= 75 ? 'badge-emerald' : 'badge-danger'}">
                      ${r.percentage >= 75 ? '✓ Memenuhi Syarat' : '⚠️ Tidak Memenuhi'}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    document.getElementById('btn-do-checkin')?.addEventListener('click', () => {
      store.checkInAttendance('c-paw');
      showToast('success', 'Presensi Berhasil!', 'Kehadiran Anda pada Pengembangan Aplikasi Web berhasil dicatat di server Universitas Janabadra.');
      render();
    });
  }

  // --- VIEW: DISCUSSION FORUM ---
  function renderForum(state) {
    appContainer.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h1 style="font-size: 1.75rem; font-weight: 800;">Forum Diskusi & Kolaborasi Informatika UJB</h1>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Ruang interaksi akademik dosen dan mahasiswa Fakultas Teknik Universitas Janabadra</p>
        </div>
        <button class="btn btn-primary" id="btn-open-new-thread">
          ✍ Buat Topik Diskusi Baru
        </button>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${state.forumThreads.map(t => `
          <div class="forum-thread-card" data-thread-id="${t.id}">
            <div class="forum-thread-header">
              <div class="forum-author-info">
                <img src="${t.authorAvatar}" alt="${t.author}" class="forum-author-avatar">
                <div>
                  <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-main);">${t.author}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${t.timestamp} • Mata Kuliah: ${t.courseTitle}</div>
                </div>
              </div>
              <button class="btn btn-subtle btn-sm btn-upvote" data-id="${t.id}">
                ▲ Dukung (${t.upvotes})
              </button>
            </div>

            <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-main);">${t.title}</h3>
            <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${t.content}</p>

            <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
              ${t.tags.map(tag => `<span class="badge badge-emerald">#${tag}</span>`).join('')}
            </div>

            <!-- Replies List -->
            <div style="border-top: 1px solid var(--border-color); padding-top: 1rem;">
              <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.75rem;">
                Tanggapan (${t.replies.length}):
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${t.replies.map(rep => `
                  <div class="forum-reply-box ${rep.isLecturer ? 'lecturer-reply' : ''}">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <img src="${rep.authorAvatar}" class="course-lecturer-avatar" style="width: 24px; height: 24px;">
                        <strong style="font-size: 0.8rem;">${rep.author}</strong>
                        ${rep.isLecturer ? '<span class="badge badge-emerald" style="font-size: 0.65rem;">Dosen Pengampu</span>' : ''}
                      </div>
                      <span style="font-size: 0.72rem; color: var(--text-muted);">${rep.timestamp}</span>
                    </div>
                    <div style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5;">${rep.content}</div>
                  </div>
                `).join('')}
              </div>

              <!-- Quick reply form -->
              <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                <input type="text" class="form-control" placeholder="Tuliskan tanggapan Anda..." id="reply-input-${t.id}">
                <button class="btn btn-primary btn-sm send-reply-btn" data-thread-id="${t.id}">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Upvote
    document.querySelectorAll('.btn-upvote').forEach(btn => {
      btn.addEventListener('click', () => {
        store.upvoteForumPost(btn.dataset.id);
        render();
      });
    });

    // Send Reply
    document.querySelectorAll('.send-reply-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.threadId;
        const input = document.getElementById(`reply-input-${id}`);
        if (input && input.value.trim()) {
          store.addForumReply(id, input.value);
          showToast('success', 'Tanggapan Terkirim', 'Komentar Anda berhasil dipublikasikan.');
          render();
        }
      });
    });

    // Open new thread modal
    document.getElementById('btn-open-new-thread')?.addEventListener('click', () => {
      openNewThreadModal();
    });
  }

  function openNewThreadModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">✍ Buat Topik Diskusi Baru</div>
          <button class="modal-close-btn" id="btn-close-new-thread">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Mata Kuliah Terkait:</label>
            <select class="form-control" id="thread-course-select">
              ${store.state.courses.map(c => `<option value="${c.id}">${c.code} - ${c.title}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Judul Pertanyaan / Topik:</label>
            <input type="text" class="form-control" id="thread-title-input" placeholder="Contoh: Implementasi Async/Await dan Error Handling di Fetch API">
          </div>
          <div class="form-group">
            <label class="form-label">Isi Pembahasan:</label>
            <textarea class="form-control" id="thread-content-input" placeholder="Jelaskan pertanyaan atau topik diskusi Anda secara terperinci..."></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="btn-cancel-new-thread">Batal</button>
          <button class="btn btn-primary" id="btn-submit-new-thread">Publikasikan Topik</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector('#btn-close-new-thread').onclick = close;
    modal.querySelector('#btn-cancel-new-thread').onclick = close;
    modal.querySelector('#btn-submit-new-thread').onclick = () => {
      const courseId = modal.querySelector('#thread-course-select').value;
      const title = modal.querySelector('#thread-title-input').value;
      const content = modal.querySelector('#thread-content-input').value;
      if (title && content) {
        store.addForumPost(courseId, title, content, ['PengembanganWeb', 'InformatikaUJB']);
        close();
        showToast('success', 'Topik Terbit!', 'Pertanyaan Anda telah diterbitkan ke forum.');
        render();
      } else {
        alert('Mohon lengkapi judul dan isi topik pembahasan.');
      }
    };
  }

  // --- VIEW: TRANSCRIPTS & KHS (12 MATKUL - TOTAL 22 SKS) ---
  function renderGrades(state) {
    const user = state.currentUser;
    const transcripts = state.academicTranscripts;

    // Calculate IPS
    let totalBobotSks = 0;
    let totalSks = 0;
    transcripts.forEach(t => {
      totalBobotSks += (t.bobot * t.sks);
      totalSks += t.sks;
    });
    const ips = (totalBobotSks / totalSks).toFixed(2);

    appContainer.innerHTML = `
      <div style="margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h1 style="font-size: 1.75rem; font-weight: 800;">Kartu Hasil Studi (KHS) Digital</h1>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Evaluasi Hasil Pembelajaran Semester Ganjil 2026 (Semester 5) • Universitas Janabadra</p>
        </div>
        <button class="btn btn-primary" id="btn-print-khs">
          ${ICONS.download} Unduh & Cetak KHS Resmi (PDF)
        </button>
      </div>

      <!-- Student info sheet -->
      <div class="card" style="margin-bottom: 1.5rem; background: var(--bg-surface);">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;">
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Nama Mahasiswa</div>
            <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">${user.name}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Nomor Induk Mahasiswa (NIM)</div>
            <div style="font-size: 1.1rem; font-weight: 800; color: var(--primary-700);">${user.identifier.replace('NIM: ', '')}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Program Studi & Fakultas</div>
            <div style="font-size: 0.95rem; font-weight: 700;">Informatika (Fakultas Teknik)</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Dosen Pembimbing Akademik</div>
            <div style="font-size: 0.95rem; font-weight: 700;">${user.dosenPa}</div>
          </div>
        </div>
      </div>

      <!-- KHS Table -->
      <div class="khs-table-container" style="margin-bottom: 1.5rem;">
        <table class="khs-table">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Nama Mata Kuliah</th>
              <th>SKS</th>
              <th>Tugas</th>
              <th>Kuis</th>
              <th>UTS</th>
              <th>UAS</th>
              <th>Nilai Akhir</th>
              <th>Huruf Mutu</th>
              <th>Bobot</th>
            </tr>
          </thead>
          <tbody>
            ${transcripts.map(t => `
              <tr>
                <td style="font-family: var(--font-mono); font-weight: 700;">${t.code}</td>
                <td style="font-weight: 700; color: var(--text-main);">${t.course}</td>
                <td>${t.sks}</td>
                <td>${t.tugas}</td>
                <td>${t.kuis}</td>
                <td>${t.uts}</td>
                <td>${t.uas}</td>
                <td style="font-weight: 700; color: var(--primary-700);">${t.akhir}</td>
                <td><span class="grade-badge-a">${t.grade}</span></td>
                <td style="font-weight: 700;">${t.bobot.toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr style="background: var(--bg-subtle); font-weight: 800;">
              <td colspan="2">TOTAL SKS & INDEKS PRESTASI SEMESTER (IPS)</td>
              <td>${totalSks} SKS</td>
              <td colspan="5"></td>
              <td>IPS:</td>
              <td style="font-size: 1.15rem; color: var(--primary-700);">${ips}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Academic Summary Card -->
      <div class="card" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="font-size: 1.1rem; font-weight: 800;">Predikat Kelulusan: <span style="color: var(--primary-600);">DENGAN PUJIAN (CUMLAUDE)</span></div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">IPK Kumulatif Saat Ini: 3.92 • Beban Maksimal Semester Depan: 24 SKS</div>
        </div>
        <div class="badge badge-emerald" style="padding: 0.5rem 1rem; font-size: 0.85rem;">
          ✓ Dokumen Terverifikasi Digital oleh BAAK Universitas Janabadra Yogyakarta
        </div>
      </div>
    `;

    document.getElementById('btn-print-khs')?.addEventListener('click', () => {
      window.print();
    });
  }

  // Subscribe state changes to re-render
  store.subscribe(() => {
    render();
  });

  // Initial render
  render();
});
