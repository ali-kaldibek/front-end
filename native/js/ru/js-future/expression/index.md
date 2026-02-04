---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
page-type: javascript-language-feature
browser-compat: javascript.classes.constructor
sidebar: jssidebar
---
The **`constructor`** method is a special method of a [class](/en-US/docs/Web/JavaScript/Reference/Classes) for creating and initializing an object instance of that class.

> [!NOTE]
> This page introduces the `constructor` syntax. For the `constructor` property present on all objects, see {{jsxref("Object.prototype.constructor")}}.

{{InteractiveExample("JavaScript Demo: Class constructor")}}

```js interactive-example
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly = new Polygon();

console.log(poly.name);
// Expected output: "Polygon"
```

## Syntax

```js-nolint
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }