# Quick Start - Standalone Dashboard

## ⚡ Fastest Way to Get Started

### View the Standalone Version

```bash
npm run dev:standalone
```

Opens at: **http://localhost:3001/standalone-main.html**

---

## 📦 What You Have

### Standalone Files (Ready to Transfer)
```
📁 Portal/
  📄 standalone-main.html           ← Main HTML file
  📁 standalone-css/
    📄 main-styles.css              ← All CSS (one file)
  📁 standalone-js/
    📄 config.js                    ← Data/settings
    📄 main.js                      ← All logic
  📁 assets/
    📁 images/                      ← All images needed
```

### Production Build
```bash
npm run build:standalone
```

**Output**: `dist-standalone/` folder
- **Size**: ~16 KB total (gzipped: ~5 KB)
- **Files**: 3 files (HTML + CSS + JS)
- Ready to deploy anywhere!

---

## 🚀 Transfer to Another Repo

### Option 1: Copy Source Files (Development)

```bash
# Copy these folders to your new repo
cp standalone-main.html /path/to/new-repo/
cp -r standalone-css /path/to/new-repo/
cp -r standalone-js /path/to/new-repo/
cp -r assets /path/to/new-repo/
```

Then use Vite or any dev server.

### Option 2: Copy Built Files (Production)

```bash
# 1. Build first
npm run build:standalone

# 2. Copy the dist-standalone folder
cp -r dist-standalone /path/to/new-repo/
```

Just upload to any hosting service!

---

## 🎨 Customize in 30 Seconds

### Change Colors
Edit `standalone-css/main-styles.css` (line 6):
```css
--color-primary: #C41230;     /* Your brand color */
--color-card-bg: #FCF8EE;     /* Card background */
```

### Change Content
Edit `standalone-js/config.js`:
```javascript
branding: {
  portalName: 'YOUR PORTAL NAME',  // Line 12
},
user: {
  displayName: 'your.name',        // Line 70
}
```

---

## ✅ What Works

- ✅ Navbar with user dropdown
- ✅ Sidebar overlay menu
- ✅ Hero section with branding
- ✅ 8 application cards
- ✅ Responsive (1920x1080 → 1024px)
- ✅ Smooth animations
- ✅ Works with Vite
- ✅ Standard coding practices

---

## 📚 Full Documentation

- **[STANDALONE_README.md](STANDALONE_README.md)** - Complete documentation
- **[TRANSFER_GUIDE.md](TRANSFER_GUIDE.md)** - Detailed comparison & transfer guide

---

## 🔍 File Sizes

| File | Size | Gzipped |
|------|------|---------|
| HTML | 2.24 KB | 0.82 KB |
| CSS | 8.62 KB | 2.14 KB |
| JS | 5.64 KB | 2.09 KB |
| **Total** | **16.5 KB** | **~5 KB** |

Ultra lightweight! 🚀

---

**Ready to transfer!** Just copy the files and you're done.
