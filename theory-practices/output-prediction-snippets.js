/**
 * 🧠 JavaScript Output Prediction Snippets
 * 
 * These examples are common in interviews and tests.
 * Try predicting the output before running them.
 */

// ==============================
// Example 1: Variable Hoisting
// ==============================
console.log(a); // undefined
var a = 10;

// ==============================
// Example 2: Function Hoisting
// ==============================
sayHi(); // Output: Hi
function sayHi() {
  console.log("Hi");
}

// ==============================
// Example 3: setTimeout + Loop
// ==============================
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // Output: 3 3 3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0); // Output: 0 1 2
}

// ==============================
// Example 4: typeof null
// ==============================
console.log(typeof null); // object (weird JS quirk)

// ==============================
// Example 5: NaN === NaN?
// ==============================
console.log(NaN === NaN); // false

// ==============================
// Example 6: Object Key Coercion
// ==============================
const obj = {};
const key1 = {};
const key2 = {};

obj[key1] = "value1";
obj[key2] = "value2";

console.log(obj); // { '[object Object]': 'value2' }

// ==============================
// Example 7: 'this' in Arrow vs Normal
// ==============================
const test = {
  name: "Jeevan",
  regular: function () {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  }
};
test.regular(); // Jeevan
test.arrow();   // undefined (arrow takes outer 'this')

// ==============================
// Example 8: Implicit return in arrow
// ==============================
const fn = () => ({ msg: "Hello" });
console.log(fn()); // { msg: "Hello" }

// ==============================
// Example 9: Chained comparison
// ==============================
console.log(5 < 6 < 7); // true
console.log(7 > 6 > 5); // false

// Why?
// 5 < 6 → true → true < 7 → true
// 7 > 6 → true → true > 5 → false

// ==============================
// Tip: Always dry run and understand the context, sco
