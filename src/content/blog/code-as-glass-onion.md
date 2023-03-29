---
title: Glass Onion Codebase
pubDatetime: 2023-01-03T12:13:24.000Z
description: Glass Onion Codebase
tags:
  - programming
---

> "I like the glass onion, as a metaphor. An object that seems densely layered,
> but in reality, the centre is in plain sight."

- Benoit Blanc, The Glass Onion 2022

One of the most important concepts in code is picking the right abstraction.
Test first development from a user behavior perspective helps us get to the
right abstraction sooner.

Over time, the API surface area of any abstraction may increase, purpose can
shift, and we can go from transparency, to muddy.

Keeping the glass onion in mind is helpful to remember that while we strive to
make abstractions to gain efficiencies in maintenance, reliability, and accurage
representation of the domain model, we must also ensure that these benefits are
not overshadowed by obfuscation.

A good glass onion codebase lets engineers "see through" the abstraction to
quickly understand what's happening underneith without having to dig through
obscure tangles of code.

Good typing, good naming, good file structure, and frequent refactoring to fit a
ubiquitous language and domain model are all great for creating a glass onion
codebase.
