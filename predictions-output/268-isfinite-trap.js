// 🧠 `isFinite()` coerces input, `Number.isFinite()` doesn't

console.log(isFinite("10"));         // ✅ true
console.log(Number.isFinite("10"));  // ❌ false