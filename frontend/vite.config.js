import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['letter-j.png'],
      manifest: {
        name: 'Mansap App',
        short_name: 'Mansap',
        description: 'Жұмыс іздеу платформасы',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/letter-j.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/letter-j.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
