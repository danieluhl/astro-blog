import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "Daniel Uhl",
  desc: "All things coding, philosophy, and lifestyle",
  title: "luculent lollygag",
  ogImage: "reyan-couch-hair.png",
  lightAndDarkMode: true,
  postPerPage: 50,
};

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/danieluhl/astro-blog",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/danieluhl/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:danielruhl@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/danieluhl",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/typing_turtle",
    linkTitle: `${SITE.title} on Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@typingturtle5155/featured",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Podcast",
    href: "https://podcasts.apple.com/gb/podcast/luculent-lollygag/id1608573971",
    linkTitle: `listen to the ${SITE.title} Podcast`,
    active: true,
  },
];
