import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Dream-House-Finder", // Repository name for GitHub Pages
  build: {
    outDir: 'dist', // Specify the output directory
  },
})