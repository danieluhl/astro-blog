// const linkRegex = /(\[[^\]]*?\])\((\.\.\/\d\d\d\d\/)?\d\d-\d\d-(.*?)(.md)?\)/gi;
const linkRegexHTML = /(href=\\")(\.\.\/\d\d\d\d\/)?\d\d-\d\d-(.*?)(\\")/gi;
const replacerFnHTML = (match, p1, p2, p3, p4) => {
  console.log(`replacing ${match} with  ${p1}${p3}${p4}`);
  return `${p1}${p3}${p4}`;
};
const fileRegex = /\.md/;

const linkFixerVitePlugin = () => {
  return {
    name: "link fixer vite transform",
    renderChunk(code, chunk, options, meta) {},
    transform(src, id) {
      // only act on markdown files
      if (fileRegex.test(id)) {
        const newCode = src.replaceAll(linkRegexHTML, replacerFnHTML);
        return { code: newCode };
      } else {
        // console.log("no replacements for file: " + id);
      }
    },
  };
};

export default function () {
  return {
    name: "link fixer vite plugin",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [linkFixerVitePlugin()],
          },
        });
      },
    },
  };
}
