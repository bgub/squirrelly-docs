---
id: whitespace-control
title: Whitespace Control
---

Squirrelly allows you to control the whitespace before or after tags.

:::note

Squirrelly borrows its whitespace control syntax from EJS

:::

## Basic Syntax

Opening delimiters can be followed with `-` or `_`, and closing delimiters can be prefixed with `-` or `_`

`_` at the beginning of a tag will trim all whitespace before it, and `_` at the end of a tag will trim all whitespace after it.

`-` at the beginning of a tag will trim 1 character of whitespace before it, and `-` at the end of a tag will trim 1 character of whitespace after it.

## Examples

```hbs
Hi
{{- it.myname }}
```

```hbs
{{_ ~if (it.num) _}}

{{/if}}
```

:::note Configuration

By default, Squirrelly removes the first whitespace character after each tag. This can be [configured](../api/configuration)

:::
