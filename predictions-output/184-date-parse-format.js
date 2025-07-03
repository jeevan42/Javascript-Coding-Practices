// 🧠 Date.parse supports limited formats

console.log(Date.parse("2023-01-01"));   // ✅ OK (ISO format)
console.log(Date.parse("01/01/2023"));   // ❌ NaN (depends on browser)