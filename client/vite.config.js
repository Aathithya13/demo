import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/demo/', // 👈 Add this line (match your GitHub repo name)
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      css: {},
    },
  },
})
