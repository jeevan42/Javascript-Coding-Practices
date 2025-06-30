// 🧠 Precision comparison using Number.EPSILON

const a = 0.1 + 0.2;
const b = 0.3;

console.log(a === b); // ❌ false

console.log(Math.abs(a - b) < Number.EPSILON); // ✅ true

// Use EPSILON to compare floating-point numbers