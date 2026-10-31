/**
 * SCRIPT.JS - Interaktivitas Website About Me
 * Siswa: Nicolas Jonathan (Nathan)
 * Fitur Utama: Theme Toggle (Dark Mode & Light Mode) + Mobile Navigation Menu
 */

// 1. Eksekusi kode setelah seluruh elemen DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  // Ambil elemen yang dibutuhkan
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  // ----------------------------------------------------
  // FITUR 1: THEME TOGGLE (Dark Mode <-> Light Mode)
  // ----------------------------------------------------

  // A. Cek apakah pengguna sudah pernah menyimpan preferensi tema sebelumnya di browser
  const savedTheme = localStorage.getItem('user-theme') || 'dark';

  // Terapkan tema awal sesuai preferensi yang tersimpan
  applyTheme(savedTheme);

  // B. Fungsi untuk menerapkan tema dan memperbarui tampilan tombol
  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeText) themeText.textContent = 'Light';
      localStorage.setItem('user-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeText) themeText.textContent = 'Dark';
      localStorage.setItem('user-theme', 'dark');
    }
  }

  // C. Event listener ketika tombol switch tema diklik
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'light') {
        applyTheme('dark');
      } else {
        applyTheme('light');
      }
    });
  }

  // ----------------------------------------------------
  // FITUR 2: MOBILE NAVIGATION MENU (Responsif Layar HP)
  // ----------------------------------------------------
  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
      mobileToggleBtn.textContent = isOpen ? '✕' : '☰';
    });

    // Tutup menu saat salah satu link diklik di layar HP
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (mobileToggleBtn) mobileToggleBtn.textContent = '☰';
      });
    });
  }
});
