# Plan for Fixing Broken Internal Blog Links

This document outlines the steps for a Node.js script to find and repair broken internal links in blog posts. The issue arose after posts were moved into year-based subdirectories.

## Script Objective

The script will iterate through all Markdown blog posts, identify internal links that are missing the required year in their path (e.g., `../post-slug` instead of `../2021/post-slug`), and rewrite them to include the correct year.

---

## Execution Steps

### 1. Index All Blog Posts

- **Action:** The script will first need a complete map of every blog post's slug and its corresponding year.
- **Implementation:**
    - Use a glob pattern like `src/content/blog/**/*.md` to find all post files.
    - For each file path, extract the slug (the filename without `.md`) and the year (the name of the parent directory).
    - Store this information in a `Map` or a plain object for quick lookups.
    - **Example Map Entry:** `{'my-awesome-post': '2021'}`

### 2. Iterate Through Each Post

- **Action:** The script will process one file at a time to find and fix its links.
- **Implementation:**
    - Loop through the list of file paths gathered in Step 1.
    - For each file, read its entire content into memory as a string.

### 3. Find and Analyze Links

- **Action:** Within the content of each file, identify all potential internal links.
- **Implementation:**
    - Use a regular expression to find all Markdown links that point to other posts. The links typically follow these patterns:
        - `[Link Text](../post-slug)`
        - `[Link Text](/posts/post-slug)`
    - The regex should capture the URL part of the link.

### 4. Identify and Correct Broken Links

- **Action:** For each link found, determine if it's broken (missing the year) and, if so, construct the correct path.
- **Implementation:**
    - For each matched link URL:
        1.  **Extract the Slug:** Get the post slug from the end of the URL.
        2.  **Check if Broken:** A link is considered broken if it does *not* already contain a four-digit year folder in its path (e.g., `../2021/`).
        3.  **Skip Correct Links:** If the link path already contains a year, ignore it and move to the next.
        4.  **Look Up Year:** Use the extracted slug to look up its year from the index created in Step 1.
        5.  **Handle Not Found:** If the slug is not found in the index, log a warning (`WARNING: Slug "some-slug" in file "source.md" does not match any known post.`) and skip it.
        6.  **Construct New Link:** Create the new, corrected URL by inserting the year into the path (e.g., `../` + `year` + `/` + `slug`).
        7.  **Replace in Content:** Replace the old, broken link URL with the new, correct one in the file's content string.

### 5. Write Changes to Disk

- **Action:** After all links in a file have been checked and corrected, save the changes.
- **Implementation:**
    - Compare the original file content with the modified content.
    - If there are changes, overwrite the original file with the modified content.
    - If there are no changes, do nothing to avoid unnecessary file writes.

### 6. Logging and Reporting

- **Action:** Provide clear feedback about the script's execution.
- **Implementation:**
    - Log the file currently being processed.
    - Log every successful fix, showing the file, the old link, and the new link.
    - At the end, print a summary report (e.g., "Scanned 150 files. Found and fixed 42 links in 25 files.").
