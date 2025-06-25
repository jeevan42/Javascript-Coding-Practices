# 🔮 JavaScript Predictions: Behavior-Based Questions

This folder contains **prediction-based JS snippets** often asked in interviews. Each file contains tricky cases with explanations to strengthen your understanding.

## 📁 Files Summary

| File Name                       | Concept Covered                              |
|--------------------------------|-----------------------------------------------|
| 01-variable-hoisting.js        | Hoisting of `var`, `let`, `const`            |
| 02-closure-pitfall.js          | Closures in loop (`var` vs `let`)            |
| 03-this-arrow.js               | `this` with arrow vs regular functions       |
| 04-array-reference.js          | Reference vs copy in arrays                  |
| 05-object-coercion.js          | Object keys coercing to string               |
| 06-nan-prediction.js           | Behavior of `NaN` and its type               |
| 07-typeof-null.js              | Why `typeof null` is "object"                |
| 08-implicit-return.js          | Implicit return in arrow functions           |
| 09-chained-comparison.js       | Chained comparisons (`<`, `>`)               |
| 10-async-await-prediction.js   | Execution order with async/await             |
| 11-equality-prediction.js      | `==` vs `===` and coercion                   |
| 12-undefined-vs-not-defined.js | `undefined` vs undeclared variables          |
| 13-array-hole-vs-undefined.js  | Array holes vs undefined                     |
| 14-in-operator.js              | The `in` operator behavior                   |
| 15-delete-operator.js          | Delete behavior in arrays & objects          |
| 16-array-sort-pitfall.js       | Pitfalls of default `.sort()`                |
| 17-instanceof-trick.js         | `instanceof` with primitives                 |
| 18-symbol-key.js               | Accessing object keys with Symbols           |
| 19-double-negation.js          | `!!` casting to boolean                      |
| 20-function-length.js          | `length` property of functions               |
| 21-default-param-trick.js      | Behavior of default parameters               |
| 22-iife-prediction.js          | Scope with Immediately Invoked Functions     |
| 23-map-vs-forEach.js           | Return behavior of map vs forEach            |
| 24-promise-order.js            | Promise microtask execution order            |
| 25-promise-vs-settimeout.js    | Microtask vs Macrotask queue timing          |
| 26-falsy-truthy.js             | Truthy and falsy value coercion              |
| 27-logical-operators-return.js | Return value of logical operators (`||`, `&&`)|
| 28-set-vs-array.js             | Uniqueness handling in Set vs Array          |
| 29-string-number-coercion.js   | Coercion between string and number types     |
| 30-array-destructuring.js      | Array destructuring, skipping & defaults     |
| 31-block-scope-var-let.js      | Scope differences between `var` and `let`    |
| 32-temporal-dead-zone.js       | TDZ behavior of `let` and `const`            |
| 33-arguments-object.js         | Link between `arguments` and parameters      |
| 34-json-parse-error.js         | JSON parsing syntax limitations              |
| 35-nullish-coalescing.js       | `??` operator vs `||` fallback               |
| 36-event-loop-blocking.js      | How blocking code delays timers              |
| 37-constructor-return.js       | Returning object from constructor function   |
| 38-array-flat-depth.js         | Array flattening with `flat()` method        |
| 39-symbol-vs-string-key.js     | Symbol keys and object iteration             |
| 40-optional-chaining.js        | Safe nested property access with `?.`        |
| 41-set-behavior.js             | Uniqueness in Set with number vs string       |
| 42-bigint-mystery.js           | Mixing BigInt with Number throws error        |
| 43-typeof-function.js          | typeof returns 'function' for declared funcs  |
| 44-primitive-immutability.js   | Immutability of primitive strings             |
| 45-this-default-binding.js     | Default binding of `this` in non-method call  |
| 46-parseint-tricky.js          | parseInt + map behavior with radix confusion  |
| 47-parseint-map-trap.js        | `map(parseInt)` pitfall due to index → radix |
| 48-date-equality.js            | Comparing Date objects (reference vs value)   |
| 49-for-in-array.js             | `for...in` iterates array + custom keys       |
| 50-function-name-property.js   | Accessing function's `name` property          |
| 51-class-vs-function.js        | Differences between class and function call   |
| 52-array-concat-mutation.js    | `concat()` returns new array, doesn't mutate |
| 53-array-fill-reference.js     | `.fill(obj)` copies reference, not deep clone |
| 54-function-declaration-hoisting.js | Function declarations vs expressions hoisting |
| 55-array-reduce-trap.js        | Reduce throws if no initial value on empty array |
| 56-array-reverse-mutation.js    | .reverse() mutates the original array               |
| 57-json-stringify-order.js      | JSON.stringify preserves insertion key order        |
| 58-object-keys-number-order.js  | Numeric keys in object are auto-sorted              |
| 59-nested-ternary.js            | Nested ternary operator behavior                    |
| 60-function-expression-name.js  | Named function expressions and `.name` property     |
| 61-in-operator-vs-undefined.js  | `in` vs `undefined` value checking                  |
| 62-delete-vs-null.js            | Difference between `delete` and setting to `null`   |
| 63-string-from-charcode.js      | Generate string characters using ASCII codes        |
| 64-array-length-manipulation.js | Truncate array by setting `.length` manually        |
| 65-try-catch-scope.js           | Scope of variables inside `try...catch`             |
| 66-label-break.js               | Using `break` with labeled loops                    |
| 67-function-constructor.js      | `new Function()` constructor behavior               |
| 68-void-operator.js             | `void` always returns undefined                     |
| 69-type-coercion-array.js       | Strange coercion with objects and arrays            |
| 70-symbol-description.js        | Symbol description property usage                   |
| 71-eval-scope.js              | `eval` accessing outer scope                            |
| 72-typeof-nan.js              | `typeof NaN` returns "number"                           |
| 73-bool-vs-bool-obj.js        | Boolean vs `new Boolean()` object coercion              |
| 74-empty-array-truthy.js      | Empty arrays/objects are always truthy                  |
| 75-comma-operator.js          | Comma operator returns the last evaluated expression    |
| 76-bitwise-not-indexof.js     | `~indexOf` trick for existence checking                 |
| 77-increment-eval-order.js    | `a = a++ + ++a` evaluation order trap                   |
| 78-object-key-overwrite.js    | Object keys overwrite silently if duplicated            |
| 79-primitive-passing.js       | Primitive values passed by value                        |
| 80-reference-passing.js       | Objects passed by reference and mutated inside function |
| 81-function-redeclared.js     | Later function declarations override earlier ones       |
| 82-null-loose-equal.js        | `null == undefined` is true; not equal to 0 or ""       |
| 83-array-concat-spread.js     | Spread and concat produce similar results               |
| 84-boolean-constructor.js     | `new Boolean(false)` is truthy (object)                 |
| 85-array-sparse-length.js     | Sparse array sets length to highest index + 1           |
| 86-empty-return-undefined.js  | Function with no return gives `undefined`               |
| 87-new-array-vs-array.js      | `Array(3)` creates holes; `[3]` creates a value          |
| 88-function-prototype-vs-proto.js | `.prototype` vs `.__proto__` explained               |
| 89-array-join-empty.js        | `.join()` returns "" on empty arrays                    |
| 90-symbol-hidden.js           | Symbol-keyed properties are hidden from enumeration     |
| 91-string-number-plus.js      | Number + string results in string coercion             |
| 92-string-minus-number.js     | String - number coerces to numeric operations          |
| 93-string-bracket-access.js   | String supports index access                           |
| 94-date-now-vs-newdate.js     | Difference between `Date.now()` and `new Date()`       |
| 95-parsefloat-trailing.js     | `parseFloat` stops at first invalid character          |
| 96-array-isarray.js           | Detecting arrays using `Array.isArray()`               |
| 97-infinity-behavior.js       | Behavior of Infinity in division                       |
| 98-undefined-delete.js        | `delete` works only on object props, not declared vars |
| 99-empty-array-bool.js        | `[] == false` due to type coercion                     |
| 100-function-name-dynamic.js  | Function names: declared vs inferred                   |
| 101-void-operator.js          | `void` operator always returns undefined              |
| 102-function-declared-late.js | Function declaration hoisting vs expression timing    |
| 103-nan-strict-equal.js       | `NaN !== NaN`; use `Object.is` for true comparison    |
| 104-arguments-vs-rest.js      | Difference between `arguments` and rest params        |
| 105-convert-to-boolean.js     | `!!` vs `Boolean()` casting techniques                |
| 106-comparison-null-0.js      | Strange comparisons with `null` and numbers           |
| 107-settimeout-zero.js        | `setTimeout(..., 0)` runs after current stack         |
| 108-new-regexp-vs-literal.js  | Difference between `/regex/` and `new RegExp()`       |
| 109-object-method-this.js     | Behavior of `this` inside object method               |
| 110-string-split-limit.js     | `.split()` with limit to control parts                |




## 🧠 How to Use

- Read the code, **predict the output** before running.
- Use terminal or browser console to verify.
- Read the explanation in the comments to deepen understanding.

Happy debugging and predicting! 🔥
