import { visit } from "unist-util-visit";
import { getAllPossibleSlugs } from "../linkGenerator.js";

const linkRegex = /(\.\.\/\d\d\d\d\/)?\d\d-\d\d-(.*?)(\.md)?$/gi;

const replacerFn = (match, p1, p2) => {
  console.log(`replacing ${match} with  ${p2}`);
  return `${p2}`;
};

export function remarkLinkFixer() {
  const allSlugs = getAllPossibleSlugs();
  function transformer(tree) {
    visit(tree, "link", (node) => {
      node.url = node.url.replace(linkRegex, replacerFn);
      if (
        !node.url.includes("chrome://") &&
        !node.url.includes("http") &&
        !allSlugs.has(node.url)
      ) {
        throw new Error(`Invalid url found: ${node.url}`);
      }
    });
  }

  return transformer;
}
