// 🧠 `in` checks for index existence, not value

const arr = [10, , 30];

console.log(1 in arr); // ❌ false (hole)
console.log(2 in arr); // ✅ true