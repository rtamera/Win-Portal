// ============================================================
// Configuration - Portal Content and Settings
// Single source of truth for all customizable content
// ============================================================

// ============================================================
// BRANDING - Logos, images, portal identity
// ============================================================
export const branding = {
  portalName: 'AS WATSON WIN PORTAL',
  welcomeText: 'WELCOME TO',
  tagline: 'Grow as One',
  yearsCelebration: '185 Years',
  sinceYear: 'Since 1841',
};

// ============================================================
// CONTENT - Footer and version info
// ============================================================
export const content = {
  footerVersion: 'V2.0.4 \u00A9WIN Portal 2024',
};

// ============================================================
// USER - Default/mock user display
// ============================================================
export const user = {
  displayName: 'test.supplier3',
  initials: 'TS',
  email: 'test.supplier3@aswatson.com',
  avatarUrl: null,
};

// ============================================================
// LAYOUT - Structural options
// ============================================================
export const layout = {
  heroPosition: 'left',
  heroWidthPercent: 45,
  showHeroImage: true,
  gridColumns: 3,
  gridGap: 24,
  navbarHeight: 60,
  sidebarWidth: 280,
};

// ============================================================
// NAVIGATION - Menu structure
// ============================================================
export const menuItems = [
  {
    id: 'app-list',
    label: 'Application List',
    icon: '\u229E',
    link: '#',
    expandable: false,
  },
  {
    id: 'account',
    label: 'Account Management',
    icon: '\uD83D\uDC64',
    link: '#',
    expandable: true,
    children: [
      { id: 'user-profiles', label: 'User Profiles', link: '#' },
      { id: 'permissions', label: 'Permissions', link: '#' },
    ],
  },
  {
    id: 'audit',
    label: 'Audit Log',
    icon: '\uD83D\uDCCB',
    link: '#',
    expandable: true,
    children: [
      { id: 'system-logs', label: 'System Logs', link: '#' },
      { id: 'login-activity', label: 'Login Activity', link: '#' },
    ],
  },
  {
    id: 'bu-supplier',
    label: 'BU/Supplier Management',
    icon: '\uD83C\uDFE2',
    link: '#',
    expandable: false,
  },
  {
    id: 'subscription',
    label: 'Subscription Plan',
    icon: '\uD83D\uDCC4',
    link: '#',
    expandable: false,
  },
];

// ============================================================
// APPLICATIONS - App grid data
// Note: Icons are imported in the component that uses them
// ============================================================
export const applications = [
  {
    id: 'winbi',
    name: 'WINbi+',
    description: 'Visual your business of AS Watson in seconds',
    iconKey: 'winbi',
    url: '#winbi',
    enabled: true,
  },
  {
    id: 'aswinsight',
    name: 'ASWInsight',
    description: 'Discover your opportunity in our major local market',
    iconKey: 'aswinsight',
    url: '#aswinsight',
    enabled: true,
  },
  {
    id: 'winsustainable',
    name: 'WINSustainable',
    description: 'Learn about sustainable choice preference in our customers',
    iconKey: 'winsustainable',
    url: '#winsustainable',
    enabled: true,
  },
  {
    id: 'wincrm',
    name: 'WINCRM',
    description: 'Understanding how your target customers interact with your brand',
    iconKey: 'wincrm',
    url: '#wincrm',
    enabled: true,
  },
  {
    id: 'winservice',
    name: 'WINService Level',
    description: 'Track on service level for delivery improvement',
    iconKey: 'winservice',
    url: '#winservice',
    enabled: true,
  },
  {
    id: 'winscore',
    name: 'WINScore',
    description: 'Collection on our NIV for analysis',
    iconKey: 'winscore',
    url: '#winscore',
    enabled: true,
  },
  {
    id: 'winbrand',
    name: 'WINBrand',
    description: 'Centralized and streamlines supplier brand data submission',
    iconKey: 'winbrand',
    url: '#winbrand',
    enabled: true,
  },
  {
    id: 'linkbi',
    name: 'LINKbi',
    description: 'Visual your business of AS Watson in seconds',
    iconKey: 'linkbi',
    url: '#linkbi',
    enabled: true,
  },
];

// ============================================================
// Combined config export (for convenience)
// ============================================================
export const config = {
  branding,
  content,
  user,
  layout,
  menuItems,
  applications,
};

export default config;
