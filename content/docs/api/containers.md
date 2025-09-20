---
id: containers
title: Containers
---

Templates, filters, helpers, and native helpers are all stored in storage objects (internally exposed as `Cacher`) with a similar syntax.

## Syntax

[TypeDoc doc page](https://squirrellyjs.github.io/squirrelly/classes/_storage_.cacher.html)

## TL;DR

To get a cache item, call `[cache].get('name')`. To define a cache item, run `[cache].define('name', value)`. To load an entire cache object, run `[cache].load(cacheObj)`. To reset a cache, run `[cache].clear()`.

## Examples

```js
Sqrl.templates.define("my-partial", Sqrl.compile("This is a partial speaking"));

console.log(Sqrl.templates.get("my-partial"));

Sqrl.filters.define("capitalize", function(str) {
  return str.toUpperCase();
});

Sqrl.filters.clear();
```
