---
id: builtin-helpers
title: Built-in Helpers
---

Builtin helpers are helpers that come as part of the Squirrelly library. They can always be overwritten if desired, but they provide simple, no-setup logic within templates.

## if/else

```hbs
{{@if(it.somevalue === 1)}}
Display this
{{#else}}
Display this
{{/if}}
```

_This is a native helper_

## each

```hbs
{{@each(it.somearray) => val, index}}
Display this
The current array element is {{val}}
The current index is {{index}}
{{/each}}
```

### Helper References:

- `val`: the current array element
- `index`: the index of the array element

**Note that `val, index` are both optional and can be renamed. Ex. `=> item` or `=> item, number`**

## foreach

```hbs
{{@foreach(it.someobject) => key, val}}
This loops over each of an objects keys and values.
The value of the current child is {{val}}
The current key is {{key}}
{{/foreach}}
```

### Helper References:

- `key`: the key of the current object child
- `val`: the value of the current child

**Note that `val, index` are both optional and can be renamed. Ex. `=> item` or `=> item, number`**

## try-catch

```hbs
{{@try}}
This won't work: {{ *it.hi | validate}}
{{#catch => err}}

Uh-oh, error! Message was '{{err.message}}'
{{/try}}
```

### Helper References:

- `err`: the error
