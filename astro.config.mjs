import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import rehypeMyNotation from "./src/plugins/rehypeMyNotation";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.tsum.ug",
  integrations: [mdx(), sitemap(), react()],
  vite: { optimizeDeps: { exclude: ["@resvg/resvg-js", "fs"] } },
  markdown: {
    rehypePlugins: [[rehypeMyNotation, {}]],
  },
});
