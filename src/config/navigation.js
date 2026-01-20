// ============================================================
// Navigation Configuration
// Sidebar menu items and structure
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
      { id: 'user-profiles', label: 'User Profiles', icon: '👤', link: '#' },
      { id: 'permissions', label: 'Permissions', icon: '🔐', link: '#' },
    ],
  },
  {
    id: 'audit',
    label: 'Audit Log',
    icon: '\uD83D\uDCCB',
    link: '#',
    expandable: true,
    children: [
      { id: 'system-logs', label: 'System Logs', icon: '📋', link: '#' },
      { id: 'login-activity', label: 'Login Activity', icon: '🕐', link: '#' },
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
