import * as path from "path";
import * as fs from "fs-extra";
import matter from "gray-matter";

// The directory where your markdown files are located.
// Change this to the path you want to process.
const rootDirectory = "./src/content/blog";

async function processFile(filePath: string) {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Parse the frontmatter and content
    const { data } = matter(fileContent);

    // Check if the frontmatter has a 'pubDatetime' field
    if (data.pubDatetime) {
      // The Date constructor can directly parse the ISO 8601 string
      const pubDate = new Date(data.pubDatetime);

      // Check for an invalid date
      if (isNaN(pubDate.getTime())) {
        console.warn(`Warning: Invalid date in file: ${filePath}`);
        return;
      }

      // Get the month and day, and format them with leading zeros
      // .getMonth() is zero-based, so we add 1
      const month = String(pubDate.getMonth() + 1).padStart(2, "0");
      const day = String(pubDate.getDate()).padStart(2, "0");
      const formattedDate = `${month}-${day}`;

      // Get the original file name and extension
      const originalDir = path.dirname(filePath);
      const originalFileName = path.basename(filePath, path.extname(filePath));
      const fileExt = path.extname(filePath);

      // Create the new file name by prepending the formatted date
      const newFileName = `${formattedDate}-${originalFileName}${fileExt}`;
      const newFilePath = path.join(originalDir, newFileName);

      // Check if the file name is already in the correct format to avoid renaming twice.
      // We'll check for "MM-DD-" at the start of the filename.
      if (!originalFileName.startsWith(formattedDate + "-")) {
        console.log(`Renaming: ${filePath} -> ${newFilePath}`);
        await fs.rename(filePath, newFilePath);
      } else {
        console.log(`Skipping: ${filePath} (already formatted)`);
      }
    } else {
      console.log(`Skipping: ${filePath} (no 'pubDatetime' frontmatter)`);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

async function processDirectory(dirPath: string) {
  try {
    const files = await fs.readdir(dirPath, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dirPath, file.name);

      if (file.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(fullPath);
      } else if (file.isFile() && file.name.endsWith(".md")) {
        // Process only markdown files
        await processFile(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dirPath}:`, err);
  }
}

// Start the script
console.log(`Starting file renaming process in '${rootDirectory}'...`);
processDirectory(rootDirectory)
  .then(() => {
    console.log("Script finished successfully!");
  })
  .catch((err) => {
    console.error("An unexpected error occurred:", err);
  });
