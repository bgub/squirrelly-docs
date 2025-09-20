---
id: overview
title: Syntax Overview
---

## Definitions

We're going to call something between the set delimiters a tag. Ex: `{{...}}`, where `{{` and `}}` are called "delimiters"

## Language Items

There are 5 language items in Squirrelly:

- [Interpolation tags](interpolate) place the value of the code inside them into the rendered template. <br/> _Example_: Rendering `Hi {{it.name}}` with `{name: "Ben"}` will return `"Hi Ben"`. <br/> The data you call a template with is referenced using `it`, similarly to doT.js.
- [Evaluation tags](native-code) start with `!` and place the code inside them into the template function. <br/> _Examples_: Comments are written using evaluation tags (`{{! /*comment */}}`), as are JS function calls (`{{! console.log('hi') }}`).
  <br/> It's usually discouraged to use evaluation tags for complex functions and logic, which helpers are ideal for.
- [Helpers](helpers) start with `@` and are for logic in the template. Loops and conditionals are both implemented as native helpers, a special kind of helper that compiles into native JS code before rendering. <br/>Helpers use blocks (that start with `#`) for logical separation.<br/> _Examples_:
  - If/Else:
    ```
    {{ @if (it.number === 3) }}
    Number is three
    {{ #elif (it.number === 4) }}
    Number is four
    {{ #else }}
    Number is five
    {{ /if}}`
    ```
- [Filters](filters) are for post-processing values such as references and helpers. You can define your own that do anything from capitalizing letters to emojifying strings. <br/> _Example_: `{{someref | capitalize}}`

## Inspiration

Squirrelly takes inspiration from Mustache, Handlebars, EJS, Nunjucks, Swig, doT.js, and many other great template engines.
