---
id: first-template
title: Your First Template
---

## Install Squirrelly

See [Install](install) to learn how.

In this guide, we'll assume that Squirrelly is stored in a variable called `Sqrl`.

## Create a Template

This is just a regular string.

```js
var myTemplate = 'My favorite template engine is {{it.favorite}}.'
```

## Define Data

```js
var data = {
  favorite: 'Squirrelly'
}
```

## Render!

```js
var result = Sqrl.render(myTemplate, data)
// My favorite template engine is Squirrelly.
```

## Try Different Data

```js
var result2 = Sqrl.render(myTemplate, {
  favorite: 'Squirrelly, definitely'
})
// My favorite template engine is Squirrelly, definitely.
```

## Full Code

```js
var myTemplate = 'My favorite template engine is {{it.favorite}}.'

var result = Sqrl.render(myTemplate, {
  favorite: 'Squirrelly, definitely'
})
```
