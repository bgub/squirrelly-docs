---
id: compilation
title: Compilation
---

## `Sqrl.compile`

Compiles a string into a template function.
[TypeDoc doc page](https://squirrellyjs.github.io/squirrelly/modules/_compile_.html#compile)

**Syntax**

```js
Sqrl.compile (str, options)
// returns a function that can be called with (data, options, [cb])
// note: options must be a valid config object
```
See the page on [options](./configuration)

**Example**

```js
var myTemplate = "Hi, my name is {{it.name}}";
var compiled = Sqrl.compile(myTemplate);

// Returns a function:
// function anonymous(it,c,cb ) { var tR='';tR+='Hi, my name is ';tR+=c.l('F','e')(it.name);if(cb){cb(null,tR)} return tR }

compiled({ name: "Johnny Appleseed" }, Sqrl.defaultConfig);
//Returns "Hi, my name is Johnny Appleseed"
```

:::note

Many template engines offer you the option to <b>Compile</b> (which just renders your template) or <b>Precompile</b> (which turns your template into a function ahead of time). Squirrelly precompiles automatically, but is still faster than other engines.

:::