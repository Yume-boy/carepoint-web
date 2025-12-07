import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My PWA App',
        short_name: 'PWAApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0D6EFD',
        icons: [
          {
            src: 'logo.jpg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo.jpg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
