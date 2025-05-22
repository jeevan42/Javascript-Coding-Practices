// spread_rest_example.js

/*
  Spread Operator (...) 
  -----------------------
  Definition:
  The spread operator expands (spreads) elements of an iterable (like an array or object) into individual elements.

  Use cases:
    - Copying arrays/objects
    - Merging arrays/objects
    - Passing arguments to functions
*/

console.log("=== Spread Operator Examples ===");

// 1. Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
console.log("Spread Array:", arr2);

// 2. Spread in Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
console.log("Spread Object:", obj2);

// 3. Spread in Function Arguments
function sum(a, b, c) {
  return a + b + c;
}
const nums = [10, 20, 30];
console.log("Spread in Function:", sum(...nums)); // 60

/*
  Rest Operator (...) 
  ---------------------
  Definition:
  The rest operator collects multiple elements into a single array.

  Use cases:
    - Destructuring arrays/objects
    - Handling variable number of function arguments
*/

console.log("\n=== Rest Operator Examples ===");

// 1. Rest in Arrays (Destructuring)
const [first, ...restItems] = [100, 200, 300, 400];
console.log("First:", first);        // 100
console.log("Rest:", restItems);     // [200, 300, 400]

// 2. Rest in Objects (Destructuring)
const { x, ...restObj } = { x: 1, y: 2, z: 3 };
console.log("x:", x);                // 1
console.log("Rest Object:", restObj); // { y: 2, z: 3 }

// 3. Rest in Function Parameters
function logAll(...args) {
  console.log("Arguments as array:", args);
}
logAll("apple", "banana", "cherry"); // ['apple', 'banana', 'cherry']
