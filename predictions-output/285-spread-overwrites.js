// 🧠 Spread properties overwrite earlier ones

const obj = { a: 1, b: 2 };
const merged = { ...obj, b: 3 };
console.log(merged); // ✅ { a: 1, b: 3 }