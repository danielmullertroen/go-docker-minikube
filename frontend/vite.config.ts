import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/frontend',
  server: {
    host: true, // This enables 0.0.0.0
    port: 5173,
    allowedHosts: [
      'aid-dev.skryter.no',
      'localhost',
      '127.0.0.1'
    ],
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'aid-dev.skryter.no',
      'localhost',
      '127.0.0.1'
    ]
  }
})
