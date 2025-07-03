// 🧠 parseInt stops at non-digit, Number tries full parse

console.log(parseInt("10abc")); // ✅ 10
console.log(Number("10abc"));  // ❌ NaN