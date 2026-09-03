import { describe, expect, it, vi } from "vitest";

vi.mock("unist-util-visit", () => ({
  visit(tree, typeOrCallback, maybeCallback) {
    const typeFilter =
      typeof typeOrCallback === "string" ? typeOrCallback : null;
    const callback =
      typeof typeOrCallback === "function" ? typeOrCallback : maybeCallback;

    function walk(node) {
      if (node.children) {
        for (const child of node.children) {
          if (!typeFilter || child.type === typeFilter) {
            callback(child);
          }
          walk(child);
        }
      }
    }
    walk(tree);
  },
}));

vi.mock("../../linkGenerator.js", () => ({
  getAllPossibleSlugs() {
    return new Set([
      "what-makes-a-great-engineer",
      "my-cool-post",
      "participation-is-mandatory",
    ]);
  },
}));

import { remarkLinkFixer } from "../remarkLinkFixer.js";

describe("remarkLinkFixer", () => {
  it("transforms date-prefixed link to clean slug", () => {
    const tree = {
      children: [{ type: "link", url: "09-08-what-makes-a-great-engineer" }],
    };
    const transform = remarkLinkFixer();
    transform(tree);
    expect(tree.children[0].url).toBe("what-makes-a-great-engineer");
  });

  it("strips .md extension from link", () => {
    const tree = {
      children: [{ type: "link", url: "09-08-what-makes-a-great-engineer.md" }],
    };
    const transform = remarkLinkFixer();
    transform(tree);
    expect(tree.children[0].url).toBe("what-makes-a-great-engineer");
  });

  it("strips relative path with year prefix", () => {
    const tree = {
      children: [
        {
          type: "link",
          url: "../2021/09-08-what-makes-a-great-engineer",
        },
      ],
    };
    const transform = remarkLinkFixer();
    transform(tree);
    expect(tree.children[0].url).toBe("what-makes-a-great-engineer");
  });

  it("strips relative path with year prefix and .md extension", () => {
    const tree = {
      children: [
        {
          type: "link",
          url: "../2021/09-08-what-makes-a-great-engineer.md",
        },
      ],
    };
    const transform = remarkLinkFixer();
    transform(tree);
    expect(tree.children[0].url).toBe("what-makes-a-great-engineer");
  });

  it("leaves external http links unchanged", () => {
    const tree = {
      children: [{ type: "link", url: "https://example.com" }],
    };
    const transform = remarkLinkFixer();
    transform(tree);
    expect(tree.children[0].url).toBe("https://example.com");
  });

  it("leaves chrome:// links unchanged", () => {
    const tree = {
      children: [{ type: "link", url: "chrome://settings" }],
    };
    const transform = remarkLinkFixer();
    transform(tree);
    expect(tree.children[0].url).toBe("chrome://settings");
  });

  it("does not transform already-clean slugs", () => {
    const tree = {
      children: [{ type: "link", url: "what-makes-a-great-engineer" }],
    };
    const transform = remarkLinkFixer();
    transform(tree);
    expect(tree.children[0].url).toBe("what-makes-a-great-engineer");
  });

  it("validates that internal links point to existing slugs", () => {
    const tree = {
      children: [{ type: "link", url: "my-cool-post" }],
    };
    const transform = remarkLinkFixer();
    expect(() => transform(tree)).not.toThrow();
  });

  it("throws for invalid internal links", () => {
    const tree = {
      children: [{ type: "link", url: "nonexistent-post" }],
    };
    const transform = remarkLinkFixer();
    expect(() => transform(tree)).toThrow(
      "Invalid url found: nonexistent-post",
    );
  });

  it("processes multiple links in the same tree", () => {
    const tree = {
      children: [
        { type: "link", url: "09-08-what-makes-a-great-engineer" },
        { type: "link", url: "https://example.com" },
        { type: "link", url: "04-15-participation-is-mandatory.md" },
      ],
    };
    const transform = remarkLinkFixer();
    transform(tree);
    expect(tree.children[0].url).toBe("what-makes-a-great-engineer");
    expect(tree.children[1].url).toBe("https://example.com");
    expect(tree.children[2].url).toBe("participation-is-mandatory");
  });

  it("skips non-link nodes", () => {
    const tree = {
      children: [
        { type: "paragraph", children: [{ type: "text", value: "hello" }] },
        { type: "link", url: "09-08-what-makes-a-great-engineer" },
      ],
    };
    const transform = remarkLinkFixer();
    transform(tree);
    expect(tree.children[0].children[0].value).toBe("hello");
    expect(tree.children[1].url).toBe("what-makes-a-great-engineer");
  });
});
