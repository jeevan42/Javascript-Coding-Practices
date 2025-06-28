// 🧠 Number object vs primitive comparison

const a = 42;
const b = new Number(42);

console.log(a == b);  // ✅ true (value coercion)
console.log(a === b); // ❌ false (type mismatch)

// 🧠 `new Number()` returns an object