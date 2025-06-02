// apply-example.js

'use strict';

/**
 * This function takes two arguments: city and country,
 * and logs a message using the 'name' from the 'this' context.
 */
function introduce(city, country) {
  console.log(`${this.name} is from ${city}, ${country}`);
}

/**
 * This object will be used as the 'this' context when calling the function.
 */
const person = {
  name: "Carol"
};

/**
 * Using apply():
 * Syntax → functionName.apply(thisArg, [arg1, arg2, ...])
 *
 * - thisArg: The object that should be treated as 'this' inside the function.
 * - [arg1, arg2, ...]: Arguments passed as an array.
 *
 * So here:
 * - 'this' will refer to 'person'
 * - city = "Paris"
 * - country = "France"
 */
introduce.apply(person, ["Paris", "France"]); // Output: Carol is from Paris, France

/**
 * 🔍 Why use apply?
 * - Similar to .call(), but the arguments are passed as an array.
 * - Useful when your arguments are already in array form (like from another function).
 */

// Example with dynamic arguments:
const args = ["Tokyo", "Japan"];
introduce.apply({ name: "Dave" }, args); // Output: Dave is from Tokyo, Japan

/**
 * ✅ Summary:
 * - .call() → Pass arguments one-by-one.
 * - .apply() → Pass arguments as an array.
 * - Both allow you to control the 'this' context.
 */