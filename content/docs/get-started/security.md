---
id: security
title: Security
---

## Escaping

See the page on [HTML-Escaping](../syntax/auto-escaping) to learn how to guard against XSS attacks.

## Code Injection

:::caution

Since Squirrelly compiles to pure JavaScript, you should **never** run *untrusted* templates on your server, unless you use a good sandboxed environment. Plans are in the works to create safe user-defined templates, but for now, they are unsafe.

:::