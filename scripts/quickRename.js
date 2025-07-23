const path = require("path");
const fs = require("fs");

const oldFileRegex = /^\d\d-\d\d-/;
const ROOT = "/Users/danieluhl/git/astro-blog/src/content/blog";

function main() {
  const files = fs.readdirSync(
    "/Users/danieluhl/git/astro-blog/src/content/blog",
  );
  files.forEach((file) => {
    if (oldFileRegex.test(file)) {
      console.log(file);
      console.log(file.replace(oldFileRegex, ""));
      fs.renameSync(
        path.join(ROOT, file),
        path.join(ROOT, file.replace(oldFileRegex, "")),
      );
    }
  });
}

main();
