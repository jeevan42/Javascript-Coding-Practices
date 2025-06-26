// 🧠 `||` vs `??`

console.log(0 || 100);   // ✅ 100
console.log(0 ?? 100);   // ✅ 0

// 🧠 `||` returns right if left is falsy (0, "", false)
// 🧠 `??` returns right only if left is null or undefined