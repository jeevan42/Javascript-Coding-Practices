// Object Reference in Set
// Problem: Can the same object reference be added multiple times?
// Solution
const obj = {id: 1};
const s = new Set();
s.add(obj);
s.add(obj);
console.log(s.size); // 1
// Conclusion: Same reference is not added twice.