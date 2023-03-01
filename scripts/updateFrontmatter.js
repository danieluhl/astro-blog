const fs = require("fs");
const grayMatter = require("gray-matter");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2));

// writeFn takes existing frontmatter and
//  returns the new frontmatter object
function updateFrontmatter(path, writeFn) {
  const fileContents = fs.readFileSync(path);
  const fileMatter = grayMatter(String(fileContents));
  const data = grayMatter.stringify(fileMatter.content, {
    ...writeFn(fileMatter.data),
  });
  console.log(`updating ${path}`);
  fs.writeFile(path, data, err => {
    if (err) {
      throw new Error(err);
    }
  });
}

const addTitleWriter = frontmatter => {
  return { ...frontmatter, description: frontmatter.title || "none" };
};

function getAllMarkdownFiles(root) {
  const postsDirectory = path.join(process.cwd(), root);
  const entries = fs.readdirSync(postsDirectory);

  return entries
    .filter(file => {
      return path.extname(file) === ".md";
    })
    .map(file => path.join(postsDirectory, file));
}

async function main(root) {
  const paths = await getAllMarkdownFiles(root);
  paths.forEach(path => {
    updateFrontmatter(path, addTitleWriter);
  });
}

main(argv._[0]);
