# AS Watson WIN Portal - Dashboard

A clean, standalone dashboard for the AS Watson WIN Portal. This version displays the main portal interface without login/logout functionality.

## 📁 Project Structure

```
Portal/
├── index.html              # Main dashboard HTML
├── css/
│   └── main-styles.css     # All styles consolidated in one file
├── js/
│   ├── config.js           # Configuration (branding, apps, menu)
│   └── main.js             # Application logic
├── assets/
│   └── images/             # All images (logos, icons, hero)
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
# Install dependencies (if not already installed)
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Opens at: `http://localhost:3000/`

### Production Build

```bash
# Build for production
npm run build
```

Output: `dist/` folder (ready to deploy)

## 🎨 Features

- ✅ **Navbar** - Fixed top navigation with user dropdown
- ✅ **Sidebar** - Overlay menu with smooth animations
- ✅ **Hero Section** - Branding area with AS Watson logo and globe
- ✅ **Application Grid** - 8 application cards in responsive layout
- ✅ **Responsive Design** - Optimized for 1920x1080, responsive down to 1024px
- ✅ **Clean Code** - Semantic HTML, organized CSS, modular JavaScript

## 🔧 Customization

### Update Content

Edit `js/config.js`:

```javascript
export const config = {
  branding: {
    portalName: 'AS WATSON WIN PORTAL',  // Change portal name
    // ...
  },
  user: {
    displayName: 'test.supplier3',       // Change username
  },
  applications: [
    // Add/remove/modify application cards
  ],
  menuItems: [
    // Add/remove/modify sidebar menu items
  ]
};
```

### Update Colors

Edit `css/main-styles.css`:

```css
:root {
  --color-primary: #C41230;     /* Primary brand color */
  --color-card-bg: #FCF8EE;     /* Card background */
  /* ... more color variables */
}
```

## 📦 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with custom properties (CSS variables)
- **JavaScript (ES6)** - Vanilla JavaScript with modules
- **Vite** - Build tool and dev server

## 📊 Build Output

| File | Size | Gzipped |
|------|------|---------|
| HTML | 2.24 KB | 0.82 KB |
| CSS | 8.62 KB | 2.14 KB |
| JS | 5.64 KB | 2.09 KB |
| **Total** | **16.5 KB** | **~5 KB** |

## 🌐 Browser Support

- ✅ Microsoft Edge (Latest)
- ✅ Google Chrome (Latest)
- ✅ Safari (Latest)

## 📚 Additional Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 30 seconds
- **[TRANSFER_GUIDE.md](TRANSFER_GUIDE.md)** - Guide for transferring to another repo
- **[STANDALONE_README.md](STANDALONE_README.md)** - Detailed standalone version docs

## 🚢 Deployment

### Option 1: Netlify

```bash
# 1. Build the project
npm run build

# 2. Deploy the dist/ folder
# - Drag & drop dist/ to Netlify
# - Or connect your Git repository
```

### Option 2: Vercel

```bash
vercel deploy dist
```

### Option 3: GitHub Pages

```bash
# Push dist/ folder to gh-pages branch
```

## 📝 Notes

- **Logout buttons** are currently placeholders. Add your own logic in `js/main.js`.
- **Menu items** currently link to `#` anchors. Update URLs in `js/config.js` as needed.
- **Image paths** use Vite's public directory (`/images/...` maps to `assets/images/`).

## 📞 Commands Reference

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
```

---

**Version**: 1.0.0
**Last Updated**: 2026-01-15
**Branch**: transfer
**Status**: ✅ Ready for transfer
