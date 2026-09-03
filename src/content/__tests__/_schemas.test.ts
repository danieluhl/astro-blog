import { describe, expect, it } from "vitest";
import { blogSchema } from "../_schemas";

describe("blogSchema", () => {
  const validFrontmatter = {
    pubDatetime: new Date(),
    title: "Test Post",
    tags: ["productivity"],
    description: "A test post description",
    author: "Jane",
    postSlug: "test-post",
    featured: true,
    draft: false,
    ogImage: "/images/test.png",
  };

  it("accepts basic frontmatter", () => {
    const result = blogSchema.safeParse(validFrontmatter);
    expect(result.success).toBe(true);
  });

  it("accepts multiple tags", () => {
    const result = blogSchema.safeParse({
      ...validFrontmatter,
      tags: ["productivity", "programming", "joy"],
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing required fields", () => {
    const result = blogSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it("rejects invalid tags", () => {
    const result = blogSchema.safeParse({
      ...validFrontmatter,
      tags: ["invalid-tag"],
    });
    expect(result.error?.issues[0].message).toBe("Invalid tags: invalid-tag");
    expect(result.success).toBe(false);
  });

  it("accepts empty tags array", () => {
    const result = blogSchema.safeParse({
      ...validFrontmatter,
      tags: [],
    });
    expect(result.success).toBe(true);
  });

  it("rejects unknown fields (strict mode)", () => {
    const result = blogSchema.safeParse({
      ...validFrontmatter,
      unknownField: "oops",
    });
    expect(result.success).toBe(false);
  });

  it("rejects non-date pubDatetime", () => {
    const result = blogSchema.safeParse({
      ...validFrontmatter,
      pubDatetime: "not-a-date",
    });
    expect(result.success).toBe(false);
  });
});
