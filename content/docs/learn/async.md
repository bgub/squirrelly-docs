---
id: async
title: Async Support
---

:::note

Async support is still in-progress for environments not supporting `async`/`await`.

:::

## Syntax

```js
function resolveAfter2Seconds () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('HI FROM ASYNC')
    }, 2000)
  })
}

Sqrl.helpers.define('async-test', resolveAfter2Seconds)

async function doAsyncStuff () {
  console.log(
    await Sqrl.render(
      '{{@async async-test()/}}',
      {},
      { async: true, asyncHelpers: ['async-test'] }
    )
  )
  // logs 'HI FROM ASYNC' after 2 seconds
}

// ALTERNATIVELY, WITH CALLBACKS:

Sqrl.render(
  '{{@async async-test()/}}',
  {},
  { async: true, asyncHelpers: ['async-test'] },
  function (err, res) {
    console.log(res)
    // logs 'HI FROM ASYNC' after 2 seconds
  }
)
```
