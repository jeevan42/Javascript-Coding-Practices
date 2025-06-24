// 🧠 Detect arrays

console.log(Array.isArray([]));           // ✅ true
console.log(Array.isArray({}));           // ❌ false
console.log([] instanceof Array);         // ✅ true

// 🧠 Prefer `Array.isArray()` for reliability