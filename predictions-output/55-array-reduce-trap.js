// 🧠 Reduce with missing initial value

const arr = [];

const result = arr.reduce((acc, cur) => acc + cur);
// ❌ TypeError: Reduce of empty array with no initial value

// ✅ Fix: provide initial value
const safe = arr.reduce((acc, cur) => acc + cur, 0);
console.log(safe); // ✅ 0

// 🧠 Always provide initial value when array might be empty
