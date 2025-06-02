// this-context-example.js

'use strict'; // Enforce strict mode to show real behavior of `this`

// Object with a method
const user = {
  name: "Charlie",
  greet() {
    console.log("Inside greet:", this.name);
  }
};

// Normal call — works as expected
user.greet(); // Output: "Inside greet: Charlie"

// Extract the method using destructuring
const { greet } = user;

// Call the method — context lost
greet(); // Output: undefined (this is undefined in strict mode)

// ✅ Fix using bind
const boundGreet = user.greet.bind(user);
boundGreet(); // Output: "Inside greet: Charlie"

// ✅ Fix using arrow function wrapper
const greetWrapper = () => user.greet();
greetWrapper(); // Output: "Inside greet: Charlie"