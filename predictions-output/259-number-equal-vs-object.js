// 🧠 Primitives vs wrapper objects

console.log(42 === new Number(42)); // ❌ false
console.log(42 == new Number(42));  // ✅ true (coerced)