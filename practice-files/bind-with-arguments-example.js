// bind-with-arguments-example.js

'use strict';

/**
 * This function multiplies two numbers.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Now let's use bind() to create a new function 'double' where:
 * - The first argument (a) is permanently set to 2
 * - The second argument (b) can still be passed when we call 'double'
 *
 * Syntax: bind(thisArg, arg1, arg2, ...)
 */
const double = multiply.bind(null, 2);

/**
 * This is equivalent to writing:
 * function double(b) {
 *   return multiply(2, b);
 * }
 */

console.log("double(5) =>", double(5)); // 2 * 5 = 10
console.log("double(10) =>", double(10)); // 2 * 10 = 20

// Let's create another version where we triple a number
const triple = multiply.bind(null, 3);
console.log("triple(4) =>", triple(4)); // 3 * 4 = 12

/**
 * Why 'null' as the first argument?
 * - Because 'multiply' does not use 'this', we don't care about the 'thisArg'.
 * - If the function did rely on 'this', you'd pass the appropriate object instead.
 */

console.log("\nYou can use bind() to create partially applied functions,");
console.log("which is helpful when you want to reuse a function with fixed parameters.");