import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the built site works from any static host / subfolder
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2018',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['gsap', 'locomotive-scroll'],
        },
      },
    },
  },
});
