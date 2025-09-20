---
id: filters
title: Filters
---

Filters let you pipe content through some predefined functions.

## Basic Syntax

```hbs
{{somereference | somefilter |anotherfilter}}
```

Squirrelly has a filter syntax similar to Nunjucks or Swig. Just put a `|` and then the filter name. You can pipe to multiple filters if you want.

Filters can also accept parameters.

## Example

```hbs
{{! /* Basic filters */}}

{{mystring | reverse | capitalize}}

{{! /* With Parameters */}}

{{it.someArray | join(", ")}}
```

:::note Defining Filters

Remember, you'll need to [define each filter](../api/filter-api) before you use it.

:::

## The `safe` flag

To disable autoescaping, you can write

```hbs
{{myreference | safe}}
```

This isn't a true filter, it just acts as a flag to let Squirrelly know not to autoescape.