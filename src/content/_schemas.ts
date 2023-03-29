import { z } from "astro:content";

const VALID_TAGS = new Set([
  "productivity",
  "management",
  "philosophy",
  "programming",
  "upkeep",
  "joy",
  "other",
]);

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z
      .array(z.string())
      .default(["other"])
      .refine(
        arr => {
          return arr.every(str => VALID_TAGS.has(str));
        },
        arr => {
          const invalid = arr.filter(str => !VALID_TAGS.has(str));
          return { message: `Invalid tags: ${invalid}` };
        }
      ),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
