// ============================================================
// Vite Configuration - AS Watson WIN Portal
// Configuration for the dashboard application
// ============================================================

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Root directory
  root: './',

  // Build configuration
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    strictPort: false,
  },

  // Asset handling
  publicDir: 'assets',

  // Base path (adjust if deploying to subdirectory)
  base: './',
});
