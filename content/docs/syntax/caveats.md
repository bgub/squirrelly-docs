---
id: caveats
title: Caveats
---

## Reserved variable names

_Don't use these variables in your templates_

- `it`
- `tR`
- `cb`
- `c`

## Parsing

- Using RegExp literals inside your templates has a high likelihood of making them fail. Please, put that logic in a helper or something. If you really must, use `new RegExp('a|b')` instead.

## Delimiters

- Delimiters have to be regular-expression escaped
- Your closing delimiter can't contain `(`, `)`, `|`, or `=>`. _This is due to our parsing algorithm needing to figure out when helper parameters have been closed, filters started, etc._
