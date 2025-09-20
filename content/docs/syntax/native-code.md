---
id: native-code
title: Native Code (Evaluate)
---

A native code tag inserts its contents into the template function. (It's what doT would call evaluation).

## Basic Syntax

```hbs
{{! ...  }}
```

## Overview

Put valid JavaScript code between the tag delimiters.

## Comments

Comments are written with native code syntax.

*Example*: 
```hbs
{{! /* this is a comment */}}
```

## Console.log

You can log to the console with native code syntax.

*Example*: 
```hbs
{{! console.log("Hi"); }}
```

:::caution

Make sure you include semicolons when needed! Ex. `{{! console.log('x'); }}`

In general, semicolons are needed after calling functions.

:::