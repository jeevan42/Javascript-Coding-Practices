// 🧠 NaN !== NaN

console.log(NaN === NaN);     // ❌ false
console.log(Object.is(NaN, NaN)); // ✅ true

// 🧠 Use `Number.isNaN()` or `Object.is()` for accurate check