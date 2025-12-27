import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/shared/components',
      '@hooks': '/src/shared/hooks',
      '@utils': '/src/shared/utils',
      '@api': '/src/api',
      '@domain': '/src/domain',
      '@styles': '/src/shared/styles',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
