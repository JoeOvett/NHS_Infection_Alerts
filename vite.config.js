import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Set the root to the 'src' directory
  build: {
    outDir: '../dist', // Output directory
  },
  server: {
    port: 5173, // Dev desired port
  },
});