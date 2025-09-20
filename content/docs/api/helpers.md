---
id: helper-api
title: Helpers API
---

Helpers let you call external functions with portions of your template!

## Syntax

[TypeDoc doc page](https://squirrellyjs.github.io/squirrelly/modules/_containers_.html#helpers)

## Examples

_Here's the `extends` helper behind-the-scenes_

```js
Sqrl.helpers.define("extends", function(content, blocks, config) {
  var data = content.params[1] || {};
  data.content = content.exec();

  // Loop through each block
  for (var i = 0; i < blocks.length; i++) {
    var currentBlock = blocks[i];
    // set data[blockName] to the compiled value of the current block
    data[currentBlock.name] = currentBlock.exec();
  }

  var template = config.storage.templates.get(content.params[0]);
  if (!template) {
    throw SqrlErr('Could not fetch template "' + content.params[0] + '"');
  }
  return template(data, config);
});
```

_Here's the `foreach` helper behind-the-scenes_

```js
Sqrl.helpers.define("foreach", function(content) {
  var res = "";
  var param = content.params[0];
  // the first param is the object we want to loop over
  for (var key in param) {
    if (!hasOwnProp(param, key)) continue;
    res += content.exec(key, param[key]);
  }
  return res;
});
```
