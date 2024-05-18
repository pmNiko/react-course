import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@auth": path.resolve(__dirname, "./src/auth"),
      "@journal": path.resolve(__dirname, "./src/journal"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@theme": path.resolve(__dirname, "./src/theme"),
    },
  },
});
