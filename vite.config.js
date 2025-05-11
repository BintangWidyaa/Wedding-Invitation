import { defineConfig } from "vite";

export default defineConfig({
  base: "/Wedding-Invitation/", // <-- HARUS ADA ini
  resolve: {
    alias: {
      "@fortawesome": path.resolve(__dirname, "node_modules/@fortawesome"),
    },
  },
  publicDir: "public",
  root: "./",
  build: {
    outDir: "dist",
  },
});
