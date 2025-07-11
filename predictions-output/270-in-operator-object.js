// 🧠 `in` also checks inherited properties

const base = { a: 1 };
const child = Object.create(base);
console.log("a" in child); // ✅ true