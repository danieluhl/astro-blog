---
title: Forem At Wayfair
pubDatetime: 2021-04-29T12:13:24.000Z
description: Forem At Wayfair
tags:
  - programming
---

# Forem at Wayfair

Forem powers this site (dev.to) which I've loved for a little over a year now. I'm writing this at the precipice of diving into an evaluation of forem for community building at Wayfair. This is my first take at comparing against our current tooling and strategy and talking through where I think forem can shine for large companies.

## Similar Tooling

**Confluence (infoHub)**

Pros: good support, tons of plugins, reasonable WYSIWYG

Good for: storing unchanging knowledge articles for smaller teams

Cons: search and navigation don't scale without strict curation, no notifications/subscriptions for people, topics, or tags, clunky permissions and file naming

Forem and confluence share many features: pages, comments, search, navigation, tons of integrations and plugins. However, at its heart, confluence is a knowledge base centered around information, not community (people).

Confluence lacks notifications/subscriptions (to tags and people), easy cross-linking, conversation threads and it's difficult in confluence to see how articles are related across the org. Permissions are clunky, page names need to be unique, and over time so much stale and relevant content has mixed that the search has become increasingly less useful. The nested file structure is nice and many of the summary plugins are neat. But this navigation style fails to scale and without useful navigation or search a lot of useful information is simply lost.

Forem shines by focusing on people. I can follow top engineers or topics to say in the loop. Each user is empowered to own their writing with the knowledge that if someone else is interested they will find the content. It relates information across the org with tags that are easy to filter and navigate.

**Google Docs**

Pros: collaborative editing, commenting/threads, org folders, good permissions, good support, beautiful clean UI and shortcuts, gsuite integration, plugins and developer community, history feature

Good for: collaborating on a proposal, storing private notes and data, RFCs, rich formatted documents

Cons: very private by default, no tagging, limited search (permissions), no subscriptions to people or topics

Google docs is a game changer especially given the game they're changing is microsoft office suite. I sincerely hope I never have to touch a word doc again other than to import and convert to google docs. However, google docs is fundamentally about sharing content not being social. It's great for collaborating closely on creating content, not so good at having a conversation about the content. It lacks subscriptions and organization by default and you can't easily write a reply to a doc.

Forem is less about replacing google docs than being the final resting place for content created in google docs. I could see myself collaborating on an google doc with a co-worker. Sending it out as an RFC to get feedback. Then posting it on forem for the world to see and discuss.

**Slack**

Pros: real-time but not in-person, awesome interface, subscribe to keywords, channels and threads, great search, hyper collaborative, tons of emojis 🙂

Cons: channel overload, messages and threads get lost, questions get asked over and over, real-time nature is not conducive for deep thought/articles, can't follow people, not true async

At Wayfair, Slack is a big reason we don't have Stack Overflow. We have the luxury of having experts for almost every part of our systems who can answer a question when asked in a channel. The difficulty is in finding the right person/channel, validating that the questions was not already asked, and still risking asking a repetitive question because messages expire. You can get notifications on keywords and this is awesome, but you can't follow topics or people and keywords only work for channels you're in. Plus keywords often are not treat the same as tags.

Slack is another tool I couldn't live without. Forem complements slack well by providing a more permanent and long-form place for content. I could see myself answering many slack questions with a link to a forem article.

**Documentation Sites**

Many teams at Wayfair spin up their own documentation sites. Often tied to code as github pages, but also for team, system documentation, onboarding, and blogs.

Pros: Great for custom code/components, can have generated documentation, code docs live with the code in github in markdown,

Cons: Engineer centric, difficult to find, search is often not a weak point, no search across multiple sites, read-only: no conversation, no notifications, often stale content, abandoned sites when teams shift/move ownership

This is where I think forem could replace much of our team docs and blogs for engineers. Half-way at least: code documentation should live with the code in github so that we're good about keeping it up to date as we change code. However, team docs, blogs, onboarding guides, and large project docs need a better place where discussion can happen, search is excellent, and people can be notified of updates and news.

**Email**

Pros: it can transfer communication, fully async

Cons: hard to search and filter, difficult to have discussions, difficult to collaborate, the list goes on...

## People First

Forem fundamentally puts people first and brings a social aspect to articles, blogs, and documentation. Even for a private platform, in a way it's more open and expressive than any other form of communication we currently have.

## What's Next

We're going to give it a shot! My fears are that people will see it as "yet another place" for information and have a bit of tooling fatigue. But I hope it quickly becomes obvious the difference in role that a tool like this would play and the tremendous benefits to health
