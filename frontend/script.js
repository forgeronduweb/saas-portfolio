// ─── Navigation ───
  function showSection(name) {
    document.getElementById('sidebar').classList.remove('open');
document.getElementById('menuToggle').style.display = 'flex';
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById('section-' + name)?.classList.add('active');
    document.querySelector(`[data-section="${name}"]`)?.classList.add('active');
    document.getElementById('breadcrumbCurrent').textContent = name;
    hideArticle();
    window.scrollTo(0, 0);
    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
  }

  document.querySelectorAll('.nav-link[data-section]').forEach(link => {
    link.addEventListener('click', () => showSection(link.dataset.section));
  });

  // ─── Mobile menu ───
  const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const sidebarClose = document.getElementById('sidebarClose');

// Ouvrir sidebar
menuToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
  menuToggle.style.display = 'none'; // cacher hamburger
});

// Fermer sidebar
sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('open');
  menuToggle.style.display = 'flex'; // réafficher hamburger
});

  // ─── Article views ───
  function showArticle(id) {
    document.getElementById('blog-list').style.display = 'none';
    document.querySelectorAll('.article-view').forEach(a => a.classList.remove('active'));
    document.getElementById('article-' + id)?.classList.add('active');
    window.scrollTo(0, 0);
  }

  function hideArticle() {
    document.querySelectorAll('.article-view').forEach(a => a.classList.remove('active'));
    document.getElementById('blog-list').style.display = '';
  }

  // ─── Project filters ───
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ─── Form submit ───
  function handleSubmit(btn) {
    btn.textContent = 'Message envoyé ✓';
    btn.style.background = '#22c55e';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'Envoyer le message →';
      btn.style.background = '';
      btn.style.color = '';
    }, 3000);
  }