import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // Убедись, что base установлен корректно
  plugins: [react()],
  server: {
    historyApiFallback: true // Для корректной работы React Router
  },
  build: {
    outDir: "dist" // Убедись, что билд идёт в dist
  }
})
