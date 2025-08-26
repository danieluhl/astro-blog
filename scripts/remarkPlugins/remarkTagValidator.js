import fs from "fs";
import grayMatter from "gray-matter";
import path from "path";

const VALID_TAGS = new Set([
  "productivity",
  "management",
  "philosophy",
  "programming",
  "upkeep",
]);

function getAllMarkdownFiles(root) {
  const postsDirectory = path.join(process.cwd(), root);
  const entries = fs.readdirSync(postsDirectory);

  return entries
    .filter((file) => {
      return path.extname(file) === ".md";
    })
    .map((file) => path.join(postsDirectory, file));
}

export function validatePostTags() {
  const root = "/src/content/blog/";
  const paths = getAllMarkdownFiles(root);
  const invalidTags = [];
  paths.forEach((path) => {
    const fileContents = fs.readFileSync(path);
    const fileTags = grayMatter(String(fileContents)).data.tags;
    if (fileTags) {
      fileTags.forEach((tag) => {
        if (!VALID_TAGS.has(tag)) {
          invalidTags.push([tag, path]);
        }
      });
    }
  });
  if (invalidTags.length > 0) {
    console.error("Invalid Tags Found: ", invalidTags);
  }
}
