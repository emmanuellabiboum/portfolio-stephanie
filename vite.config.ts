import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-stephanie/', // le nom exact de ton repo GitHub
  plugins: [react()],
})


