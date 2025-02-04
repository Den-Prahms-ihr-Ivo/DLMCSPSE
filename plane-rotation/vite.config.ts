import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
    },
  },
  server: {
    host: true,
    port: 3137,
  },
});
