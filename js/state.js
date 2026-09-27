/**
 * E-Learning UNIVERSITAS JANABADRA - State Management
 * Handles reactive state, local storage persistence, multi-role switching, and business actions.
 */

class AppStore {
  constructor() {
    // Unique version key to ensure Universitas Janabadra & Taja Abi Nugraha data is immediately loaded
    this.STORAGE_KEY = 'janabadra_elearning_v2';
    this.subscribers = [];
    this.state = this.loadState();
  }

  loadState() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...window.INITIAL_DATA,
          ...parsed,
          currentUser: parsed.users ? parsed.users[parsed.currentRole || 'mahasiswa'] : window.INITIAL_DATA.currentUser,
          currentRole: parsed.currentRole || 'mahasiswa',
          currentView: parsed.currentView || 'dashboard',
          theme: parsed.theme || 'light',
          selectedCourseId: parsed.selectedCourseId || 'c-web'
        };
      }
    } catch (e) {
      console.warn('Could not parse localStorage state, using initial data', e);
    }

    return {
      ...window.INITIAL_DATA,
      currentRole: 'mahasiswa',
      currentView: 'dashboard',
      theme: 'light',
      selectedCourseId: 'c-web'
    };
  }

  saveState() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
        currentRole: this.state.currentRole,
        currentView: this.state.currentView,
        theme: this.state.theme,
        selectedCourseId: this.state.selectedCourseId,
        assignments: this.state.assignments,
        forumThreads: this.state.forumThreads,
        attendanceRecords: this.state.attendanceRecords,
        quizList: this.state.quizList,
        notifications: this.state.notifications
      }));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.subscribers.forEach(cb => {
      try {
        cb(this.state);
      } catch (err) {
        console.error('Subscriber callback error:', err);
      }
    });
  }

  // --- ACTIONS ---

  setTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    this.saveState();
  }

  toggleTheme() {
    const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setRole(role) {
    if (!this.state.users[role]) return;
    this.state.currentRole = role;
    this.state.currentUser = this.state.users[role];
    this.saveState();
  }

  setView(viewName, params = {}) {
    this.state.currentView = viewName;
    if (params.courseId) {
      this.state.selectedCourseId = params.courseId;
    }
    this.saveState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  submitAssignment(assignmentId, fileName, textNote) {
    const asg = this.state.assignments.find(a => a.id === assignmentId);
    if (!asg) return false;

    asg.status = 'Telah Diserahkan';
    asg.submittedFile = fileName || 'Tugas_PAW_TajaAbiNugraha_24330029.pdf';
    asg.submittedAt = 'Baru saja (' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB)';
    asg.studentNote = textNote || '';

    // Update pending tasks count
    this.state.quickStats.pendingTasks = Math.max(0, this.state.quickStats.pendingTasks - 1);
    this.state.quickStats.completedTasks += 1;

    // Add notification
    this.state.notifications.unshift({
      id: 'notif-' + Date.now(),
      title: 'Tugas Berhasil Diserahkan',
      message: `Taja Abi Nugraha mengunggah berkas untuk: ${asg.title}`,
      time: 'Baru saja',
      read: false,
      type: 'assignment'
    });

    this.saveState();
    return true;
  }

  checkInAttendance(courseId) {
    const record = this.state.attendanceRecords.find(r => r.courseId === courseId);
    if (!record) return false;

    if (record.todayCheckedIn) return true;

    record.todayCheckedIn = true;
    record.attended += 1;
    record.percentage = Math.min(100, Math.round((record.attended / record.totalMeetings) * 100 * 10) / 10);
    record.lastCheckIn = 'Hari ini, ' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB (GPS Terverifikasi - Kampus Timoho UJB)';

    this.state.notifications.unshift({
      id: 'notif-' + Date.now(),
      title: 'Presensi Berhasil!',
      message: `Presensi digital untuk ${record.courseName} tercatat sukses di server Universitas Janabadra.`,
      time: 'Baru saja',
      read: false,
      type: 'attendance'
    });

    this.saveState();
    return true;
  }

  addForumPost(courseId, title, content, tags) {
    const course = this.state.courses.find(c => c.id === courseId) || this.state.courses[0];
    const newThread = {
      id: 'thm-' + Date.now(),
      courseId: course.id,
      courseTitle: course.title,
      title: title.trim(),
      author: `${this.state.currentUser.name} (${this.state.currentUser.identifier})`,
      authorRole: this.state.currentUser.role === 'dosen' ? 'Dosen Pengampu' : 'Mahasiswa',
      authorAvatar: this.state.currentUser.avatar,
      timestamp: 'Baru saja',
      tags: tags && tags.length ? tags : ['PengembanganWeb', 'InformatikaUJB'],
      upvotes: 1,
      content: content.trim(),
      replies: []
    };

    this.state.forumThreads.unshift(newThread);
    this.saveState();
    return newThread;
  }

  addForumReply(threadId, replyContent) {
    const thread = this.state.forumThreads.find(t => t.id === threadId);
    if (!thread) return false;

    const reply = {
      id: 'rep-' + Date.now(),
      author: `${this.state.currentUser.name}`,
      authorRole: this.state.currentUser.role === 'dosen' ? 'Dosen Pengampu' : 'Mahasiswa',
      authorAvatar: this.state.currentUser.avatar,
      timestamp: 'Baru saja',
      isLecturer: this.state.currentUser.role === 'dosen',
      content: replyContent.trim()
    };

    thread.replies.push(reply);
    this.saveState();
    return reply;
  }

  upvoteForumPost(threadId) {
    const thread = this.state.forumThreads.find(t => t.id === threadId);
    if (!thread) return;
    thread.upvotes += 1;
    this.saveState();
  }

  markAllNotificationsRead() {
    this.state.notifications.forEach(n => n.read = true);
    this.saveState();
  }

  recordQuizScore(quizId, score, answers) {
    const quiz = this.state.quizList.find(q => q.id === quizId);
    if (quiz) {
      quiz.completed = true;
      quiz.lastScore = score;
      quiz.completedAt = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    }

    this.state.notifications.unshift({
      id: 'notif-' + Date.now(),
      title: 'Hasil Kuis Selesai',
      message: `Nilai Kuis Pengembangan Aplikasi Web Anda: ${score}/100. Status: ${score >= 75 ? 'LULUS (Sangat Memuaskan)' : 'PERLU EVALUASI'}`,
      time: 'Baru saja',
      read: false,
      type: 'grade'
    });

    this.saveState();
  }

  publishNewAnnouncement(title, content, category) {
    const ann = {
      id: 'ann-' + Date.now(),
      title: title.trim(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      category: category || 'Akademik',
      isImportant: true,
      author: this.state.currentUser.name,
      content: content.trim()
    };
    this.state.announcements.unshift(ann);
    this.saveState();
    return ann;
  }
}

// Global instance
window.appStore = new AppStore();
