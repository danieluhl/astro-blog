import fs from "node:fs";
import path from "node:path";
import grayMatter from "gray-matter";
import slugify from "./slugify.js";

const CONTENT_PATH = "src/content/blog/";
const pwd = process.cwd();

const getAllBlogPaths = () => {
  const walk = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        fileList = walk(filePath, fileList);
      } else if (path.extname(file) === ".md") {
        fileList.push(filePath);
      }
    });
    return fileList;
  };
  return walk(path.join(pwd, CONTENT_PATH));
};

let allSlugs = null;

const getAllPossibleSlugs = () => {
  if (allSlugs) {
    return allSlugs;
  }
  const filePaths = getAllBlogPaths();
  // refresh links by going through blog content
  const slugSet = filePaths.reduce((slugs, file) => {
    const frontmatter = getFrontmatter(file);
    const slug = slugify(frontmatter);
    if (slugs.has(slug)) {
      throw new Error(`duplicate slug: ${slug}`);
    }
    slugs.add(slug);
    return slugs;
  }, new Set());
  //  calling slugifyer on the markdown metadata
  // get links from validLinks.json
  allSlugs = slugSet;
  return slugSet;
};

const getFrontmatter = (path) => {
  const fileContents = fs.readFileSync(path);
  const fileMatter = grayMatter(String(fileContents));
  return fileMatter.data;
};

export { getAllPossibleSlugs };
