import { defineConfig } from "vite";

export default defineConfig({
  base: "/Wedding-Invitation/", // <-- HARUS ADA ini
  publicDir: "public",
  root: "./",
  build: {
    outDir: "dist",
  },
});
