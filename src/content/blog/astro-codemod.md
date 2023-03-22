---
title: Astro Codemod
pubDatetime: 2023-03-21
description: Two ways to modify code as astro builds
---

I moved my Next.js markdown based blog to Astro recently and had to fix the
links. My takeaway here is that it really says something that working with Astro
is mostly working with other things that Astro uses. This is a trend in the
community I love to see - less building reusable components, more using existing
reusable components.

My old Next.js blog had links like this:

```markdown
[Friday Nights](friday-nights)
```

In the astro template I'm using here it needs to be the slug:

```markdown
[Friday Nights](friday-nights)
```

I could write a fancy codemod or regex to do it once, but I wanted to learn how
to modify code on the way out with Astro.

I found two ways that work.

## 1. Astro Integration

This got real wonky real fast. For Astro mods you make a Vite transform which is
a pass-through to rollup. So... learn all of that first I guess?

My main issue with this method is that at this point the file is nothing like
the original file. Vite plugins run after the file has been parsed up by the
markdown plugins so I had to write my regex to replace the link in the html, not
in the original markdown.

Maybe there's a more idiomatic way to parse the file in the rollup function to
do updates but it just felt like we were running far too late in the build
process.

Here's what it looked like when I got it working:

`./scripts/linkFixerIntegration.mjs`

```javascript
const linkRegexHTML = /(href=\\")(\.\.\/\d\d\d\d\/)?\d\d-\d\d-(.*?)(\\\")/gi;
const replacerFnHTML = (match, p1, p2, p3, p4) => {
  console.log(`replacing ${match} with  ${p1}${p3}${p4}`);
  return `${p1}${p3}${p4}`;
};
const markdownFile = /\.md/;

const linkFixerVitePlugin = () => {
  return {
    name: "link fixer vite transform",
    transform(src, id) {
      // only act on markdown files
      if (markdownFile.test(id)) {
        const newCode = src.replaceAll(linkRegexHTML, replacerFnHTML);
        return { code: newCode };
      }
    },
  };
};

export default function () {
  return {
    name: "link fixer vite plugin",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [linkFixerVitePlugin()],
          },
        });
      },
    },
  };
}
```

`astro.config.mjs` add the `linkFixerIntegration`

```javascript #8,13
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";

import linkFixerIntegration from "./scripts/linkFixerIntegration.mjs";

export default defineConfig({
  site: "https://blog.reyan.me",
  integrations: [
    linkFixerIntegration(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of Contents" }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
```

## 2. Remark Plugin (for markdown only)

This seems more like what we want when editing markdown on the way out.

Here's the remark plugin:

`./scripts/remarkLinkFixer.mjs`

```javascript
import { visit } from "unist-util-visit";
const linkRegex = /(\.\.\/\d\d\d\d\/)?\d\d-\d\d-(.*?)(\.md)?$/gi;

const replacerFn = (match, p1, p2) => {
  console.log(`replacing ${match} with  ${p2}`);
  return `${p2}`;
};

export function remarkLinkFixer() {
  function transformer(tree) {
    visit(tree, "link", function (node) {
      node.url = node.url.replace(linkRegex, replacerFn);
    });
  }

  return transformer;
}
```

And similar updates to the `astro.config.mjs` for `remarkLinkFixer`

```javascript #7,23
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { remarkLinkFixer } from "./scripts/remarkLinkFixer.mjs";

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
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
```

Targeting the links in markdown certainly feels much better but the rollup way
is more versatile for parsing other types of files or doing other customizations
on the way out.
