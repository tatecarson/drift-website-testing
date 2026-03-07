import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tatecarson.github.io",
  base: "/drift-website-testing",
  server: {
    host: true,
    port: 4173
  }
});
