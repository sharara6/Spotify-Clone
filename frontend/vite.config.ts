import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port:3000,
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: false,
  }
})
