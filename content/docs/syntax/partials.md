---
id: partials-layouts
title: Partials and Template Inheritance
---

## Partials

Partials are implemented behind-the-scenes as [native helpers](../api/native-helper-api), and the syntax is the same as a [self-closing helper](helpers#self-closing-helpers).

There are 2 types of partials: **registered partials** and **file partials**.

### Registered Partials

Registered partials work both in the browser and in Node.js. They must first be "registered", or defined, using `Sqrl.templates.define(...)`

**Syntax**

```
{{@include('mypartial', data) /}}
```

**Example**

Note that in this example we pass `it` as the data object to the partial. This allows it to access the data the template is called with.

```js
let mypartial = `My name is {{it.name}}`

Sqrl.templates.define('mypartial', Sqrl.compile(mypartial))

Sqrl.render("This is a partial: {{@include('mypartial', it) /}}", {
  name: 'Ben',
})

// This is a partial: My name is Ben
```

### File Partials

File partials work only in Node.js. They do not have to be defined first.

**Syntax**

```
{{@includeFile('path-to-partial', data) /}}
```

**Example**

Note that in this example we pass `it` as the data object to the partial. This allows it to access the data the template is called with.

```handlebars
{{! /* src/partial.sqrl */}}
This is a partial speaking: "My name is {{it.name}}"
```

```js
// src/index.js
Sqrl.render("{{@includeFile('./partial', it) /}}", {
  name: 'Ben',
})

// This is a partial speaking: "My name is {{it.name}}"
```
