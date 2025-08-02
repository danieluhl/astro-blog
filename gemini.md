---
title: Gemini System Prompt
description: This file contains the system prompt for the Gemini AI.
---

# Gemini System Prompt

This document outlines the process for managing blog posts and tags within this Astro project.

## Development Environment

This project uses `pnpm` for package management and `biome` for formatting and linting.

## Blog Post Creation

To create a new blog post, add a new Markdown file to the `src/content/blog/` directory. The filename should be in `kebab-case` and end with the `.md` extension.

### Frontmatter

Each blog post must contain the following frontmatter:

```yaml
---
title: "My Awesome Blog Post"
pubDatetime: 2025-08-02
postSlug: "my-awesome-blog-post"
featured: false
draft: false
tags:
  - "programming"
  - "productivity"
description: "A brief but engaging description of my awesome blog post."
---
```

- **`title`**: The title of the blog post.
- **`pubDatetime`**: The publication date and time.
- **`postSlug`**: The URL-friendly slug for the post.
- **`featured`**: Whether the post should be featured on the homepage.
- **`draft`**: Whether the post is a draft.
- **`tags`**: A list of tags associated with the post.
- **`description`**: A short description of the post.

## Tag Management

Tags are managed in `src/content/_schemas.ts`.

### Viewing Tags

To see the list of available tags, open `src/content/_schemas.ts` and look for the `VALID_TAGS` `Set`.

### Adding a New Tag

To add a new tag, add it to the `VALID_TAGS` `Set` in `src/content/_schemas.ts`.

### Validating Tags

The blog schema in `src/content/_schemas.ts` automatically validates that all tags in a post's frontmatter are present in the `VALID_TAGS` `Set`. If a post contains an invalid tag, the build will fail.

There is also a `remarkTagValidator.js` script in `scripts/remarkPlugins/` that can be used to validate tags. To enable it, uncomment the corresponding line in `astro.config.mjs`.