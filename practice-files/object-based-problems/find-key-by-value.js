/*
📘 Problem 18: Find Key by Value

✅ Description:
Return the key in an object that maps to a given value.

🔍 Example:
Input: { a: 1, b: 2 }, value: 2
Output: "b"

📌 Concept:
Iterate over the object keys using a for...in loop.
*/

const findKeyByValue = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) return key;
  }
  return null;
};

console.log(findKeyByValue({ a: 1, b: 2 }, 2)); // "b"
