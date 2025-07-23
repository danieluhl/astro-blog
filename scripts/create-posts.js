/*

Creates a file with heading stub for new blog post

e.g. `npm run post "Vim is so good"`

*/
const path = require("path");
const argv = require("minimist")(process.argv.slice(2));
const fs = require("fs");
const sanitize = require("sanitize-filename");

// give one or more titles and this will scaffold out files with title and date
//  example: node create-post.js "my new blog post"
//   creates 2021-04-29-my-new-blog-post.md with initial content
const POSTS_PATH = path.join(process.cwd(), "/src/content/blog/");

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();

function toTitleCase(str) {
  // always capitalize the first word
  str = capitalize(str);
  // capitalizes words longer than 4 letters
  return str.replace(/\w+\S*/g, (txt) =>
    txt.length > 3 ? capitalize(txt) : txt,
  );
}

function createPosts(title) {
  const today = new Date();
  const titleCaseTitle = toTitleCase(title);
  const filename = sanitize(title.split(" ").join("-").toLowerCase());
  const filePath = path.join(POSTS_PATH, `${filename}.md`);

  fs.appendFileSync(
    filePath,
    `---
title: ${titleCaseTitle}
pubDatetime: ${today.toISOString()}
description: ${titleCaseTitle}
tags: 
  - philosophy
  - management
  - productivity
  - programming
---
`,
  );
  return filePath;
}

const fileCreated = createPosts(argv._[0]);
console.log("Created file: ", fileCreated);
