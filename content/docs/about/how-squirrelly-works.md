---
id: how-squirrelly-works
title: How Squirrelly Works
---

Unlike many pieces of software, we like our users to understand what their programs are doing behind the scenes.

## TL;DR

Squirrelly uses Regular Expressions to turn a template into a function which can be called with a specific set of options. Since all of the parsing is done beforehand, the function (called a "Precompiled" function) just does string interpolation and is incredibly fast.

## Long Version:

1. Squirrelly uses a big RegExp with inline tokenization to **parse** the template by looping through each valid tag (ex. `{{...}}`) in the template. It creates a simple syntax tree which it passes to `compile`
2. During compilation, Squirrelly creates a function string from the syntax tree, then uses `Function` to bring it to life.
3. This explanation is really lacking. Just read the source code :)
