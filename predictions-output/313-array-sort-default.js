// 🧠 Default `.sort()` converts to strings — not numerical sort

console.log([10, 2, 30].sort()); // ❌ [10, 2, 30] → ✅ [10, 2, 30] (string comparison)
console.log([10, 2, 30].sort((a, b) => a - b)); // ✅ [2, 10, 30]