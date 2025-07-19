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
| 111-object-to-primitive.js    | How JS coerces objects to primitives                  |
| 112-json-stringify-order.js   | Property order in JSON.stringify                      |
| 113-instanceof-array.js       | `instanceof` vs `Array.isArray`                       |
| 114-delete-array-index.js     | `delete` on array leaves holes                        |
| 115-object-frozen.js          | Object.freeze makes shallow immutability              |
| 116-infinity-comparison.js    | Comparing Infinity with large numbers and itself      |
| 117-function-replace.js       | Function can be reassigned unless declared with const |
| 118-array-concat-modify.js    | `.concat()` doesn’t mutate original array             |
| 119-symbol-description.js     | Symbols can have optional descriptions                |
| 120-template-tagged.js        | Tagged template literals and custom formatting        |
| 121-logical-nullish-diff.js   | ll vs ?? behavior with falsy vs nullish values     |
| 122-string-pad-start.js       | `.padStart()` for padding strings                      |
| 123-array-fill-mutate.js      | `.fill()` mutates the original array                   |
| 124-switch-fallthrough.js     | Fallthrough in switch without break                    |
| 125-eval-scope.js             | `eval` runs in current scope, can modify vars          |
| 126-bool-object.js            | `new Boolean(false)` is truthy                         |
| 127-number-to-string-base.js  | `.toString(radix)` for binary, hex conversions         |
| 128-array-reduce-missing-init.js | `.reduce()` without init uses first item as accumulator |
| 129-parseint-binary.js        | `parseInt()` with radix for different bases            |
| 130-locale-compare.js         | `.localeCompare()` for string sorting                  |
| 131-number-object-compare.js  | Comparing number primitives with Number objects        |
| 132-typeof-function-instance.js | Functions are objects — typeof vs instanceof         |
| 133-array-constructor-confuse.js | `new Array(n)` creates sparse array                 |
| 134-object-assign-vs-clone.js | `Object.assign` does shallow copy only                |
| 135-set-equality.js           | Set equality is by reference                          |
| 136-array-from-vs-slice.js    | Convert array-like objects using `Array.from()`       |
| 137-async-function-return.js  | `async` functions always return a Promise             |
| 138-null-undefined-equal.js   | `null == undefined` but not strictly equal            |
| 139-math-round-vs-floor.js    | Difference between `Math.round()` and `Math.floor()`  |
| 140-unary-plus-coerce.js      | Unary `+` coerces value to number                     |
| 141-array-every-vs-some.js    | Difference between `.every()` and `.some()`         |
| 142-object-key-order.js       | Integer keys in objects are sorted numerically       |
| 143-promise-catch-finally.js  | `.finally()` runs after both resolve and reject      |
| 144-typeof-array.js           | Arrays return `'object'` from `typeof`, use `isArray`|
| 145-function-name-binding.js  | Function `name` is immutable                         |
| 146-undefined-global-leak.js  | Undeclared vars leak to global scope in sloppy mode  |
| 147-string-fromcharcode.js    | Convert Unicode/ASCII codes to characters            |
| 148-replace-callback.js       | `.replace()` with function callback & regex groups   |
| 149-instanceof-bound-function.js | `.bind()` breaks `instanceof` check               |
| 150-proxy-get-trap.js         | Using `Proxy` to customize property access           |
| 151-date-parsing-pitfall.js     | Date parsing inconsistencies across formats        |
| 152-number-epsilon.js           | Comparing floating-point numbers with EPSILON      |
| 153-regex-lastindex-trap.js     | Global regex retains state via `.lastIndex`        |
| 154-function-default-eval.js    | `Function` constructor acts like unsafe `eval`     |
| 155-array-indexof-nan.js        | `indexOf(NaN)` fails; use `includes()` instead      |
| 156-weakmap-garbage.js          | WeakMap allows garbage collection of keys          |
| 157-arrow-constructor-trap.js   | Arrow functions cannot be used as constructors     |
| 158-instanceof-custom.js        | Override `instanceof` using `Symbol.hasInstance`   |
| 159-object-entries-vs-fromentries.js | Convert object to/from entries for transformations |
| 160-locale-string-behavior.js   | Use `toLocaleString()` for region-specific display |
| 161-json-parse-bigint.js       | BigInt cannot be serialized in JSON                |
| 162-array-slice-negative.js    | Negative indices in `.slice()` count from end      |
| 163-switch-true-pattern.js     | `switch(true)` for range/conditional branching     |
| 164-array-copywithin.js        | `.copyWithin()` copies within array (mutates)      |
| 165-destructuring-undefined.js | Destructuring with defaults & `undefined` handling |
| 166-object-defineproperty.js   | Define property with control flags (`writable`, etc)|
| 167-regex-lookahead.js         | Lookahead assertions in regex                      |
| 168-object-freeze-nested.js    | `.freeze()` is shallow — nested objects still mutable |
| 169-array-every-shortcircuit.js| `.every()` stops on first `false` return           |
| 170-json-replacer-filter.js    | Filter out fields while stringifying JSON          |
| 171-array-flat-infinity.js     | Flatten arrays to unlimited depth using `.flat(Infinity)` |
| 172-function-name-overwrite.js | Function name in expression is read-only                  |
| 173-json-stringify-function.js | Functions & symbols are skipped in `JSON.stringify`       |
| 174-array-indexof-nan.js       | `NaN` not found by `indexOf`, use `.includes()`           |
| 175-json-parse-reviver.js      | Transform parsed values using reviver in `JSON.parse`     |
| 176-for-loop-missing-parts.js  | All components in `for` loop are optional                 |
| 177-getter-setter-trap.js      | Defining and using getter/setter in objects               |
| 178-object-spread-skip-symbol.js | Spread syntax skips symbol-keyed properties              |
| 179-arguments-callee.js        | `arguments.callee` deprecated in strict mode              |
| 180-switch-expression.js       | `switch` uses strict comparison (`===`)                   |
| 181-array-push-length.js        | `.push()` returns new array length, not array         |
| 182-number-object-compare.js    | Comparing Number object with primitive                |
| 183-undefined-prop-access.js    | Optional chaining prevents crash on undefined props   |
| 184-date-parse-format.js        | `Date.parse()` works only on valid ISO formats        |
| 185-bitwise-coerce.js           | Bitwise NOT `~` coerces values to numbers             |
| 186-array-find-vs-filter.js     | `.find()` returns one, `.filter()` returns all matches|
| 187-parseint-vs-number.js       | `parseInt` vs `Number` with string input              |
| 188-number-leading-zero.js      | Leading zeros may result in octal numbers             |
| 189-object-hasown-vs-in.js      | `in` checks prototype, `hasOwnProperty` doesn't       |
| 190-number-epsilon-compare.js   | Use `Number.EPSILON` for floating point comparison    |
| 191-instanceof-after-bind.js     | `.bind()` breaks `instanceof` relationship            |
| 192-undefined-in-json.js         | `undefined` is omitted from JSON.stringify            |
| 193-promise-return-trap.js       | `.then()` accepts both values and Promises            |
| 194-object-assign-array.js       | `Object.assign()` copies array index keys             |
| 195-switch-expression-eval.js    | `switch` uses strict equality (`===`)                 |
| 196-typeof-regex.js              | RegExp is of type 'object'                            |
| 197-array-length-trap.js         | Truncating array by setting `.length`                 |
| 198-deep-equal-vs-shallow.js     | `===` only checks references, not deep equality       |
| 199-async-constructor.js         | Class constructors can't be `async`                   |
| 200-array-unshift-return.js      | `.unshift()` returns the new array length             |
| 201-array-every-empty.js         | `.every()` on empty array returns true                  |
| 202-array-some-empty.js          | `.some()` on empty array returns false                 |
| 203-json-parse-date.js           | Dates stringify as ISO strings, lose type              |
| 204-function-name-anonymous.js   | Anonymous functions get name from variable             |
| 205-in-operator-array.js         | `in` checks index existence, not value                 |
| 206-string-match-regex.js        | `.match()` returns `null` if no match                  |
| 207-typeof-null-instanceof.js    | `typeof null` is object but not `instanceof Object`    |
| 208-empty-array-typeof.js        | `typeof []` is `'object'`                              |
| 209-function-hoisting.js         | Function declarations are fully hoisted                |
| 210-missing-return-undefined.js  | Missing return defaults to `undefined`                 |
| 211-array-slice-negative-index.js   | `.slice(-n)` counts from end of array              |
| 212-object-values-order.js          | Object keys: integers first (sorted), then rest    |
| 213-number-plus-object.js           | Number + object coerces to string                  |
| 214-parsefloat-space.js             | `parseFloat` ignores spaces                        |
| 215-date-equality-trap.js           | Date objects are not equal by reference            |
| 216-json-stringify-method.js        | `JSON.stringify` skips functions and symbols       |
| 217-typeof-symbol.js                | `typeof Symbol()` returns `'symbol'`              |
| 218-eval-vs-function.js             | `eval` vs `Function()` scoping behavior            |
| 219-array-constructor-length.js     | `Array(n)` creates holes, not values               |
| 220-comma-expression-assignment.js  | Comma expression evaluates all, returns last       |
| 221-new-object-vs-literal.js        | `new Object()` vs `{}` — both create objects           |
| 222-nan-number-check.js             | NaN !== NaN — use `Number.isNaN()`                     |
| 223-symbol-hidden-properties.js     | Symbol-keyed props are hidden from loops               |
| 224-regex-lastindex.js              | Regex with `/g` retains `lastIndex`                    |
| 225-string-escape-trick.js          | Escape sequences like `\n`, `\t` in strings             |
| 226-function-return-missing.js      | Arrow functions returning object need `()`             |
| 227-parseint-leading-zero.js        | Legacy octal parsing with leading zero                 |
| 228-array-some-holes.js             | `.some()` skips holes, doesn't see them as `undefined` |
| 229-json-stringify-circular.js      | Circular objects throw on `JSON.stringify()`           |
| 230-string-number-subtraction.js    | `"string" - number` → coerces string to number         |
| 231-async-function-stack.js        | Async functions throw errors wrapped in Promises       |
| 232-boolean-index-trick.js         | Booleans as array index: true → 1, false → 0           |
| 233-object-compare-json.js         | `JSON.stringify()` order affects object comparison     |
| 234-destructuring-undefined.js     | Destructuring undefined throws error                   |
| 235-function-arity-trick.js        | Function.length counts params before default assignment|
| 236-infinite-recursion-stack.js    | Infinite recursion → max call stack error              |
| 237-string-coercion-object.js      | Object + string = `[object Object]string`              |
| 238-undefined-property-access.js   | Optional chaining prevents errors on undefined access  |
| 239-delete-nonexistent.js          | `delete` on nonexistent keys returns true              |
| 240-array-sort-numbers.js          | Default sort uses string comparison, not numeric       |
| 241-settimeout-this.js           | `this` in `setTimeout()` is global (not object)        |
| 242-array-find-index.js          | `.findIndex()` returns -1 if not found                 |
| 243-function-name-arrow.js       | Arrow functions don’t bind `name` keyword manually     |
| 244-number-leading-plus.js       | Unary `+` converts string to number or NaN             |
| 245-boolean-string.js            | Booleans convert to string in template literals        |
| 246-number-epsilon-compare.js    | Compare floats safely with `Number.EPSILON`            |
| 247-new-date-vs-now.js           | `Date.now()` → timestamp; `new Date()` → object        |
| 248-for-loop-declare-once.js     | `let` in loop creates block-scoped variable            |
| 249-object-undefined-access.js   | Accessing non-existent property returns `undefined`    |
| 250-delete-return.js             | `delete` returns true/false depending on success       |
| 251-array-includes-nan.js        | `.includes()` detects NaN, unlike `.indexOf()`         |
| 252-new-array-length.js          | `new Array(n)` creates sparse arrays                   |
| 253-array-index-as-string.js     | Object keys from numbers are stored as strings         |
| 254-template-nested.js           | Template literals support nested expressions           |
| 255-json-parse-null.js           | `JSON.parse("null")` returns `null`                    |
| 256-switch-type-match.js         | `switch` uses strict equality (`===`)                  |
| 257-delete-from-array.js         | `delete` creates holes in arrays, doesn’t shift        |
| 258-empty-string-falsy.js        | Empty string (`""`) is falsy                           |
| 259-number-equal-vs-object.js    | Primitives vs wrapper object in equality               |
| 260-object-key-space.js          | Keys with spaces must be quoted or bracket-accessed    |
| 261-in-operator-array.js         | `in` operator on arrays checks for index presence     |
| 262-promise-reject-then.js       | `.then()` can take 2 args: resolve and reject handler |
| 263-parseint-hex.js              | `parseInt` parses hex strings with `0x` prefix        |
| 264-array-flat-default.js        | `.flat()` defaults to depth 1                         |
| 265-null-equal-false.js          | `null == false` is false; `undefined == null` is true |
| 266-async-function-error.js      | Errors in `async` functions become rejected promises  |
| 267-promise-return-chain.js      | Returned value flows down `.then()` chain             |
| 268-isfinite-trap.js             | `isFinite()` coerces; `Number.isFinite()` doesn’t     |
| 269-string-trim.js               | `.trim()` removes whitespace from ends of string      |
| 270-in-operator-object.js        | `in` checks own + inherited properties                |
| 271-null-object-lookup.js        | Accessing property on `null` throws error             |
| 272-optional-chaining-safe.js    | Use `?.` to avoid accessing properties on `null`      |
| 273-string-repeat.js             | `.repeat()` repeats string N times                    |
| 274-array-copy-slice.js          | `.slice()` makes a shallow array copy                 |
| 275-json-parse-date.js           | `JSON.parse()` doesn’t convert date strings           |
| 276-unary-minus.js               | Unary `-` converts to number and negates              |
| 277-array-every-shortcircuit.js  | `.every()` stops checking at first false              |
| 278-array-some-shortcircuit.js   | `.some()` stops checking at first true                |
| 279-logical-or-default.js        | ll returns first truthy value                       |
| 280-nullish-coalescing-default.js| `??` returns fallback only if null/undefined          |
| 281-typeof-array.js              | Arrays return "object" with `typeof`; use `isArray`  |
| 282-empty-string-number.js       | Empty string coerces to 0 in numeric comparison       |
| 283-double-bang-null.js          | `!!` for boolean casting                              |
| 284-boolean-constructor-trap.js  | `new Boolean(false)` is still truthy                  |
| 285-spread-overwrites.js         | Spread later keys overwrite previous ones             |
| 286-function-defaults-undefined.js | Only `undefined` triggers default param             |
| 287-nested-array-to-string.js    | Nested arrays flatten via `.toString()`              |
| 288-number-leading-zero.js       | Strings with leading 0s may be legacy octal           |
| 289-float-modulo.js              | Modulo operator works with floats                     |
| 290-increment-prefix-vs-postfix.js | `++a` vs `a++` return value difference              |
| 291-parsefloat-empty.js          | `parseFloat('')` returns NaN                         |
| 292-array-index-as-string.js     | Array indices are stored as strings in object keys  |
| 293-logical-and-return.js        | `&&` returns first falsy or last truthy             |
| 294-logical-or-return.js         | ll returns first truthy                           |
| 295-function-return-undefined.js | No `return` yields `undefined`                      |
| 296-async-return-value.js        | `async` always returns a Promise                    |
| 297-infinite-loop-float.js       | Floating point increment may never hit target       |
| 298-json-stringify-symbol.js     | `JSON.stringify()` ignores Symbol keys              |
| 299-array-indexof-nan.js         | `indexOf(NaN)` fails due to `NaN !== NaN`           |
| 300-const-object-mutate.js       | `const` objects can mutate; can't be reassigned     |
| 301-math-max-empty.js            | `Math.max()` with no args returns `-Infinity`       |
| 302-math-min-empty.js            | `Math.min()` with no args returns `Infinity`        |
| 303-function-hoisting-overwrite.js | Later function declarations override earlier      |
| 304-promise-then-return.js       | `.then()` returns a new Promise                    |
| 305-loop-settimeout-var.js       | Closure issue in loop with `var`                   |
| 306-loop-settimeout-let.js       | Using `let` fixes closure problem in loops         |
| 307-prototype-method-add.js      | Dynamically add method to prototype                |
| 308-typeof-symbol.js             | `typeof Symbol()` returns `"symbol"`              |
| 309-console-log-undefined.js     | Accessing undeclared variable throws error         |
| 310-ternary-nested-confuse.js    | Nested ternary expressions are tricky              |
| 311-in-operator-on-array.js     | `in` checks array indices, not values              |
| 312-string-repeat-negative.js   | `.repeat()` with negative throws error             |
| 313-array-sort-default.js       | Default `.sort()` sorts as strings                 |
| 314-null-instanceof-object.js   | `null instanceof Object` is false                 |
| 315-regex-lastindex.js          | Reusing global RegExp can cause lastIndex issues  |
| 316-set-has-naN.js              | `Set` treats all `NaN` as equal                   |
| 317-function-argument-overwrite.js | Local variable can overwrite function param     |
| 318-spread-string.js            | Spreading string creates character array          |
| 319-nested-array-access.js      | Accessing deep arrays with optional chaining       |
| 320-number-plus-object.js       | Adding number + object uses `valueOf()` or `toString()` |
| 321-add-string-minus-number.js  | `1 + "1" - 1` → 10 due to coercion                 |
| 322-bang-string-false.js        | `!!"false"` → true (non-empty string is truthy)   |
| 323-new-number-typeof.js        | `typeof new Number(5)` → "object"                 |
| 324-typeof-null.js              | `typeof null` → "object" (legacy bug)             |
| 325-nan-equality.js             | `NaN === NaN` → false                             |
| 326-array-reference-equality.js | `[1,2] === [1,2]` → false (different references)   |
| 327-empty-array-equality.js     | `[] == false` → true (coercion to "")             |
| 328-async-fn-returns-promise.js | Async functions always return a Promise           |
| 329-json-parse-number.js        | `JSON.parse("5")` → 5 (number, not string)        |
| 330-float-precision-error.js    | `0.1 + 0.2 !== 0.3` → true (floating point issue) |          
| 331-array-hole-map.js          | `.map()` skips holes in arrays                  |
| 332-json-parse-date.js         | `JSON.parse` turns dates into strings           |
| 333-for-in-array.js            | `for...in` iterates over array indexes          |
| 334-this-in-arrow.js           | Arrow functions don’t have their own `this`     |
| 335-number-epsilon.js          | `Number.EPSILON` helps compare floats precisely |
| 336-symbol-description.js      | `Symbol('desc').description` gets description   |
| 337-parseint-with-radix.js     | Always pass radix to `parseInt` for safety      |
| 338-instanceof-vs-typeof.js    | Difference between `instanceof` and `typeof`    |
| 339-function-length.js         | `.length` shows number of declared parameters   |
| 340-string-pad.js              | `.padStart()` and `.padEnd()` pad strings       |         
| 341-object-key-order.js        | Object keys maintain insertion order              |
| 342-parseint-radix-trap.js     | `map(parseInt)` causes unexpected results         |
| 343-math-max-empty.js          | `Math.max()` without args returns `-Infinity`     |
| 344-undefined-key-in-object.js | `undefined` becomes string key in object          |
| 345-object-freeze-mutate.js    | Frozen objects can’t be mutated                   |
| 346-array-concat-object.js     | Concatenating object to array preserves structure |
| 347-equality-object-vs-string.js | Object is not equal to string '[object Object]' |
| 348-json-parse-date.js         | `JSON.parse()` of date returns string not Date    |
| 349-array-hole-vs-undefined.js | Array hole ≠ undefined (check with `i in arr`)    |
| 350-function-name.js           | Function name still shows inner named function    |




## 🧠 How to Use

- Read the code, **predict the output** before running.
- Use terminal or browser console to verify.
- Read the explanation in the comments to deepen understanding.

Happy debugging and predicting! 🔥
