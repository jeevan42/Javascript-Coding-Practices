/*
📘 Problem 17: Check if Object is Empty

✅ Description:
Check whether a given object has any keys or not.

🔍 Example:
Input: {}
Output: true
Input: { a: 1 }
Output: false

📌 Concept:
Use Object.keys() to check if the object has zero keys.
*/

const isEmptyObject = (obj) => Object.keys(obj).length === 0;

console.log(isEmptyObject({}));        // true
console.log(isEmptyObject({ a: 10 })); // false
