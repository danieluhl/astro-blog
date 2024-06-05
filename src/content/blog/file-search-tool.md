---
title: File Search Tool
pubDatetime: 2021-04-29T12:13:24.000Z
description: File Search Tool
tags:
  - programming
---

# File Search Tool

I ran into a deep babel issue where file output was a problem under a specific set of circumstances:
the module was AMD and it included a class that extends `React.Component`. I didn't know how
pervasive the problem was in the codebase I was working in which a quick

`find . -type f | wc -l`

told me there was 42247 files.

So what I needed was to grep through all the files looking for a set of specific terms

```
['Component {', 'define(', 'class', 'React']
```

This may not be fool proof but would pretty much get me what I want. After a few minutes of poking
around, I figured I'd either need to write an extremely complex perl regex, or a full bash script.
As I'm not great at either of these and I was running short on time I decided to give a shot
throwing together a node script instead. And I was very pleased with how quickly I could get up a
result!

Here's exactly what I did:

```sh
mkcd search-terms-tool
```

mkcd is my alias to make a directory and go into it immediately: `mkcd () { mkdir "$1" && cd $_ }`

```sh
yarn init
yarn add fast-glob
```

We'll need fast-glob to find all the file paths easily. Optionally you can add `yargs` to read the
path to search from the command line. I was under time pressure so I just put it in the code
directly.

```sh
touch index.js
```

Open your editor of choice. Mine is vscode. Like I said above, first we need to get all the JS files
in the directory:

```javascript
const fg = require("fast-glob");

const SEARCH_DIR = "/path/to/code";
const paths = fg.sync(`${SEARCH_DIR}/**/*.js`);

console.log(paths);
```

Then run the code or fire up `nodemon` if you want things to auto run:

```sh
node index.js
```

You should see a huge list of files! This was basically one line of running code and we're half way
there. Now we just need to filter by those containing all the search terms. The easiest way I could
think of is to read the contents of each file using nodes build-in `fs`, then `.filter` by looking
at `.every` search term:

```javascript
const fs = require("fs");
const fg = require("fast-glob");

const searchTerms = ["Component {", "define(", "class", "React"];

const SEARCH_DIR = "/path/to/code";
const paths = fg.sync(`${SEARCH_DIR}/**/*.js`);

const validPaths = paths.filter(path => {
  const contents = fs.readFileSync(path);
  return searchTerms.every(term => {
    return contents.includes(term);
  });
});

console.log(validPaths);
```

And that's it! I was pretty floored by how quickly I could throw this together. And since I had some
extra time, I decided to make two upgrades: run the file reads in parallel, and write the results to
a file.

Simple enough - build a list of promises and run `Promise.all` to get the filtered results:

```javascript
const util = require("util");

const readFile = util.promisify(fs.readFile);

const readAndCheckFile = async path => {
  const contents = await readFile(path);
  return searchTerms.every(term => contents.includes(term));
};

const printResults = validPaths => fs.writeFileSync("./results.txt", validPaths.join("\n"));

Promise.all(paths.filter(readAndCheckFile)).catch(console.log).then(printResults);
```

The initial run I didn't have the `.catch` on the last line and the program blew up 😬

After adding the `.catch` I found a "too many files open" error. After a quick google search I found
`graceful-fs` which waits if it encounters an error. After simply changing the import it worked!
Here's the final program I went with:

```javascript
const fs = require("graceful-fs");
const fg = require("fast-glob");
const util = require("util");

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

// path to find files in (no trailing slash)
const SEARCH_DIR = "/path/to/code";

// order these by what will filter the most to least
const searchTerms = ["Component {", "define(", "class", "React"];

// find all the paths to files to look in
const paths = fg.sync(`${SEARCH_DIR}/**/*.js`);

const readAndCheckFile = async path => {
  const contents = await readFile(path);
  // check if all the terms are in the file contents
  return searchTerms.every(term => contents.includes(term));
};

const printResults = validPaths => fs.writeFileSync("./results.txt", validPaths.join("\n"));

Promise.all(paths.filter(path => readAndCheckFile(path)))
  .catch(err => console.log(err))
  .then(printResults)
  .then(() => console.log("SUCCESS!"));
```

For someone completely unfamiliar with node and the JS ecosystem this could have been a nightmare
and they probably would have figured out the bash regex path. If you know that path PLEASE let me
know! But I guess the lesson here is to not be afraid to use the tools you already know and love.
This helped me avoid a rabbit hole and I got my fix out on time.

Happy Coding!
