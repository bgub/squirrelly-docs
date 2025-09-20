---
id: interpolate
title: References (Interpolate)
---

A reference (what doT would call an interpolation) outputs data into the template.

## Basic Syntax
```hbs
{{ reference }}
```

## Overview

Put a reference between the opening and closing delimiters (by default `{{`and `}}`).

**The data you call a template with is stored in an object named `it` by default.**

Since Squirrelly templates parse into JavaScript, you can write a reference using dot notation: `<p>User's last name: {{it.user.lastName}}` or bracket notation: `<p>User's last name: {{it.user['lastName']}}`.

:::note
You can unescape a reference by putting `*` after the opening delimiters (ex. `{{* unescapedSomething }}`)
:::

:::caution
There can be spaces after the tag start (default `{{`) and before a tag close (default `}}`)
:::
