// 🧠 Bitwise NOT coerces string to number

console.log(~"5");   // ✅ -6
console.log(~true);  // ✅ -2
console.log(~"abc"); // ✅ -1 (NaN → 0 → ~0 = -1)