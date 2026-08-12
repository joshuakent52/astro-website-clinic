// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the site's real production URL once known.
  // Required for the sitemap and for absolute canonical/OG URLs.
  site: "https://example.com",

  output: "static",

  integrations: [sitemap()],
});
