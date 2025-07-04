// 🧠 `===` does shallow comparison

const a = { x: 1 };
const b = { x: 1 };

console.log(a === b); // ❌ false
console.log(JSON.stringify(a) === JSON.stringify(b)); // ✅ true (hacky deep check)