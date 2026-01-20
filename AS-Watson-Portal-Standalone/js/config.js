// ============================================================
// Configuration - Portal Content and Settings
// Single source of truth for all customizable content
// ============================================================

export const config = {

  // ============================================================
  // BRANDING - Logos, images, portal identity
  // ============================================================
  branding: {
    portalName: 'AS WATSON WIN PORTAL',
    welcomeText: 'WELCOME TO',
    tagline: 'Grow as One',
    yearsCelebration: '185 Years',
    sinceYear: 'Since 1841',

    // Image paths - update these when assets change
    logo185: '/images/logo-185.png',
    logoMain: '/images/logo-asw.png',
    heroImage: '/images/globe.jpg',
    favicon: '/images/favicon.ico'
  },

  // ============================================================
  // THEME - Colors and typography (also in CSS variables)
  // ============================================================
  theme: {
    // Primary brand colors
    primaryColor: '#C41230',
    primaryColorDark: '#9E0E27',

    // UI colors
    cardBackground: '#FCF8EE',
    navyButton: '#2C3E50',

    // Neutrals
    white: '#FFFFFF',
    grayLight: '#F5F5F5',
    grayMedium: '#E0E0E0',
    grayDark: '#333333',
    grayMuted: '#666666',

    // Accents
    orange: '#F7941D',
    pink: '#E91E8C',
    teal: '#00A99D',

    // Typography
    fontFamily: "'Aptos', 'Aptos Display', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",

    // Borders & Shadows
    borderRadius: '8px',
    cardShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    cardShadowHover: '0 4px 16px rgba(0, 0, 0, 0.12)'
  },

  // ============================================================
  // CONTENT - All user-facing text strings
  // ============================================================
  content: {
    // Footer
    footerVersion: 'V2.0.4 ©WIN Portal 2024'
  },

  // ============================================================
  // USER - Default/mock user display
  // ============================================================
  user: {
    displayName: 'test.supplier3',
    avatarUrl: null
  },

  // ============================================================
  // LAYOUT - Structural options
  // ============================================================
  layout: {
    // Hero section
    heroPosition: 'left',
    heroWidthPercent: 45,
    showHeroImage: true,

    // App grid
    gridColumns: 3,
    gridGap: 24,

    // Navbar
    navbarHeight: 60,

    // Sidebar
    sidebarWidth: 280
  },

  // ============================================================
  // NAVIGATION - Menu structure
  // ============================================================
  menuItems: [
    {
      id: 'app-list',
      label: 'Application List',
      icon: '⊞',
      link: '#',
      expandable: false
    },
    {
      id: 'account',
      label: 'Account Management',
      icon: '👤',
      link: '#',
      expandable: false
    },
    {
      id: 'audit',
      label: 'Audit Log',
      icon: '📋',
      link: '#',
      expandable: true,
      children: []
    },
    {
      id: 'bu-supplier',
      label: 'BU/Supplier Management',
      icon: '🏢',
      link: '#',
      expandable: false
    },
    {
      id: 'subscription',
      label: 'Subscription Plan',
      icon: '📄',
      link: '#',
      expandable: false
    }
  ],

  // ============================================================
  // APPLICATIONS - App grid data
  // ============================================================
  applications: [
    {
      id: 'winbi',
      name: 'WINbi+',
      description: 'Visual your business of AS Watson in seconds',
      icon: '/images/app-icons/winbi.png',
      url: '#winbi',
      enabled: true
    },
    {
      id: 'aswinsight',
      name: 'ASWInsight',
      description: 'Discover your opportunity in our major local market',
      icon: '/images/app-icons/aswinsight.png',
      url: '#aswinsight',
      enabled: true
    },
    {
      id: 'winsustainable',
      name: 'WINSustainable',
      description: 'Learn about sustainable choice preference in our customers',
      icon: '/images/app-icons/winsustainable.png',
      url: '#winsustainable',
      enabled: true
    },
    {
      id: 'wincrm',
      name: 'WINCRM',
      description: 'Understanding how your target customers interact with your brand',
      icon: '/images/app-icons/wincrm.png',
      url: '#wincrm',
      enabled: true
    },
    {
      id: 'winservice',
      name: 'WINService Level',
      description: 'Track on service level for delivery improvement',
      icon: '/images/app-icons/winservice.png',
      url: '#winservice',
      enabled: true
    },
    {
      id: 'winscore',
      name: 'WINScore',
      description: 'Collection on our NIV for analysis',
      icon: '/images/app-icons/winscore.png',
      url: '#winscore',
      enabled: true
    },
    {
      id: 'winbrand',
      name: 'WINBrand',
      description: 'Centralized and streamlines supplier brand data submission',
      icon: '/images/app-icons/winbrand.png',
      url: '#winbrand',
      enabled: true
    },
    {
      id: 'linkbi',
      name: 'LINKbi',
      description: 'Visual your business of AS Watson in seconds',
      icon: '/images/app-icons/linkbi.png',
      url: '#linkbi',
      enabled: true
    }
  ]
};
