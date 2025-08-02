---
title: Code Documentation Planning
pubDatetime: 2021-04-29T12:13:24.000Z
description: Code Documentation Planning
tags:
  - programming
---

# Code Documentation Planning

Recently I've been working to set the vision and strategy for documenting code in my large company
going forward. We've tried several different forms of code documentation in the past including
markdown collocated with code, an internal knowledge base, our company wide confluence website,
google docs, and a internal hosted mkdocs site. However, we have yet to hit the sweet spot where
teams are compelled to write and find good docs.

## A bit about why

Code documentation increases development speed by reducing the time to onboarding, reduce the time
of technology adoption, and reducing the need for conversations with experts. Documentation also
increases the accessibility of our technology by allowing engineers to digest information in their
own time and in their timezone without needing to talk to an expert. Psychological safety is
paramount, and documentation is critical to creating a safe, welcoming, and equitable environment
for all contributors to succeed.

## The Vision

Successful code documentation should be easy to write and predictable to find. We propose putting
documentation next to related code in simple markdown. This will lower the friction of tooling and
reduce cultural barriers by allowing engineers to write documentation without any special tooling
and minimal context switching.

### Features

Doc updates should automatically trigger a build of the docs site with predictable URL structure.
The minimal requirements for the site are search, navigation, and view metrics. This ensures a level
of findability and tracking of success.

### Future Features

Additionally, I have many ideas for ways a doc site can go from adequate to awesome:

- Permalinks
- Tagging (filtering by tag)
- Liking (show most popular, most viewed, and recently updated lists)
- MDX integration
- Auto-archival option
- Simple deprecation of document sections
- Documentation type templates (e.g. microservice API doc)
- Slack integration (weekly summary based on keywords)
- Content linter (e.g. abrasive / inclusive language warnings)
- Diagram plugin

## Summary

Documentation is important for accessibility and can be a huge time and money saver. Documentation
must be easy to write, find, and read. We don't need perfect documentation with all the bells and
whistles, start with a baseline and iterate.

## Sources

I learned a ton from the [Write the Docs](https://www.writethedocs.org/) community.

I recently learned that [instructional design](https://www.reddit.com/r/instructionaldesign/) also
has a community of support.
