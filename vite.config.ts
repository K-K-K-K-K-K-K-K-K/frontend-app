import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/frontend-app/', // comment when deploy locally with npm
  plugins: [react()],
})
