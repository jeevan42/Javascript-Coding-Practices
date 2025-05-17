/**
 * Concept: Currying
 *
 * Definition:
 * Currying is a technique of converting a function with multiple arguments
 * into a sequence of nested functions, each taking one argument at a time.
 *
 * Use case:
 * Functional programming, partial application, better readability.
 *
 * Example:
 * Create a curried add function: add(2)(3)(4) === 9
 */

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Result of add(2)(3)(4):", add(2)(3)(4)); // Output: 9
