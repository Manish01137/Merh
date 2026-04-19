import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    assetsInlineLimit: 4096,
    rolldownOptions: {
      output: {
        advancedChunks: {
          groups: [
            { name: 'react-vendor', test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/ },
            { name: 'motion-vendor', test: /[\\/]node_modules[\\/]framer-motion[\\/]/ },
            { name: 'gsap-vendor', test: /[\\/]node_modules[\\/]gsap[\\/]/ },
            { name: 'icons-vendor', test: /[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/ },
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  oxc: {
    jsx: { refresh: true },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },
})
