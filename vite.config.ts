import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [
    viteSingleFile(),
    createHtmlPlugin({}),
  ],
  build: {
    cssCodeSplit: false,
    // assetsInlineLimit: 100000000,
  },
});
