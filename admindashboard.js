const navItems = document.querySelectorAll('.sidebar .nav-item');
const headerTitle = document.querySelector('.main header h1');
const contentEl = document.querySelector('.main .content');
const cardsSection = document.querySelector('.main .cards');

const views = {
  dashboard: {
    title: 'Dashboard',
    html: '<p>Welcome to Admin Panel</p>',
    showCards: true
  },
  users: {
    title: 'Users',
    html: '<h3>Users</h3><p>List users or user management UI goes here.</p>',
    showCards: false
  },
  reports: {
    title: 'Reports',
    html: '<h3>Reports</h3><p>Reports and analytics go here.</p>',
    showCards: false
  },
  settings: {
    title: 'Settings',
    html: '<h3>Settings</h3><p>Application settings go here.</p>',
    showCards: false
  }
};

function activateView(viewKey) {
  const view = views[viewKey] || views.dashboard;
  headerTitle.textContent = view.title;
  contentEl.innerHTML = view.html;
  if (cardsSection) cardsSection.style.display = view.showCards ? '' : 'none';
  navItems.forEach(i => i.classList.toggle('active', i.dataset.view === viewKey));
}

navItems.forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', () => activateView(item.dataset.view));
});

// Populate stats (replace these calls with real data fetches later)
function populateStats() {
  document.getElementById('totalUsers').textContent = '1,234';
  document.getElementById('totalRevenue').textContent = '$12,345';
  document.getElementById('totalOrders').textContent = '456';
}

// Initialize
activateView(document.querySelector('.sidebar .nav-item.active')?.dataset.view || 'dashboard');
populateStats();