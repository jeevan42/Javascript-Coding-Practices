/*
📘 Problem 21: Get Nested Value by Path

✅ Description:
Fetch value from object by dot-separated path string.

🔍 Example:
Input: { a: { b: { c: 5 } } }, path: 'a.b.c'
Output: 5

📌 Concept:
Split path and use reduce to drill down.
*/

const getByPath = (obj, path) => path.split('.').reduce((acc, part) => acc?.[part], obj);

console.log(getByPath({ a: { b: { c: 5 } } }, 'a.b.c')); // 5
