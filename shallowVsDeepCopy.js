// shallow_vs_deep_copy.js

/**
 * Title: Shallow Copy vs Deep Copy in JavaScript
 * Description: This file demonstrates the difference between shallow and deep copies in JavaScript,
 *              with definitions, examples, and best practices.
 */

/**
 * Shallow Copy:
 * A shallow copy means copying an object's top-level properties. If any property is an object,
 * the reference to that object is copied, not the object itself.
 * Changes to nested objects in the copy affect the original.
 */

let obj = { a: 4, b: { c: 5 } };
let shallowCopy = { ...obj }; // Shallow copy using spread operator
shallowCopy.b.c = 99;

console.log("Shallow Copy Example:");
console.log("original obj:", obj);           // { a: 4, b: { c: 99 } }
console.log("shallowCopy obj:", shallowCopy); // { a: 4, b: { c: 99 } }

console.log("...........");

/**
 * Deep Copy:
 * A deep copy means copying all properties recursively, including nested objects.
 * Changes to nested structures in the copy do NOT affect the original.
 */

let obj2 = { a: 40, b: { c: 50 } };
let deepCopy = JSON.parse(JSON.stringify(obj2)); // Deep copy using JSON methods

deepCopy.b.c = 990;

console.log("Deep Copy using JSON Example:");
console.log("original obj2:", obj2);           // { a: 40, b: { c: 50 } }
console.log("deepCopy obj:", deepCopy);        // { a: 40, b: { c: 990 } }

console.log("...........");

/**
 * Deep Copy (Modern Approach):
 * structuredClone() is a built-in method in modern browsers to perform deep cloning.
 */

let obj3 = { a: 400, b: { c: 500 } };
let structuredCloneObj = structuredClone(obj3); // Deep copy using structuredClone()
structuredCloneObj.b.c = 9900;

console.log("Deep Copy using structuredClone Example:");
console.log("original obj3:", obj3);                 // { a: 400, b: { c: 500 } }
console.log("structuredCloneObj:", structuredCloneObj); // { a: 400, b: { c: 9900 } }

console.log("...........");

/**
 * Best Practices:
 * - Use shallow copies for performance when deep changes aren't needed.
 * - Use deep copies when modifying nested data structures.
 * - Prefer `structuredClone()` over JSON methods for deep copies, especially when the object has:
 *     - Dates
 *     - Maps/Sets
 *     - Circular references
 *     - undefined, Infinity, RegExp, etc. (unsupported in JSON)
 */
