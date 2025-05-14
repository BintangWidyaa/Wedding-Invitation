import { defineConfig } from "vite";

export default defineConfig({
  base: "/bintang-widya/", // <-- HARUS ADA ini
  publicDir: "public",
  root: "./",
  build: {
    outDir: "dist",
  },
});
