import type { BlogFrontmatter } from "@content/_schemas";
import { slug as slugger } from "github-slugger";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: BlogFrontmatter) =>
  post.postSlug ? slugger(post.postSlug) : slugger(post.title);

export const slugifyAll = (arr: string[]) => arr.map((str) => slugifyStr(str));

export default slugify;
