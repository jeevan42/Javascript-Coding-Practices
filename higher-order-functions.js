/**
 * Higher Order Functions in JavaScript
 *
 * 👉 Definition:
 * A Higher Order Function is a function that either:
 *   1. Takes one or more functions as arguments, OR
 *   2. Returns a function as its result.
 * 
 * In JavaScript, functions are first-class citizens — they can be assigned to variables,
 * passed as arguments, or returned from other functions.
 */

// ✅ Example 1: Function that takes another function as an argument
function greetUser(name, formatterFn) {
  return formatterFn(name);
}

function toUpper(str) {
  return `Hello, ${str.toUpperCase()}!`;
}

console.log(greetUser("jeevan", toUpper)); // Hello, JEEVAN!


// ✅ Example 2: Function returning another function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10


// ✅ Real-world Example: Array.prototype.map is a Higher Order Function
const nums = [1, 2, 3];
const squared = nums.map((num) => num * num); // map takes a function
console.log(squared); // [1, 4, 9]

/**
 * 💡 Summary:
 * Higher Order Functions allow for better abstraction and reusability.
 * Common HOFs in JS: map, filter, reduce, forEach, setTimeout, etc.
 */
