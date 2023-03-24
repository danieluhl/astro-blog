import { visit } from "unist-util-visit";
// import { getValidLinkList } from "./linkGenerator";
const linkRegex = /(\.\.\/\d\d\d\d\/)?\d\d-\d\d-(.*?)(\.md)?$/gi;

const replacerFn = (match, p1, p2) => {
  console.log(`replacing ${match} with  ${p2}`);
  return `${p2}`;
};

export function remarkLinkFixer() {
  function transformer(tree) {
    visit(tree, "link", function(node) {
      node.url = node.url.replace(linkRegex, replacerFn);
    });
    // visit(tree, "text", function(node) {
    // console.log("**************************");
    // console.log(node.type);
    // console.log(node.value);
    // let wordCount = node.value.split(" ").length;
    // if (wordCount >= 4) {
    //   node.value = node.value.replace(/ ([^ ]*)$/, "\u00A0$1");
    // }
    // });
  }

  return transformer;
}
