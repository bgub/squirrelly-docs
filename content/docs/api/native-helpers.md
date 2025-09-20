---
id: native-helper-api
title: Native Helpers API
---

Native helpers let you output code directly into your template function.

:::caution
Native helpers are complicated and kind of messy. If you can implement
something with a regular helper, do that instead
:::

## Syntax

## Examples

_This is the `if` native helper, behind-the-scenes_

```js
Sqrl.nativeHelpers.define('if', function (buffer, env) {
  // buffer.d is buffer content, in AST form

  var returnStr =
    'if(' + buffer.p + '){' + Sqrl.compileScope(buffer.d, env) + '}'
  if (buffer.b) {
    // b stands for blocks
    // Loop through each helper block
    for (var i = 0; i < buffer.b.length; i++) {
      var currentBlock = buffer.b[i]
      if (currentBlock.n === 'else') {
        returnStr += 'else{' + Sqrl.compileScope(currentBlock.d, env) + '}'
      } else if (currentBlock.n === 'elif') {
        returnStr +=
          'else if(' +
          currentBlock.p +
          '){' +
          Sqrl.compileScope(currentBlock.d, env) +
          '}'
      }
    }
  }
  return returnStr
})
```
