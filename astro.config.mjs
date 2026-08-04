// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Used for canonical URLs, Open Graph tags, and the sitemap.
  site: "https://brandonhowe.me",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
});
