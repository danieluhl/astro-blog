import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { remarkLinkFixer } from "./scripts/remarkPlugins/remarkLinkFixer.js";
// import remarkValidateLinks from "remark-validate-links";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.reyan.me",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkLinkFixer,
      remarkToc,
      [remarkCollapse, { test: "Table of Contents" }],
      // [remarkValidateLinks, { root: "src/content/blog" }],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
