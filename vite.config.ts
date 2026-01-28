import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/graphql': {
        target: 'https://backend-tms-8rk7.onrender.com',
        changeOrigin: true,
      },
    },
  },
});
