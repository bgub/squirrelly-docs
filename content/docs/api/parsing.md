---
id: parsing
title: Parsing
---

:::note
    
You won't need to use or understand Parsing unless you're writing native helpers or plugins.

:::

## Syntax

[TypeDoc doc page](https://squirrellyjs.github.io/squirrelly/modules/_parse_.html#parse)

## Examples

```js
var myTemplate = 'Hi, my name is {{it.name}}'
var compiled = Sqrl.parse(myTemplate)
//Returns a Squirrelly syntax tree (like an AST):

// ['Hi, my name is ', { f: [], c: 'it.name', t: 'r' }]

```
