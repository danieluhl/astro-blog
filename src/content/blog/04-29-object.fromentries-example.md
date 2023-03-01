---
title: Object.fromEntries Example
pubDatetime: 2021-04-29T12:13:24.000Z
description: Object.fromEntries Example
---

# Object.fromEntries Example

Wanted to share a quick code snippet I ran into:

```
function without(object, keys) {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !keys.includes(key))
  );
}
```

`Object.fromEntries` ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)) as you'd expect creates an object from a list (any iterable not just array) of entries.

You can think of it like the inverse of `Object.entries`.

In this case we're using the `without` function to reduce an object to only the list of keys/values we want.
