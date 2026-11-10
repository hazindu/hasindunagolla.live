import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPlugin from './scripts/seo-plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Writes per-route HTML (with meta tags and JSON-LD), 404.html,
    // sitemap.xml and robots.txt. See scripts/seo-plugin.js.
    seoPlugin(),
  ],
})
