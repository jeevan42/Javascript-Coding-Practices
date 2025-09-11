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
| 351-array-keys-iterator.js     | Array `.keys()` returns an iterator of indexes       |
| 352-typeof-null.js             | `typeof null` is `'object'`                          |
| 353-array-reverse-mutation.js  | `reverse()` mutates original array                   |
| 354-delete-array-index.js      | `delete` leaves a hole in array                      |
| 355-arguments-object.js        | `arguments` and parameters are linked                |
| 356-function-hoisting.js       | Function declarations are hoisted                    |
| 357-function-expression-hoisting.js | Function expressions are **not** hoisted        |
| 358-instanceof-array.js        | `[] instanceof Array` and `Object` both true         |
| 359-array-flat-depth.js        | `flat(n)` flattens array to depth `n`                |
| 360-tofixed-type.js            | `toFixed()` returns string, not number               |
| 361-infinity-comparisons.js   | Infinity comparisons and division by zero                  |
| 362-nan-comparisons.js        | NaN not equal to itself, use `Object.is()`                 |
| 363-parseint-vs-number.js     | `parseInt` vs `Number` on string input                     |
| 364-parseint-radix.js         | Using radix with `parseInt` to control base                |
| 365-unicode-string-length.js  | Emoji has length 2 due to UTF-16 surrogate pairs           |
| 366-template-literals-expr.js | Template literals evaluate expressions inside `${}`        |
| 367-optional-chaining.js      | Safe access with optional chaining                         |
| 368-nullish-coalescing.js     | `??` only replaces `null` or `undefined`                   |
| 369-bitwise-not-trick.js      | `~index` trick to check for `-1` in `indexOf`              |
| 370-unary-plus.js             | Unary `+` converts to number                               |
| 371-typeof-null.js             | `typeof null` is `'object'`, a long-standing bug      |
| 372-typeof-nan.js              | `typeof NaN` returns `'number'`                       |
| 373-double-negation.js         | Use `!!value` to convert to boolean                   |
| 374-zero-equality.js           | `0 === -0` is true, but `Object.is(0, -0)` is false   |
| 375-string-concat-trick.js     | `+` operator does implicit type coercion              |
| 376-number-isnan-vs-isnan.js   | `isNaN()` coerces, `Number.isNaN()` is strict         |
| 377-boolean-conversion.js      | Truthy and falsy values in Boolean conversion         |
| 378-void-operator.js           | `void` returns `undefined` always                     |
| 379-instanceof-vs-typeof.js    | `instanceof` vs `typeof` to check types               |
| 380-equality-with-arrays.js    | Arrays are compared by reference, not value           |
| 381-array-flat.js              | `flat(n)` flattens an array up to depth `n`            |
| 382-array-flat-infinity.js     | `flat(Infinity)` completely flattens nested arrays     |
| 383-array-from-set.js          | Convert `Set` to `Array` using `Array.from()`          |
| 384-object-keys-order.js       | Integer keys are ordered numerically in objects        |
| 385-in-operator.js             | Checks if a property/index exists in object/array      |
| 386-delete-array-index.js      | `delete` creates a hole, doesn't change array length   |
| 387-optional-chaining.js       | Avoids errors when accessing deep nested properties    |
| 388-nullish-coalescing.js      | `??` returns right side only if left is `null`/`undefined` |
| 389-label-loop-break.js        | Use labels to break nested loops                      |
| 390-generator-function.js      | `function*` creates a generator that yields values     |
| 391-async-function-return.js   | Async functions return Promises                          |
| 392-await-non-promise.js       | Await can be used on non-promises too                    |
| 393-async-await-error.js       | Errors in async functions are caught with `.catch()`     |
| 394-promise-all.js             | `Promise.all()` resolves when all promises resolve       |
| 395-promise-race.js            | `Promise.race()` resolves/rejects with first settled one |
| 396-settimeout-0.js            | `setTimeout(..., 0)` runs after current call stack       |
| 397-async-loop-trap.js         | `var` causes closure issues inside async loops           |
| 398-async-loop-let.js          | `let` scopes each iteration correctly in loops           |
| 399-await-in-loop.js           | Awaiting inside loop runs sequentially                   |
| 400-top-level-await.mjs        | Top-level `await` works in modules (`.mjs`)              |
| 401-class-basic.js             | Class with constructor and method                     |
| 402-class-inheritance.js       | Class inheritance and `super()` usage                 |
| 403-static-method.js           | Static method in a class                              |
| 404-getter-setter.js           | Using `get` and `set` for properties                  |
| 405-instanceof-check.js        | `instanceof` checks object constructor                |
| 406-closure-inside-class.js    | Closure behavior inside class methods                 |
| 407-class-private-field.js     | Class field using `#` syntax for private fields       |
| 408-class-expression.js        | Anonymous class expression                            |
| 409-bound-method.js            | Method binding to preserve `this`                    |
| 410-object-from-entries.js     | Create object from key-value pairs using `.fromEntries()` |
| 411-array-find-vs-filter.js      | Difference between `.find()` and `.filter()`                                  |
| 412-array-sort-without-compare.js| `.sort()` converts values to strings, causing numeric issues                  |
| 413-null-equality.js             | `null == undefined` is `true`, but `===` is `false`                           |
| 414-async-function-return.js     | Async functions always return a Promise                                       |
| 415-function-name-property.js    | Named function expressions retain name via `.name`                            |
| 416-promise-finally.js           | `.finally()` runs regardless of resolve or reject                             |
| 417-json-parse-extra-comma.js    | JSON doesn't support trailing commas                                          |
| 418-typeof-nan.js                | `typeof NaN` returns `'number'`                                               |
| 419-bigint-limits.js             | Use `BigInt` for safe handling of very large numbers                          |
| 420-array-isarray-vs-instanceof.js | Compare `Array.isArray()` and `instanceof Array`                             |
| 421-array-clone-structured.js    | Deep cloning using `structuredClone()`                                       |
| 422-parseint-vs-number.js        | Difference between `parseInt()` and `Number()` for strings                   |
| 423-optional-chaining.js         | Safe access to nested properties using `?.`                                   |
| 424-boolean-double-negation.js   | Convert any value to boolean using `!!`                                       |
| 425-object-key-order.js          | Object key ordering puts numeric keys first                                   |
| 426-loop-return-label.js         | Use labeled blocks to break from nested loops                                 |
| 427-math-random-range.js         | Get random integer between two values inclusive                               |
| 428-string-reverse.js            | Reverse string using split-reverse-join                                       |
| 429-destructure-nested-object.js | Destructure deeply nested object properties                                   |
| 430-array-empty-vs-length.js     | Sparse arrays created by setting index directly                               |
| 431-promise-resolve-then.js      | `Promise.resolve()` executes `.then()` asynchronously                         |
| 432-null-instanceof-object.js    | `null instanceof Object` is `false`                                           |
| 433-array-concat-non-array.js    | `.concat()` with non-array adds as single element                             |
| 434-symbol-tostring.js           | Symbols can be stringified with `.toString()`                                 |
| 435-set-to-array.js              | Convert `Set` to array with `[...set]`                                        |
| 436-object-values-order.js       | `Object.values()` preserves insertion order                                   |
| 437-for-await-of-array.js        | `for await...of` works with async iterables                                   |
| 438-regex-lastindex.js           | Global RegExp updates `.lastIndex` across uses                                |
| 439-array-every-empty.js         | `.every()` on empty array returns `true`                                      |
| 440-float-precision.js           | JS float precision quirk: `0.1 + 0.2 !== 0.3`                                  |
| 441-string-replace-all.js        | Use `replaceAll()` to replace all substrings                                 |
| 442-json-stringify-replacer.js   | Use `JSON.stringify()` with replacer array to filter keys                     |
| 443-boolean-object-truthy.js     | `new Boolean(false)` is truthy in conditionals                                |
| 444-array-sparse-length.js       | Setting high index increases array length (sparse array)                      |
| 445-in-operator-vs-hasown.js     | Difference between `in` and `hasOwnProperty()`                                |
| 446-instanceof-custom.js         | `instanceof` works with custom class checks                                   |
| 447-symbol-non-enumerable.js     | Symbol keys are not enumerable via `Object.keys()`                            |
| 448-array-reduce-no-init.js      | `reduce()` without initial value uses first item                              |
| 449-delete-array-element.js      | `delete` removes value but leaves `empty` slot                                |
| 450-string-padstart.js           | Use `.padStart()` to left-pad strings to fixed length                         |               
| 451-optional-chaining.js     | Safe property access using `?.`.                      |
| 452-nullish-coalescing.js    | Use `??` to fallback only for `null` or `undefined`.  |
| 453-object-hasown.js         | Safer object key check with `Object.hasOwn()`.        |
| 454-array-at-method.js       | Access array items using `.at()` (including negatives).|
| 455-object-groupby.js        | Group array objects by a property.                    |
| 456-logical-assignment.js    | Use logical assignment operators like `||=`, `&&=`, `??=`. |
| 457-array-some.js            | Check if some elements pass a condition.              |
| 458-object-destructuring.js  | Destructure objects with default values.              |
| 459-remove-duplicates.js     | Remove duplicates from array using `Set`.             |
| 460-array-sort-numeric.js    | Proper numeric array sorting with compare function.   |
| 461-array-sort-numeric.js      | Sort numbers in an array numerically         |
| 462-object-property-check.js   | Check if property exists in an object        |
| 463-string-replace-all.js      | Replace all occurrences in a string          |
| 464-array-filter-truthy.js     | Filter truthy values from an array           |
| 465-parsefloat-int.js          | Difference between parseInt and parseFloat   |
| 466-object-fromarray-reduce.js | Create object from array using reduce        |
| 467-array-isarray.js           | Check if a variable is an array              |
| 468-nan-comparison.js          | Proper comparison of NaN values              |
| 469-json-parse-error.js        | Handle JSON parsing errors                   |
| 470-string-padstart.js         | Pad string from start to fixed length        |
| 471-array-includes-vs-indexof.js | `includes()` vs `indexOf()` for checking values |
| 472-nullish-coalescing.js        | `??` nullish coalescing operator                |
| 473-optional-chaining.js         | `?.` optional chaining                          |
| 474-map-vs-foreach.js            | Difference between `.map()` and `.forEach()`    |
| 475-async-await-return.js        | `async` functions always return a Promise       |
| 476-array-reduce-sum.js          | Use `.reduce()` to sum array values             |
| 477-parseint-radix.js            | Importance of radix in `parseInt()`             |
| 478-set-uniques.js               | Using `Set` to get unique values from array     |
| 479-object-destructuring.js      | Object destructuring                            |
| 480-function-default-params.js   | Default parameters in functions                 |
| 481-boolean-conversion.js    | Convert values to boolean using !!              |
| 482-array-flatten.js         | Flatten nested arrays using flat()              |
| 483-object-keys-length.js    | Count object keys using Object.keys().length    |
| 484-template-literals.js     | Use template literals for string interpolation  |
| 485-try-catch-error.js       | Handle runtime errors with try-catch            |
| 486-string-trim.js           | Trim whitespace using trim()                    |
| 487-array-find.js            | Find first match in array using find()          |
| 488-array-from.js            | Convert iterable or array-like to array using Array.from() |
| 489-number-isfinite.js       | Check if value is finite using Number.isFinite()|
| 490-object-entries.js        | Convert object to key-value pairs with Object.entries() |
| 491-array-reduce-sum.js      | Sum array elements using reduce()                    |
| 492-object-values.js         | Extract object values using Object.values()          |
| 493-optional-chaining.js     | Safely access nested properties using ?.             |
| 494-nullish-coalescing.js    | Use ?? to handle null or undefined                   |
| 495-string-padstart.js       | Pad string from start using padStart()               |
| 496-string-padend.js         | Pad string from end using padEnd()                   |
| 497-map-basics.js            | Create and use a Map object                          |
| 498-set-basics.js            | Create and use a Set object                          |
| 499-object-hasown.js         | Check property existence using Object.hasOwn()       |
| 500-boolean-toggle.js        | Toggle a boolean value                               |
| 501-map-object-entries.js       | Iterate object using `Object.entries()` with `map` |
| 502-array-deduplicate-set.js    | Remove duplicates from an array using `Set`        |
| 503-function-default-param.js   | Default function parameters                        |
| 504-string-template-literals.js | Using template literals for string construction    |
| 505-number-to-fixed.js          | Format number to fixed decimal places              |
| 506-array-splice-vs-slice.js    | Difference between `splice` and `slice`            |
| 507-object-destructuring.js     | Destructuring properties from an object            |
| 508-array-find-vs-filter.js     | `find()` vs `filter()` on arrays                   |
| 509-date-formatting.js          | Format a date into DD/MM/YYYY format               |
| 510-async-await-error.js        | Handle async/await with `try/catch`                |
| 511-array-length-vs-index.js   | Difference between `.length` and highest index |
| 512-float-modulo-issue.js      | Floating-point modulo precision issue         |
| 513-symbol-unique.js           | Every Symbol is unique                       |
| 514-json-stringify-replacer.js | Customize `JSON.stringify()` with replacer    |
| 515-array-includes-vs-indexof.js| `.includes()` vs `.indexOf()`                 |
| 516-set-has-performance.js     | `.has()` in Set is faster than in Array       |
| 517-promise-chaining.js        | Chaining `.then()` in Promises                |
| 518-math-max-apply.js          | Use `Math.max` on array with `apply`          |
| 519-function-arguments-length.js| `.length` of function vs `arguments.length`   |
| 520-object-hasown.js           | `Object.hasOwn()` vs `hasOwnProperty()`       |
| 521-capitalize-words.js        | Capitalize first letter of each word in string |
| 522-count-vowels.js            | Count vowels in a string                        |
| 523-remove-duplicates-array.js | Remove duplicate elements from an array         |
| 524-is-empty-object.js         | Check if an object is empty                     |
| 525-get-file-extension.js      | Extract file extension from filename            |
| 526-truncate-string.js         | Truncate a string with ellipsis                 |
| 527-deep-clone.js              | Deep clone an object using JSON                 |
| 528-object-from-pairs.js       | Convert array of pairs to object                |
| 529-is-palindrome.js           | Check if a string is a palindrome               |
| 530-merge-objects.js           | Merge two objects into one                      |
| 531-object-values.js             | Get values of an object using `Object.values()`  |
| 532-object-entries.js            | Convert object to array of key-value pairs       |
| 533-array-includes.js            | Check if an array includes a value               |
| 534-array-concat.js              | Merge arrays using `concat()`                    |
| 535-object-seal.js               | Prevent new properties but allow modifications   |
| 536-object-freeze.js             | Make an object completely immutable              |
| 537-nullish-coalescing.js        | Use `??` operator for default values             |
| 538-optional-chaining.js         | Use `?.` to safely access nested properties      |
| 539-array-length-truncate.js     | Truncate array by setting `.length`              |
| 540-json-stringify-replacer.js   | Filter JSON.stringify() output using replacer    |
| 541-array-concat.js              | Concatenate two arrays                      |
| 542-object-hasownproperty.js     | Check if object has specific property       |
| 543-string-search.js             | Search for substring in a string            |
| 544-array-map-index.js           | Map array with index                        |
| 545-typeof-null.js               | `typeof null` returns 'object' quirk        |
| 546-array-reduce-sum.js          | Sum array values using `reduce`             |
| 547-object-values-length.js      | Get number of properties in object          |
| 548-string-uppercase.js          | Convert string to uppercase                 |
| 549-array-find-object.js         | Find object in array by key                 |
| 550-object-merge.js              | Merge two objects using spread operator     |
| 551-array-flat.js                | Flatten nested arrays                        |
| 552-object-entries.js            | Convert object to key-value pairs            |
| 553-string-trim.js               | Remove whitespace from both ends of string   |
| 554-array-includes.js            | Check if array contains a value              |
| 555-optional-chaining-call.js    | Safely call function using optional chaining |
| 556-object-assign.js             | Copy properties from source to target object |
| 557-string-repeat.js             | Repeat a string multiple times               |
| 558-array-some.js                | Check if some array elements pass a test     |
| 559-number-isfinite.js           | Check if a value is a finite number          |
| 560-object-freeze.js             | Make object immutable using `Object.freeze`  |
| 561-array-every.js               | Check if all array elements pass a test          |
| 562-object-seal.js               | Prevent adding/removing properties but allow edit|
| 563-string-startswith.js         | Check if string starts with given substring      |
| 564-string-endswith.js           | Check if string ends with given substring        |
| 565-number-parsefloat.js         | Parse a string into a floating-point number      |
| 566-number-parseint.js           | Parse a string into an integer                   |
| 567-array-fill.js                | Fill all array elements with a static value      |
| 568-object-fromentries.js        | Convert key-value pairs array into an object     |
| 569-string-includes.js           | Check if a string contains a substring           |
| 570-number-isinteger.js          | Check if a value is an integer                   |
| 571-array-some.js                | Check if any array element passes a test           |
| 572-object-freeze.js             | Prevent any changes to object properties           |
| 573-string-repeat.js             | Repeat a string multiple times                     |
| 574-array-flat.js                 | Flatten nested arrays to given depth               |
| 575-array-flatmap.js              | Map and flatten array in one step                  |
| 576-string-trim.js               | Remove whitespace from both ends of a string       |
| 577-string-trimstart.js          | Remove whitespace from start of a string           |
| 578-string-trimend.js            | Remove whitespace from end of a string             |
| 579-number-issafeinteger.js      | Check if a number is a safe integer                 |
| 580-math-clz32.js                 | Count leading zero bits of 32-bit integer          |
| 581-math-imul.js                  | Perform 32-bit integer multiplication              |
| 582-math-log10.js                 | Get base-10 logarithm of a number                  |
| 583-math-log2.js                  | Get base-2 logarithm of a number                   |
| 584-math-log1p.js                 | Natural log of (1 + number)                        |
| 585-math-expm1.js                 | e^x - 1 calculation                                |
| 586-math-hypot.js                 | Calculate square root of sum of squares            |
| 587-array-copywithin.js           | Copy array elements within the same array          |
| 588-array-from.js                 | Create array from iterable or array-like object    |
| 589-array-of.js                   | Create array from arguments                        |
| 590-object-assign.js              | Copy properties from one object to another         |
| 591-object-entries.js             | Get array of key-value pairs from object           |
| 592-object-getownpropertynames.js | Get all property names of object                   |
| 593-object-getprototypeof.js      | Get prototype of an object                         |
| 594-object-is.js                  | Compare values for strict equality                 |
| 595-object-keys.js                | Get array of object's own keys                     |
| 596-object-preventextensions.js   | Prevent adding new properties to an object         |
| 597-object-values.js              | Get array of object's own values                   |
| 598-string-charat.js              | Get character at specific index                    |
| 599-string-charcodeat.js          | Get UTF-16 code unit at given index                 |
| 600-string-codepointat.js         | Get Unicode code point at given position           |
| 601-string-fromcharcode.js       | Create string from UTF-16 code units               |
| 602-string-fromcodepoint.js      | Create string from Unicode code points             |
| 603-string-includes.js           | Check if string contains a substring               |
| 604-string-indexof.js            | Find index of substring in string                  |
| 605-string-lastindexof.js        | Find last index of substring in string             |
| 606-string-localecompare.js      | Compare strings according to locale                 |
| 607-string-match.js              | Match string with regex                            |
| 608-string-matchall.js           | Get all regex matches with capturing groups        |
| 609-string-normalize.js          | Normalize Unicode string                           |
| 610-string-padend.js             | Pad end of string to target length                 |
| 611-string-search.js             | Search string with regex                           |
| 612-string-slice.js              | Extract part of a string                           |
| 613-string-split.js              | Split string into array by separator               |
| 614-string-startswith.js         | Check if string starts with given substring        |
| 615-string-substring.js          | Extract substring by start/end indexes             |
| 616-string-tolocaleLowercase.js  | Convert string to lowercase with locale rules      |
| 617-string-tolocaleUppercase.js  | Convert string to uppercase with locale rules      |
| 618-string-tolowercase.js        | Convert string to lowercase                        |
| 619-string-touppercase.js        | Convert string to uppercase                        |
| 620-string-toString.js           | Convert String object to string primitive          |
| 621-string-valueof.js            | Get primitive value of String object               |
| 622-template-literals.js         | Use template literals with expressions             |
| 623-array-entries.js             | Get array iterator of index-value pairs            |
| 624-array-keys.js                | Get array iterator of keys                         |
| 625-array-values.js              | Get array iterator of values                       |
| 626-array-findindex.js           | Find index of first element matching condition     |
| 627-array-fill.js                 | Fill array elements with static value              |
| 628-array-includes.js            | Check if array contains a value                    |
| 629-array-tostring.js            | Convert array to string                            |
| 630-array-join.js                | Join array elements into string with separator     |
| 631-asyncawait.js        | Async functions always return a Promise. |
| 632-eventloop.js         | Event loop: async callbacks run after sync code. |
| 633-hoisting.js          | var declarations are hoisted with `undefined`. |
| 634-closure.js           | Closures remember outer scope variables. |
| 635-thisbinding.js       | `this` loses context when function is detached. |
| 636-promisechain.js      | Promise chaining with error handling. |
| 637-objectreference.js   | Objects are reference types, not copied by value. |
| 638-typecoercion.js      | `+` operator with strings triggers concatenation. |
| 639-undefinednull.js     | null == undefined is true, but null === undefined is false. |
| 640-iife.js              | IIFE creates its own scope, variables not accessible outside. |
| 641-temporaldeadzone.js  | let/const in Temporal Dead Zone until initialized. |
| 642-arraymap.js          | Array.map applies function to each element. |
| 643-implicitcoercion.js  | `[] + []` coerces arrays to empty strings. |
| 644-prototypechain.js    | Prototype chain allows method inheritance. |
| 645-equalitytricky.js    | `==` allows coercion, `===` checks strict equality. |
| 646-setunique.js         | Set stores unique values, spread returns unique array. |
| 647-destructuring.js     | Array destructuring with skipped elements. |
| 648-optionalchaining.js  | Optional chaining avoids errors for missing properties. |
| 649-nullishcoalescing.js | `??` checks for null/undefined only, not falsy values. |
| 650-stringtemplate.js    | Template literals allow string interpolation with `${}`. |
| 651-spreadoperator.js    | Spread `...` expands arrays/objects into elements. |
| 652-restparameter.js     | Rest `...` collects function arguments into an array. |
| 653-defaultparams.js     | Function parameters can have default values. |
| 654-arrayreduce.js       | Array.reduce accumulates values into a single result. |
| 655-arrayfilter.js       | Array.filter returns elements matching a condition. |
| 656-arrayfind.js         | Array.find returns the first matching element. |
| 657-arrayevery.js        | Array.every checks if all elements satisfy a condition. |
| 658-arraysome.js         | Array.some checks if at least one element matches. |
| 659-arrayincludes.js     | Array.includes checks if an element exists. |
| 660-optionalparams.js    | Functions can handle missing arguments gracefully. |
| 661-currying.js          | Currying transforms function with multiple args into nested functions. |
| 662-functioncomposition.js| Combine functions where output of one is input to another. |
| 663-purefunction.js      | Pure functions return same output for same input. |
| 664-impurefunction.js    | Impure functions rely on/modify external state. |
| 665-memoization.js       | Memoization caches function results for efficiency. |
| 666-callapplybind.js     | `call`, `apply`, `bind` control `this` and arguments. |
| 667-eventdelegation.js   | Event delegation leverages bubbling for efficiency. |
| 668-debounce.js          | Debounce delays function execution until inactivity. |
| 669-throttle.js          | Throttle ensures function executes at controlled intervals. |
| 670-generators.js        | Generators (`function*`) yield values lazily using `yield`. |
| 671-asyncawaiterror.js   | Async/Await error handling with try/catch |
| 672-optionalchaining.js  | Optional chaining (?.) usage |
| 673-nullishcoalescing.js | Nullish coalescing (??) operator |
| 674-arrayflat.js         | Array .flat() and .flatMap() |
| 675-promiseallsettled.js | Promise.allSettled() vs Promise.all |
| 676-weakset.js           | WeakSet basics and use-cases |
| 677-weakmap.js           | WeakMap for private object data |
| 678-dynamicimport.js     | Dynamic import() usage |
| 679-generatorasync.js    | Async Generators (async function*) |
| 680-proxyobject.js       | Proxy objects and traps |
| 681-bigint.js            | BigInt basics |
| 682-globalthis.js        | globalThis usage |
| 683-finallyblock.js      | Promise finally block |
| 684-logicalassignment.js | Logical assignment operators (&&=, ||=, ??=) |
| 685-stringmatchall.js    | String matchAll |
| 686-topromiseany.js      | Promise.any example |
| 687-privateclassfields.js| Private class fields (#field) |
| 688-aggregateerror.js    | AggregateError example |
| 689-numericseparators.js | Numeric separators for readability |
| 690-objectfromentries.js | Object.fromEntries usage |
| 691-sharedarraybuffer.js | SharedArrayBuffer basics |
| 692-atomics.js | Using Atomics for thread-safe operations |
| 693-performanceapi.js | Performance API |
| 694-intersectionobserver.js | IntersectionObserver for lazy loading |
| 695-mutationobserver.js | MutationObserver to watch DOM changes |
| 696-resizeobserver.js | ResizeObserver API |
| 697-intlpluralrules.js | Intl.PluralRules |
| 698-intllistformat.js | Intl.ListFormat |
| 699-intlrelativetimeformat.js | Intl.RelativeTimeFormat |
| 700-finalizationregistry.js | FinalizationRegistry |
| 701-textencoder.js         | Encode text into Uint8Array             |
| 702-textdecoder.js         | Decode Uint8Array back to string        |
| 703-dataview.js            | Access ArrayBuffer with DataView        |
| 704-setprototypeof.js      | Change an object's prototype            |
| 705-getprototypeof.js      | Get an object's prototype               |
| 706-reflect-apply.js       | Use Reflect.apply to call a function    |
| 707-reflect-construct.js   | Use Reflect.construct for object creation |
| 708-reflect-defineprop.js  | Define property using Reflect           |
| 709-reflect-deleteprop.js  | Delete property using Reflect           |
| 710-reflect-ownkeys.js     | List all keys of an object with Reflect |
| 711-queue-microtask.js   | queueMicrotask basics |
| 712-navigator-online.js  | navigator.onLine usage |
| 713-matchmedia.js        | matchMedia API |
| 714-performance-now.js   | High resolution time with performance.now |
| 715-btoa-atob.js         | Base64 encode/decode with btoa & atob |
| 716-textencoder.js       | Encoding text using TextEncoder |
| 717-textdecoder.js       | Decoding bytes with TextDecoder |
| 718-history-api.js       | Using History API pushState |
| 719-beforeunload.js      | beforeunload event handling |
| 720-clipboard-api.js     | Copying text with Clipboard API |
| 721-date-basics.js | Date basics |
| 722-date-getters.js | Date getters |
| 723-date-setters.js | Date setters |
| 724-date-parse.js | Date.parse |
| 725-date-now.js | Date.now |
| 726-date-toISOString.js | Date.toISOString |
| 727-date-toLocaleString.js | Date.toLocaleString |
| 728-date-diff.js | Date difference |
| 729-date-comparison.js | Date comparison |
| 730-date-custom-format.js | Custom date format |
| 731-set-basics.js | Set Basics |
| 732-set-add.js | Adding values to a Set |
| 733-set-has.js | Checking presence in Set |
| 734-set-delete.js | Deleting values from Set |
| 735-set-clear.js | Clearing Set |
| 736-set-size.js | Size of Set |
| 737-set-iteration.js | Iterating over Set |
| 738-set-foreach.js | forEach with Set |
| 739-set-vs-array.js | Set vs Array |
| 740-set-convert-array.js | Convert Set to Array |
| 741-set-union.js | Union of Sets |
| 742-set-intersection.js | Intersection of Sets |
| 743-set-difference.js | Difference of Sets |
| 744-set-symmetric-difference.js | Symmetric Difference |
| 745-set-objects.js | Objects in Set |
| 746-set-reference.js | Object Reference in Set |
| 747-set-performance.js | Set Performance vs Array |
| 748-set-weakset.js | WeakSet Intro |
| 749-set-usecase-unique.js | Removing duplicates using Set |
| 750-set-usecase-tags.js | Managing unique tags |
| 751-navigator-basics.js | Navigator Basics |
| 752-navigator-useragent.js | User Agent |
| 753-navigator-language.js | Language |
| 754-navigator-languages.js | Languages |
| 755-navigator-online.js | Online/Offline Detection |
| 756-navigator-cookieenabled.js | Cookies Enabled |
| 757-navigator-plugins.js | Plugins |
| 758-navigator-mimetypes.js | MIME Types |
| 759-navigator-clipboard.js | Clipboard Write |
| 760-navigator-clipboard-read.js | Clipboard Read |
| 761-navigator-geolocation.js | Geolocation |
| 762-navigator-geolocation-watch.js | Geolocation Watch |
| 763-navigator-media-devices.js | Media Devices |
| 764-navigator-hardware-concurrency.js | Hardware Concurrency |
| 765-navigator-device-memory.js | Device Memory |
| 766-navigator-serviceworker.js | Service Worker Support |
| 767-navigator-credentials.js | Credentials API |
| 768-navigator-sendbeacon.js | SendBeacon |
| 769-navigator-usb.js | USB API |
| 770-navigator-share.js | Share API |
| 771-navigator-userAgent.js | User Agent |
| 772-navigator-language.js | Language |
| 773-navigator-languages.js | Languages |
| 774-navigator-onLine.js | Online/Offline Detection |
| 775-navigator-platform.js | Platform |
| 776-navigator-product.js | Product (Rendering Engine) |
| 777-navigator-cookiesEnabled.js | Cookies Enabled |
| 778-navigator-javaEnabled.js | Java Enabled |
| 779-navigator-vibrate.js | Vibrate API |
| 780-navigator-clipboard.js | Clipboard API |
| 781-navigator-mediaDevices.js | Media Devices (Camera/Microphone) |
| 782-navigator-geolocation.js | Geolocation |
| 783-navigator-serviceWorker.js | Service Worker |
| 784-navigator-hardwareConcurrency.js | Hardware Concurrency |
| 785-navigator-deviceMemory.js | Device Memory |
| 786-navigator-connection.js | Network Information |
| 787-navigator-sendBeacon.js | Send Beacon |
| 788-navigator-permissions.js | Permissions API |
| 789-navigator-credentials.js | Credential Management API |
| 790-navigator-usb.js | USB API |
| 791-symmetric-difference.js | Find elements unique to each set.                     |
| 792-subset-check.js        | Verify if all elements of one set exist in another.    |
| 793-superset-check.js | Confirm one set contains another. |
| 794-disjoint-sets.js | Ensure two sets share no elements. |
| 795-power-set.js | Generate all possible subsets. |
| 796-cartesian-product.js | All ordered pairs between two sets. |
| 797-remove-duplicates.js | Use Set to deduplicate an array. |
| 798-frequency-counter.js | Count occurrences of words in text. |
| 799-unique-strings.js | Check if string has all unique chars. |
| 800-unique-objects.js | Deduplicate objects by property (e.g., id). |
| 801-union-multiple-sets.js | Merge multiple sets into one. |
| 802-intersection-multiple-sets.js | Get common elements across many sets. |
| 803-symmetric-diff-multiple.js | Elements appearing in odd number of sets. |
| 804-set-from-string.js | Get unique characters from a string. |
| 805-set-to-string.js | Convert set back to string. |
| 806-set-to-array.js | Convert set into array. |
| 807-array-to-set.js | Convert array into set. |
| 808-clone-set.js | Duplicate a set. |
| 809-compare-sets.js | Check if two sets are equal. |
| 810-merge-sets-array.js | Merge multiple sets into single array. |
| 811-remove-words.js | Remove banned words from text. |
| 812-unique-subarrays.js | Remove duplicate subarrays. |
| 813-unique-pairs.js | Store unique pairs of numbers. |
| 814-filter-set.js | Keep only even numbers from set. |
| 815-map-set.js | Apply function to each element in set. |
| 816-reduce-set.js | Reduce set to single value (e.g., sum). |
| 817-set-union-strings.js | Merge sets of characters. |
| 818-count-unique-words.js | Count number of unique words in text. |
| 819-remove-falsy.js | Remove falsy values from set. |
| 820-set-operations-lib.js | Common set operations library (union, etc). |
| 821-unique-emails.js | Normalize emails and count unique ones. |
| 822-intersection-size.js | Find number of common elements in two sets. |
| 823-difference-size.js | Find size of difference set. |
| 824-union-size.js | Count total unique elements across sets. |
| 825-is-empty-set.js | Verify if a set is empty. |
| 826-clear-set.js | Remove all elements from a set. |
| 827-set-vs-array-lookup.js | Compare lookup performance. |
| 828-union-all.js | Union operation on array of sets. |
| 829-find-missing.js | Identify missing elements from a range. |
| 830-intersection-all.js | Find common elements across multiple sets. |
| 831-set-difference-multiple.js | Remove elements of all other sets from first. |
| 832-symmetric-diff-size.js | Count unique elements in symmetric difference. |
| 833-unique-ids.js | Extract unique ids from objects array. |
| 834-track-visits.js | Track visited pages using Set. |
| 835-remove-chars.js | Remove unwanted chars from string. |
| 836-unique-nums-range.js | Count unique nums in given range. |
| 837-check-palindrome-permutation.js| Check if string can be rearranged into palindrome. |
| 838-first-duplicate.js | Find first duplicate element in array. |
| 839-longest-unique-substring.js | Find length of longest substring without repeats. |
| 840-unique-pairs-sum.js | Find unique pairs with target sum. |                           
| 841-set-to-json.js              | Convert Set to JSON string.                   |
| 842-json-to-set.js              | Convert JSON string back to Set.              |
| 843-set-union-function.js       | Reusable union function for Sets.             |
| 844-set-intersection-function.js| Reusable intersection function for Sets.      |
| 845-set-difference-function.js  | Reusable difference function for Sets.        |
| 846-symmetric-diff-function.js  | Symmetric difference utility.                 |
| 847-set-to-map.js               | Convert Set into Map.                         |
| 848-map-to-set.js               | Convert Map into Set.                         |
| 849-set-group-by-length.js      | Group strings by length using Set + Map.      |
| 850-set-performance-large.js    | Performance comparison: Set vs Array lookup.  |
| 851-set-union-n-sets.js         | Union of N sets efficiently.                  |
| 852-set-cartesian-multi.js      | Cartesian product of multiple sets.           |
| 853-set-combinations-k.js       | Generate k-combinations from Set.             |
| 854-set-permutations.js         | Generate permutations of Set elements.        |
| 855-set-power-recursive.js      | Recursive power set generation.               |
| 856-set-unique-subarrays.js     | Deduplicate array of arrays using Set.        |
| 857-set-anagrams.js             | Group words that are anagrams.                |
| 858-set-unique-pairs.js         | Store unique pairs using Set.                 |
| 859-set-of-sets.js              | Nesting Sets inside another Set.              |
| 860-set-equality-check.js       | Check equality between two Sets.              |
| 861-set-to-linkedlist.js        | Convert Set to Linked List.                   |
| 862-linkedlist-to-set.js        | Convert Linked List to Set.                   |
| 863-set-union-performance.js    | Benchmark union performance on large Sets.    |
| 864-set-vs-object-keys.js       | Compare Set with Object keys usage.           |
| 865-set-intersection-large.js   | Optimize intersection for large datasets.     |
| 866-set-difference-large.js     | Efficient difference for large datasets.      |
| 867-set-union-vs-concat.js      | Use concat + Set for quick union.             |
| 868-set-to-binarytree.js        | Convert Set to Binary Search Tree.            |
| 869-binarytree-to-set.js        | Convert Binary Search Tree back to Set.       |
| 870-set-symmetric-multi.js      | Symmetric difference across multiple Sets.    |
| 871-set-random-element.js       | Pick a random element from Set.               |
| 872-set-shuffle.js              | Shuffle elements of a Set.                    |
| 873-set-union-stream.js         | Union of streaming data using Set.            |
| 874-set-memory-usage.js         | Measure memory usage of Set.                  |
| 875-set-vs-array-memory.js      | Compare memory of Set vs Array.               |
| 876-set-benchmark-add.js        | Benchmark performance of Set add().           |
| 877-set-benchmark-has.js        | Benchmark performance of Set has().           |
| 878-set-benchmark-delete.js     | Benchmark performance of Set delete().        |
| 879-set-size-vs-length.js       | Understand size vs length in Set.             |
| 880-set-clear.js                | Clear all elements from a Set.                |
| 881-set-union-multiple.js       | Union of multiple Sets.                       |
| 882-set-intersection-multiple.js| Intersection across multiple Sets.            |
| 883-symmetric-difference-multiple.js | Symmetric difference across multiple Sets.|
| 884-subset-strict.js            | Strict subset check.                          |
| 885-superset-strict.js          | Strict superset check.                        |
| 886-set-to-array.js             | Convert Set to Array.                         |
| 887-array-to-set.js             | Convert Array to Set.                         |
| 888-set-to-json.js              | Convert Set to JSON.                          |
| 889-json-to-set.js              | Convert JSON to Set.                          |
| 890-set-shallow-copy.js         | Shallow copy of a Set.                        |
| 891-set-deep-copy.js            | Deep copy of a Set.                           |
| 892-set-difference.js           | Difference between two Sets.                  |
| 893-set-symmetric-difference.js | Symmetric difference between two Sets.        |
| 894-set-equality.js             | Equality check between two Sets.              |
| 895-set-is-empty.js             | Check if a Set is empty.                      |
| 896-set-size-limit.js           | Enforce size limit on a Set.                  |
| 897-set-random-element.js       | Pick random element from a Set.               |
| 898-set-clear.js                | Clear all elements from a Set.                |
| 899-set-for-each.js             | Iterate using forEach on Set.                 |
| 900-set-iteration.js            | Iterate through Set values with for...of.     |




## 🧠 How to Use

- Read the code, **predict the output** before running.
- Use terminal or browser console to verify.
- Read the explanation in the comments to deepen understanding.

Happy debugging and predicting! 🔥
