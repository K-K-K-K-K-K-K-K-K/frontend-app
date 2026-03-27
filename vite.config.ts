import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/frontend-app/', /// Comment if deploy via NPM or Docker. Github Repo Name
  plugins: [react()],
})
