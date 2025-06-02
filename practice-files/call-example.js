// call-example.js

'use strict';

/**
 * This function takes two parameters: city and country.
 * It prints a message using 'this.name', which should be available in the context.
 */
function introduce(city, country) {
  console.log(`${this.name} is from ${city}, ${country}`);
}

/**
 * This is the object we want to use as the 'this' context.
 */
const person = {
  name: "Bob"
};

/**
 * Using call():
 * Syntax → functionName.call(thisArg, arg1, arg2, ...)
 * 
 * - thisArg: The object to be used as 'this' inside the function.
 * - arg1, arg2, ...: The actual parameters the function expects.
 *
 * So here:
 * - 'this' inside introduce will refer to 'person'
 * - city = "Delhi"
 * - country = "India"
 */
introduce.call(person, "Delhi", "India"); // Output: Bob is from Delhi, India

/**
 * 🔍 Why use call?
 * - It allows you to explicitly set the value of 'this'.
 * - Useful when you're borrowing a function or invoking a method dynamically.
 */

// More examples:
const anotherPerson = {
  name: "Alice"
};

introduce.call(anotherPerson, "Paris", "France"); // Output: Alice is from Paris, France

/**
 * ✅ Summary:
 * - Use `.call()` when you want to invoke a function immediately and pass 'this' explicitly.
 */