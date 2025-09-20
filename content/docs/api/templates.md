---
id: templates-partials-layouts
title: Partials & Layouts
---

Templates, partials, and layouts are all stored in one object (exposed as `Sqrl.templates`).

## Loading templates / partials / layouts

If you just call `render` or `compile` with `name` or `filename` in options, Squirrelly will load your template.

## Defining Partials

```js
Sqrl.templates.define("my-partial", Sqrl.compile("This is a partial speaking"));

Sqrl.render('... {{@include("my-partial")/}}', {});
// ... This is a partial speaking

// To call a partial w/ data:
Sqrl.templates.define("my-partial-2", Sqrl.compile("Name: {{it.name}}"));
Sqrl.render(
  '... {{@include("my-partial", {name: it.name})/}}',
  // The 2nd argument passed to `include` is the data. You could also pass `it` to forward all data
  { name: "Ben" }
);
// ... Name: Ben
```

## Layouts

See [https://stackblitz.com/edit/squirrelly-layouts?file=index.js](https://stackblitz.com/edit/squirrelly-layouts?file=index.js) for an example of how to use layouts.