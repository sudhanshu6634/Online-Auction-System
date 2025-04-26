import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ This defines @ as src
    },
  },
});

/*export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:5000"
    }
  }
});*/
