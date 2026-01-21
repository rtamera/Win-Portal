# WIN Portal Developer Guide

A beginner-friendly guide to editing and maintaining the AS Watson WIN Portal application.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [How to Add a New Application](#how-to-add-a-new-application)
4. [How to Edit Sidebar Navigation](#how-to-edit-sidebar-navigation)
5. [How to Change Branding](#how-to-change-branding)
6. [How to Modify Styles](#how-to-modify-styles)
7. [Configuration Files Reference](#configuration-files-reference)

---

## Project Overview

This is a React-based portal application built with Vite. The design is modular, meaning most content changes can be made by editing configuration files rather than touching the actual components.

**Key Technologies:**
- React (UI framework)
- Vite (build tool)
- React Router (navigation)
- CSS (styling)

---

## Folder Structure

```
src/
├── assets/              # Images and logos
│   ├── Globe.png
│   ├── ASWatsonLogo.png
│   ├── WINBinobg.png    # App logos (use transparent PNG)
│   └── ...
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   └── Sidebar.jsx
├── config/              # ** MAIN CONFIGURATION FILES **
│   ├── index.js         # Central export
│   ├── applications.js  # App grid data
│   ├── navigation.js    # Sidebar menu items
│   ├── branding.js      # Portal name, text content
│   └── user.js          # User display settings
├── pages/
│   ├── Main/
│   │   └── MainPage.jsx # Main app grid page
│   └── Login/
│       └── LoginPage.jsx
├── styles/              # CSS files
│   ├── index.css        # Main style import
│   ├── variables.css    # Colors, fonts, spacing
│   ├── base.css         # Reset and defaults
│   ├── navbar.css
│   ├── sidebar.css
│   ├── app-card.css     # Application cards
│   └── login.css
└── app.jsx              # Main app component
```

---

## How to Add a New Application

Adding a new app card to the grid requires **3 steps**:

### Step 1: Add the Logo Image

1. Get your logo image (preferably PNG with transparent background)
2. Name it descriptively, e.g., `MyNewAppnobg.png`
3. Place it in: `src/assets/`

### Step 2: Register the Icon in MainPage.jsx

Open `src/pages/Main/MainPage.jsx` and:

**A) Add the import at the top (around line 5-12):**

```javascript
// Existing imports...
import winbiLogo from '../../assets/WINBinobg.png';
import aswinsightLogo from '../../assets/ASWINSIGHTnobg.png';
// ... other imports ...

// ADD YOUR NEW IMPORT HERE:
import myNewAppLogo from '../../assets/MyNewAppnobg.png';
```

**B) Add to the iconMap (around line 15-24):**

```javascript
const iconMap = {
  winbi: winbiLogo,
  aswinsight: aswinsightLogo,
  // ... other mappings ...

  // ADD YOUR NEW MAPPING HERE:
  mynewapp: myNewAppLogo,
};
```

### Step 3: Add the Application Entry

Open `src/config/applications.js` and add a new object to the array:

```javascript
export const applications = [
  // ... existing apps ...

  // ADD YOUR NEW APP HERE:
  {
    id: 'mynewapp',           // Unique identifier (no spaces)
    name: 'My New App',       // Display name
    description: 'Description of what this app does',
    iconKey: 'mynewapp',      // Must match the key in iconMap
    url: '#mynewapp',         // Link URL (or full URL like 'https://...')
    enabled: true,            // Set to false to hide without deleting
  },
];
```

### Complete Example

Let's say you want to add "WINAnalytics":

1. **Add image:** Save `WINAnalyticsnobg.png` to `src/assets/`

2. **Edit MainPage.jsx:**
   ```javascript
   // Add import
   import winanalyticsLogo from '../../assets/WINAnalyticsnobg.png';

   // Add to iconMap
   const iconMap = {
     // ... existing entries ...
     winanalytics: winanalyticsLogo,
   };
   ```

3. **Edit applications.js:**
   ```javascript
   {
     id: 'winanalytics',
     name: 'WINAnalytics',
     description: 'Advanced analytics and reporting dashboard',
     iconKey: 'winanalytics',
     url: 'https://analytics.aswatson.com',
     enabled: true,
   },
   ```

### Disabling an Application

To temporarily hide an app without deleting it, set `enabled: false`:

```javascript
{
  id: 'winbi',
  name: 'WINbi+',
  description: 'Visual your business of AS Watson in seconds',
  iconKey: 'winbi',
  url: '#winbi',
  enabled: false,  // <-- This hides the app
},
```

---

## How to Edit Sidebar Navigation

The sidebar menu is configured in `src/config/navigation.js`.

### Menu Item Structure

```javascript
{
  id: 'unique-id',        // Unique identifier
  label: 'Menu Label',    // Display text
  icon: '📊',             // Emoji or Unicode icon
  link: '#',              // URL or anchor
  expandable: false,      // true if it has children
  children: [],           // Sub-menu items (if expandable: true)
}
```

### Adding a Simple Menu Item

```javascript
{
  id: 'reports',
  label: 'Reports',
  icon: '📊',
  link: '/reports',
  expandable: false,
},
```

### Adding a Menu Item with Dropdown

```javascript
{
  id: 'settings',
  label: 'Settings',
  icon: '⚙️',
  link: '#',
  expandable: true,
  children: [
    { id: 'general', label: 'General', icon: '🔧', link: '/settings/general' },
    { id: 'security', label: 'Security', icon: '🔒', link: '/settings/security' },
  ],
},
```

### Common Icons

| Purpose | Icon |
|---------|------|
| User/Profile | 👤 |
| Settings | ⚙️ |
| Reports | 📊 |
| Documents | 📄 |
| Security | 🔐 |
| Building | 🏢 |
| Time/Clock | 🕐 |
| List | 📋 |
| Search | 🔍 |
| Mail | ✉️ |

---

## How to Change Branding

Edit `src/config/branding.js`:

```javascript
export const branding = {
  portalName: 'AS WATSON WIN PORTAL',  // Main title
  welcomeText: 'WELCOME TO',           // Text above title
  tagline: 'Grow as One',              // Tagline
  yearsCelebration: '185 Years',       // Anniversary text
  sinceYear: 'Since 1841',             // Since year
};

export const content = {
  footerVersion: 'V2.0.4 ©WIN Portal 2024',  // Footer text
};
```

### Changing the Logo

1. Replace the image files in `src/assets/`:
   - `ASWatsonLogo.png` - Navbar logo
   - `ASW-185yrs-logo-group-en.png` - Hero section logo
   - `Globe.png` - Globe decoration

2. Keep the same filenames, or update imports in `src/app.jsx`

---

## How to Modify Styles

### Colors and Theme

Edit `src/styles/variables.css`:

```css
:root {
  /* Primary Brand Colors */
  --color-primary: #C41230;        /* Main brand color (red) */
  --color-primary-dark: #9E0E27;   /* Darker shade for hover */

  /* UI Colors */
  --color-card-bg: #FCF8EE;        /* Card background (cream) */
  --color-card-bg-hover: #FEF0D1;  /* Card hover color */
  --color-navy: #2C3E50;           /* Navy blue */

  /* Neutrals */
  --color-white: #FFFFFF;
  --color-gray-light: #F5F5F5;
  --color-gray-medium: #E0E0E0;
  --color-gray-dark: #333333;
  --color-gray-muted: #666666;
}
```

### Font

The default font is Aptos. To change it, edit `variables.css`:

```css
--font-primary: 'Your Font', 'Fallback Font', sans-serif;
```

### Grid Layout

Edit `src/styles/app-card.css`:

```css
.app-grid {
  grid-template-columns: repeat(3, minmax(200px, 1fr));  /* 3 columns */
  gap: 1.5vh 20px;  /* Vertical and horizontal gap */
  max-width: 1000px;  /* Maximum grid width */
}
```

### Card Appearance

Also in `app-card.css`:

```css
.app-card {
  background-color: var(--color-card-bg);
  border-radius: var(--border-radius-lg);  /* 12px */
  min-height: 160px;
}
```

---

## Configuration Files Reference

| File | Purpose | What You Can Change |
|------|---------|---------------------|
| `config/applications.js` | App grid | Add/remove/edit app cards |
| `config/navigation.js` | Sidebar menu | Menu items and structure |
| `config/branding.js` | Text content | Portal name, footer, taglines |
| `config/user.js` | User display | Default user name, initials |
| `styles/variables.css` | Theme | Colors, fonts, spacing |
| `styles/app-card.css` | Card grid | Grid layout, card styles |

---

## Quick Reference: File Locations

| Task | File to Edit |
|------|--------------|
| Add new app | `config/applications.js` + `pages/Main/MainPage.jsx` |
| Edit sidebar | `config/navigation.js` |
| Change colors | `styles/variables.css` |
| Edit portal name | `config/branding.js` |
| Change card layout | `styles/app-card.css` |
| Add new logo | `assets/` folder + import in relevant file |

---

## Running the Application

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Netlify Deployment (Automatic)

This project uses **Netlify** to automatically deploy the website. Here's everything you need to know:

### How It Works

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│  You push code  │ ───► │ Netlify detects │ ───► │  Live website   │
│  to main-rhea   │      │ builds & deploy │      │    updates      │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

**Simple explanation:** Every time you push code to the `main-rhea` branch, Netlify automatically:
1. Detects the new code
2. Runs `npm install`
3. Runs `npm run build`
4. Publishes the built files to your live site

### Important: Which Branch Triggers Deployment?

| Branch | What Happens on Push |
|--------|---------------------|
| `main-rhea` | Automatically deploys to live site |
| Any other branch | Creates a "Deploy Preview" (separate test URL) |

### Live Site URL

Your site will be at: **https://[your-site-name].netlify.app**

(You can customize this name in Netlify settings)

### Step-by-Step: Making Changes Go Live

1. **Make your changes** to the code locally
2. **Test locally** with `npm run dev`
3. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Describe what you changed"
   ```
4. **Push to main-rhea:**
   ```bash
   git push origin main-rhea
   ```
5. **Wait 1-2 minutes** for deployment
6. **Check the live site** - your changes are now live!

### How to Check Deployment Status

1. Go to **[app.netlify.com](https://app.netlify.com)**
2. Click on your site
3. You'll see the deployment status:
   - 🟡 **Building** = Currently deploying
   - ✅ **Published** = Successfully deployed
   - ❌ **Failed** = Deployment failed (click to see error)

### Deploy Previews (Great for Testing!)

When you push to a branch OTHER than `main-rhea`, Netlify creates a **Deploy Preview**:
- It's a separate URL just for that branch
- You can test changes without affecting the live site
- Perfect for code reviews and testing

Example: Push to `feature-branch` → Netlify creates `https://deploy-preview-123--your-site.netlify.app`

### Common Questions

**Q: Does every push update the live site?**
A: Only pushes to `main-rhea` branch update the main site. Other branches get their own preview URLs.

**Q: How long does deployment take?**
A: Usually 1-2 minutes.

**Q: What if deployment fails?**
A: Go to Netlify dashboard, click on the failed deploy, and read the error log. Common issues:
- Syntax errors in code
- Missing dependencies
- Build errors

**Q: Can I deploy manually?**
A: Yes! In Netlify dashboard → Deploys → "Trigger deploy" button.

**Q: How do I rollback to a previous version?**
A: In Netlify dashboard → Deploys → Click on any previous deploy → "Publish deploy" button.

**Q: How do I test without affecting the live site?**
A: Create a new branch and push to it:
```bash
git checkout -b my-new-feature    # Create new branch
# ... make changes ...
git push origin my-new-feature    # Push (creates Deploy Preview)
# Test at the preview URL
# When ready, merge to main-rhea
```

### Configuration Files

| File | Purpose |
|------|---------|
| `netlify.toml` | Netlify build settings and redirects |
| `vite.config.js` | Build configuration with `base: '/'` |

### netlify.toml Explained

```toml
[build]
  command = "npm run build"    # What command to run
  publish = "dist"             # Where the built files are

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200                 # Handles client-side routing (SPA)
```

### First-Time Setup (One-Time Only)

If you need to connect a new Netlify site:

1. Go to **[app.netlify.com](https://app.netlify.com)**
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Select the **Win-Portal** repository
5. Set these build settings:
   - Branch: `main-rhea`
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy site"**

---

## Tips for Beginners

1. **Always save files** before checking the browser
2. **Use browser DevTools** (F12) to inspect elements and debug
3. **Keep backups** before making major changes
4. **Test on different screen sizes** using browser's responsive mode
5. **Check the console** for errors if something doesn't work
6. **Commit often** with Git to track changes

---

## Need Help?

- Check browser console for error messages
- Verify file paths are correct (case-sensitive!)
- Make sure all imports match the actual filenames
- Ensure JSON/JavaScript syntax is valid (watch for commas)
