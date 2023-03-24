import slugify from "./slugify.js"
import fs from "node:fs";
import path from "node:path";
import grayMatter from "gray-matter";

const CONTENT_PATH = "src/content/blog/"
const pwd = process.cwd();

const getAllBlogPaths = () => {
  const files = fs.readdirSync(path.join(pwd, CONTENT_PATH));
  const markdownFiles = files.filter(file => path.extname(file) === '.md')
  // set full path to file so we can pass directly to read
  return markdownFiles.map(file => path.join(pwd, CONTENT_PATH, file));
}

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
}

export { getAllPossibleSlugs };
