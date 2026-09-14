import { visit } from "unist-util-visit";
import { getAllPossibleSlugs } from "../linkGenerator.js";

const linkRegex = /(\.\.\/\d\d\d\d\/)?\d\d-\d\d-(.*?)(\.md)?$/gi;

const replacerFn = (match, _p1, p2) => {
  console.log(`replacing ${match} with  ${p2}`);
  return `${p2}`;
};

const isExternalUrl = (url) =>
  url.includes("chrome://") || url.includes("http");

export function remarkLinkFixer() {
  const allSlugs = getAllPossibleSlugs();
  function transformer(tree) {
    visit(tree, "link", (node) => {
      node.url = node.url.replace(linkRegex, replacerFn);
      const slug = node.url.startsWith("/posts/")
        ? node.url.slice("/posts/".length)
        : node.url;
      if (
        !node.url.includes("chrome://") &&
        !node.url.includes("http") &&
        !allSlugs.has(slug)
      ) {
        throw new Error(`Invalid url found: ${node.url}`);
      }
      if (!isExternalUrl(node.url)) {
        node.url = `/posts/${node.url}`;
      }
    });
  }

  return transformer;
}
