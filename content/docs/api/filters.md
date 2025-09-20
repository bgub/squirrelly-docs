---
id: filter-api
title: Filters API
---

Filters let you pass a value through functions.

## Examples

**Simple example**

```js
var myTemplate = "Hi, my name is {{it.name | reverse}}";

Sqrl.filters.define("reverse", function(str) {
  return s
    .split("")
    .reverse()
    .join("");
});

Sqrl.render(myTemplate, { name: "Ben" });
// Hi, my name is neB
```

**With filter parameters**

```js
var myTemplate = "{{it.bio | replace('apples', 'watermelons') }}";

Sqrl.filters.define("replace", function(str, search, replace) {
  return str.replace(search, replace);
});

Sqrl.render(myTemplate, { bio: "I like to eat apples" });
// I like to eat watermelons
```
