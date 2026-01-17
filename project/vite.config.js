 // ...existing code...
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'public',               // serve/build from public/
  build: {
    outDir: '../dist',          // write final site to project/dist so Firebase finds it
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        products: resolve(__dirname, 'public/products.html'),
        services: resolve(__dirname, 'public/services.html'),
        about: resolve(__dirname, 'public/about.html'),
        contact: resolve(__dirname, 'public/contact.html'),
      },
    },
    assetsInlineLimit: 0,
  },
});
// ...existing code...