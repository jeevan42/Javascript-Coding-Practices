// 🧠 Chained Comparison Confusion

console.log(5 < 6 < 7);     
// ✅ Output: true
// 🧠 Explanation:
// 5 < 6 → true → true < 7 → 1 < 7 → true

console.log(7 > 6 > 5);     
// ❌ Output: false
// 🧠 Explanation:
// 7 > 6 → true → true > 5 → 1 > 5 → false
