---
id: auto-escaping
title: Auto XML-Escaping
---

Auto-escaping is an important feature of Squirrelly. When it's enabled, every reference without the `safe` filter or `*` prefix will be HTML-escaped, to provide some protection against XSS.

:::caution

Squirrelly has **not** been vetted for security, and autoEscaping is probably not completely foolproof. We use the same function as many other template engines, like Mustache and Handlebars, but there's still the possibility that there's some vulnerability.  

:::

```js
Sqrl.defaultConfig.autoEscape = true // Turns autoEscaping on
Sqrl.defaultConfig.autoEscape = false // Turns autoEscaping off
// autoEscaping is on by default
```

## Disabling

To avoid escaping a specific reference, you can pass it through the `safe` filter.

_Example_: `{{someref | safe}}`

You can also put an asterisk (`*`) after the opening delimiters and whitespace control tags.

_Examples_: `{{* someref}}`, `{{_ * someref}}`


:::note

Auto-escaping can be helpful, but it also negatively impacts performance. For best results, autoEscape data before you store it or attempt to render it in a template.

:::
