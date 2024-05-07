import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@heroes": path.resolve(__dirname, "./src/heroes"),
      "@auth": path.resolve(__dirname, "./src/auth"),
      "@ui": path.resolve(__dirname, "./src/ui"),
    }
  }
})
