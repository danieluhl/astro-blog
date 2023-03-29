---
title: Org Metrics vs Innersource
author: Daniel Uhl
pubDatetime: 2023-03-29T07:23:16-04:00
featured: false
tags:
  - teams
  - management
description: looking at a study about code quality and org structure
---

A recent study about [organizational
metrics](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-2008-11.pdf)
is pretty damning towards [innersource](https://innersourcecommons.org/) and
even open source projects.

The study concludes that in it's particular cases organizational metrics are
better predictors of code quality than code churn, code complexity,
dependencies, code coverage, or pre-release bugs.

Here are the organizational metrics it uses. Each of these implies LOWER
quality:

1. The more people who touch the code
2. The more people who touched the code and no longer work at
   the org
3. More edits to the code (churn)
4. More teams owning the code
5. Higher percent of org contributing to the code
6. Higher percent of non-owners contributing
7. Higher percent of non-owner team members making edits
8. Higher number of teams making edits

In summary, if you want good quality:

1. Have one small team own the code
2. Only that team makes edits
3. Reduce turnover or team changes
4. Reduce code churn

The predicted reasons behind this study are based around the problem of
communication in large organizations. Gaining alignment in code culture,
practices, bugs and feature decisions, code design decisions, etc. all are
easier for one small owning team and become exponentially (n(n-1)/2) more
complex as you add contributors.

## What about Innersource/opensource

I would love to see a study that shows effectiveness at mitigating these factors
on high quality open source projects or confirming replication across
open-source. My prediction is that there are two types of high quality successful open
source projects out there:

1. Well guarded projects that are owned by a small cohesive team
2. Extremely well documented and tested codebases with clear contribution guides
   and cohesive community with some democratic process of making changes

The first is something like backbone or underscore where basically one dictator
or small group runs the show. This is basically doing the same as the above
study in public.

The second is more interesting because I would predict that if studied, it could
be a path forward for successful innersource projects in large organizations.
Examples that come to mind are languages (TC39, Rust).

## Conclusion

My main take-away is that conways law is more important than ever. We need to be
very mindful about the organization of our code and the structure of our
organizations with focus on small autonomous teams. Where this is not possible I
think we can learn from open source - documentation, testing, developer
advocacy, working groups to spread culture, etc. all help to align contributors
and avoid low quality contributions.
