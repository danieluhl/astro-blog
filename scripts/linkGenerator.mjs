import slugify from "./slugify.js"
import { promises as fs } from "node:fs";
import path from "node:path";

const CONTENT_PATH = "../src/content/blog/"

const getValidLinkList = () => {
  console.log('hello');
  // refresh links by going through blog content
  //  calling slugifyer on the markdown metadata
  // get links from validLinks.json
  return "";
};

getValidLinkList();

export { getValidLinkList };
