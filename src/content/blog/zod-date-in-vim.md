---
title: Zod Date in VIM
author: Daniel Uhl
pubDatetime: 2023-03-21T10:15:40-04:00
tags:
  - vim
  - bash
description: How I made a VIM binding that inserts a zod valid date
---

I made a VIM keybinding that inserts a valid zod datetime.

This blog uses metadata for the published date time validated by a zod schema:

```typescript
import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
```

An example of the pubDatetime is this:

```markdown
pubDatetime: 2023-03-21T10:05:48-04:00
```

This would be incredibly painful to type out by hand so I set about to find a
nice way to insert this with a VIM keymap.

First, we need sane date logic from the command line. I'm on MacOS so need to
install coreutils:

```bash
brew install coreutils
```

Check out the awesome date stuff we get in [the coreutils docs](https://www.gnu.org/software/coreutils/manual/coreutils.html#date-invocation)!

After installed you can prefix bash commands with `g` to get the good stuff.

We could get fancy with all the formatting, but what we really want is the ISO
string:

```bash
gdate --iso-8601=seconds
```

This date passes our zod validation so now we just need to wire it up to a VIM
mapping:

```lua
["<leader>pd"] = "g:r!gdate --iso-8601=seconds<cr>"
```
