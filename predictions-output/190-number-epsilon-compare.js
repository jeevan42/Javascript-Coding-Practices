// 🧠 Floating point precision fix using EPSILON

const a = 0.1 + 0.2;
console.log(a === 0.3); // ❌ false

console.log(Math.abs(a - 0.3) < Number.EPSILON); // ✅ true