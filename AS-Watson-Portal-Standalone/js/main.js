// ============================================================
// Main Application Entry Point - Standalone Dashboard
// Initializes all components for the main dashboard page
// ============================================================

import { config } from './config.js';

// ============================================================
// Initialize Application
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
  console.log('✓ AS Watson WIN Portal - Standalone Dashboard Loaded');
});

// ============================================================
// Dashboard Initialization
// ============================================================
function initDashboard() {
  populateContent();
  setupNavbar();
  setupSidebar();
  renderAppGrid();
}

// ============================================================
// Content Population
// ============================================================
function populateContent() {
  const { branding, user, content } = config;

  // Populate Navbar
  const navbarLogo = document.getElementById('navbarLogo');
  const navbarUserName = document.getElementById('navbarUserName');

  if (navbarLogo) navbarLogo.src = branding.logoMain;
  if (navbarUserName) navbarUserName.textContent = user.displayName;

  // Populate Sidebar
  const sidebarLogo = document.getElementById('sidebarLogo');
  const sidebarUserName = document.getElementById('sidebarUserName');
  const sidebarFooter = document.getElementById('sidebarFooter');

  if (sidebarLogo) sidebarLogo.src = branding.logoMain;
  if (sidebarUserName) sidebarUserName.textContent = user.displayName;
  if (sidebarFooter) sidebarFooter.textContent = content.footerVersion;

  // Populate Dashboard Hero Section
  const heroLogo = document.getElementById('dashboardHeroLogo185');
  const welcomeText = document.querySelector('.dashboard__hero .welcome-text');
  const portalName = document.querySelector('.dashboard__hero .portal-name');
  const heroImage = document.getElementById('dashboardHeroImage');

  if (heroLogo) heroLogo.src = branding.logo185;
  if (welcomeText) welcomeText.textContent = branding.welcomeText;
  if (portalName) portalName.textContent = branding.portalName;
  if (heroImage) heroImage.src = branding.heroImage;

  console.log('✓ Content populated');
}

// ============================================================
// Navbar Functionality
// ============================================================
function setupNavbar() {
  const userElement = document.getElementById('navbarUser');
  const dropdown = document.getElementById('navbarDropdown');
  const logoutBtn = document.getElementById('logoutBtn');

  if (!userElement || !dropdown) return;

  // Toggle dropdown on user click
  userElement.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdown.classList.remove('active');
  });

  // Logout button handler (placeholder - customize as needed)
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      console.log('Logout clicked');
      // Add your logout logic here
      // Example: window.location.href = '/logout.html';
    });
  }

  console.log('✓ Navbar initialized');
}

// ============================================================
// Sidebar Functionality
// ============================================================
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const hamburger = document.querySelector('.navbar__hamburger');
  const closeBtn = document.querySelector('.sidebar__close');
  const sidebarLogoutBtn = document.getElementById('sidebarLogoutBtn');

  if (!sidebar || !overlay) return;

  // Render menu items
  renderMenuItems();

  // Open sidebar
  function openSidebar() {
    sidebar.classList.add('sidebar--open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close sidebar
  function closeSidebar() {
    sidebar.classList.remove('sidebar--open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners
  if (hamburger) {
    hamburger.addEventListener('click', openSidebar);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  // Sidebar logout button handler
  if (sidebarLogoutBtn) {
    sidebarLogoutBtn.addEventListener('click', () => {
      console.log('Sidebar logout clicked');
      // Add your logout logic here
    });
  }

  console.log('✓ Sidebar initialized');
}

// ============================================================
// Menu Items Rendering
// ============================================================
function renderMenuItems() {
  const menu = document.getElementById('sidebarMenu');
  if (!menu) return;

  const { menuItems } = config;

  menu.innerHTML = menuItems.map(item => `
    <a href="${item.link}" class="sidebar__menu-item" data-expandable="${item.expandable}">
      <span class="sidebar__menu-icon">${item.icon}</span>
      <span class="sidebar__menu-label">${item.label}</span>
      ${item.expandable ? '<span class="sidebar__menu-arrow">▶</span>' : ''}
    </a>
  `).join('');
}

// ============================================================
// Application Grid Rendering
// ============================================================
function renderAppGrid() {
  const grid = document.getElementById('appGrid');
  if (!grid) return;

  const { applications } = config;

  // Filter only enabled apps
  const enabledApps = applications.filter(app => app.enabled);

  grid.innerHTML = enabledApps.map(app => `
    <a href="${app.url}" class="app-card">
      <div class="app-card__logo">
        <img src="${app.icon}" alt="${app.name}" loading="lazy">
      </div>
      <p class="app-card__description">${app.description}</p>
    </a>
  `).join('');

  console.log(`✓ App grid rendered with ${enabledApps.length} applications`);
}
