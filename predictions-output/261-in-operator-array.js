// 🧠 `in` checks for index existence in arrays

const arr = [0, , 2];
console.log(1 in arr); // ❌ false (hole)
console.log(0 in arr); // ✅ true