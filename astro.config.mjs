import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import { remarkLinkFixer } from "./scripts/remarkPlugins/remarkLinkFixer.js";
// import { validatePostTags } from "./scripts/remarkPlugins/remarkTagValidator.js";
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
      // validatePostTags,
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
