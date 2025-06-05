


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  optimizeDeps: {
    exclude: ['vite-plugin-pwa'] // Add this section to exclude the problematic dependency
  },
  plugins: [
    react(),
   
   

    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['icons/*.png'],
      manifest: {
        name: 'Texas Tech Red Raiders',
        short_name: 'Red Raiders',
        description: 'A Vite-powered web application',
        start_url: '/',
        display: 'standalone',
        background_color: '#d7241b',
        theme_color: 'black',
        icons: [
          {
            src: '/icons/redraiders.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/redraiders.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      // Add workbox options for better iOS support
      workbox: {
        navigateFallback: 'index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
});