---
id: configuration
title: Configuration
---

Similarly to many other libraries, Squirrelly allows you to customize its behavior via options.

[TypeDoc doc page](https://squirrellyjs.github.io/squirrelly/interfaces/_config_.sqrlconfig.html)

## List of options

| Option          | Description                                        |         Type          |         Default         | Required? |
| --------------- | :------------------------------------------------- | :-------------------: | :---------------------: | :-------: |
| `async`         | Whether to generate async templates                |       `boolean`       |         `false`         |    Yes    |
| `autoEscape`    | Whether to automatically XML-escape                |       `boolean`       |                         |    Yes    |
| `autoTrim`      | Configure automatic whitespace trimming            | [autoTrim](#autotrim) |     `[false, "nl"`]     |    Yes    |
| `cache`         | Cache templates by `name` or `filename`            |       `boolean`       |                         |    Yes    |
| `defaultFilter` | Pass all interpolates through a function           |  `false \| Function`   |         `false`         |    Yes    |
| `filename`      | Absolute filepath of template (for caching)        |       `string`        |       `undefined`       |    No     |
| `l`             | Function that returns helpers. See [l](#l)         |      `Function`       |    `defaultConfig.l`    |    Yes    |
| `name`          | Template name (for caching)                        |       `string`        |       `undefined`       |    No     |
| `plugins`       | Plugins object                                     |  [plugins](#plugins)  | `defaultConfig.plugins` |    Yes    |
| `root`          | Base filepath. Defaults to `"\"` internally        |       `string`        |       `undefined`       |    No     |
| `storage`       | Object containing templates, helpers, filters      |  [storage](#storage)  | `defaultConfig.storage` |    Yes    |
| `tags`          | Template delimiters. [CAVEATS](#delimiter-caveats) |  `[string, string]`   |     `["{{", "}}"]`      |    Yes    |
| `useWith`       | Use `with(){}` to have data scope as global        |       `boolean`       |       `undefined`       |    No     |
| `varName`       | Name of data object                                |       `string`        |         `"it"`          |    Yes    |
| `view cache`    | Overrides `cache`                                  |       `boolean`       |       `undefined`       |    No     |
| `views`         | Absolute filepath to views directory               |       `string`        |       `undefined`       |    No     |

### Delimiter Caveats

Closing delimiters (like `{{`) can't have any of `(`, `)`, `|`, or `=>`.

Delimiters must be RegExp-escaped.

### `autoTrim`

`autoTrim` controls whitespace trimming.

**Signature**

`"nl" | "slurp" | boolean | ["nl" | "slurp" | boolean, "nl" | "slurp" | boolean]`

**Options**

- `"nl"` trims first character
- `"slurp"` trims all leading/trailing whitespace
- `true` is equivalent to `"slurp"`

When an array is passed, Squirrelly uses the equivalent options on the left or right side of the string

### `l`

`l` is a function that is used inside template functions to fetch filters and helpers.

**Signature**

`(container: "H" | "F", name: string) => Function`

**Default**

```js
function (container, name) {
    if (container === 'H') {
      var hRet = helpers.get(name)
      if (hRet) {
        return hRet
      } else {
        throw SqrlErr("Can't find helper '" + name + "'")
      }
    } else if (container === 'F') {
      var fRet = filters.get(name)
      if (fRet) {
        return fRet
      } else {
        throw SqrlErr("Can't find filter '" + name + "'")
      }
    }
  },
```

### `plugins`

`plugins` is an object with the following properties:

| Property          | Description                                                    |      Type       | Default |
| ----------------- | :------------------------------------------------------------- | :-------------: | :-----: |
| `processAST`      | List of functions that manipulate Squirrelly syntax tree       | `Array<object>` |  `[]`   |
| `processFnString` | List of functions that manipulate Squirrelly template function | `Array<object>` |  `[]`   |

### `storage`

`storage` points to helpers, native helpers, filters, and templates. It's an object with the following properties:

| Property        | Description          |              Type              |       Default        |
| --------------- | :------------------- | :----------------------------: | :------------------: |
| `filters`       | Filters cache        |    `Cacher<FilterFunction>`    |    `Sqrl.filters`    |
| `helpers`       | Helpers cache        |    `Cacher<HelperFunction>`    |    `Sqrl.helpers`    |
| `nativeHelpers` | Native helpers cache | `Cacher<NativeHelperFunction>` | `Sqrl.nativeHelpers` |
| `templates`     | Templates cache      |   `Cacher<TemplateFunction>`   |   `Sqrl.templates`   |

You only need to modify it if you want to create environments with different caches.

## `defaultConfig`

`Sqrl.defaultConfig` returns the default configuration. See above.

## `getConfig`

`getConfig` takes some config options and merges them with the default. It optionally takes a third parameter, which it merges with the default first.

High-level APIs like `render` and `compile` call `getConfig` internally, but you should call lower-level APIs (like `compileToString`) with a valid config object, which you can get from this function.

### Syntax

[TypeDoc doc page](https://squirrellyjs.github.io/squirrelly/modules/_config_.html#getconfig)

### Example

```js
Sqrl.compileToString(myTemplate, Sqrl.getConfig({ tags: ["<%", "%>"] }));
```
