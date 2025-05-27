/**
 * 🔍 Definition of Object in JavaScript:
 * An object is a collection of key-value pairs used to store structured data.
 * Example:
 * const user = {
 *   name: "Jeevan",
 *   age: 25,
 *   isDeveloper: true
 * };
 * 
 * Objects are used when we want to group related data and access them via keys.
 * 
 * 👉 Let's Solve a Real-World Object Problem
 * Problem:
 * Given an object where keys are product names and values are their prices,
 * return:
 *   1. List of products under ₹100
 *   2. Total price of all products
 *   3. Sort products by price (ascending)
 */

const products = {
  "Laptop": 45000,
  "Mouse": 500,
  "Keyboard": 900,
  "Monitor": 12000,
  "Pen": 20,
  "Notebook": 70
};

// ✅ 1. Get products under ₹100
const cheapProducts = Object.entries(products)
  .filter(([key, value]) => value < 100)
  .map(([key]) => key);

console.log("Products under ₹100:", cheapProducts);
// Output: [ 'Pen', 'Notebook' ]

// ✅ 2. Total price of all products
const totalPrice = Object.values(products)
  .reduce((acc, curr) => acc + curr, 0);

console.log("Total Price:", totalPrice);
// Output: 58490

// ✅ 3. Sort products by price (ascending)
const sortedByPrice = Object.entries(products)
  .sort((a, b) => a[1] - b[1])
  .map(([key, value]) => ({ name: key, price: value }));

console.log("Sorted Products:", sortedByPrice);
/*
[
  { name: 'Pen', price: 20 },
  { name: 'Notebook', price: 70 },
  { name: 'Mouse', price: 500 },
  { name: 'Keyboard', price: 900 },
  { name: 'Monitor', price: 12000 },
  { name: 'Laptop', price: 45000 }
]
*/

/**
 * 💡 Explanation:
 * - Object.entries(obj) → Converts object to array of [key, value] pairs
 * - Object.values(obj) → Gets array of values
 * - Object.keys(obj)   → Gets array of keys
 * - Array.map/filter/sort → Applied for transformation
 * 
 * ✅ This is how we solve practical problems using objects in JavaScript
 */

