// 🧠 .find vs .filter

const arr = [1, 2, 3, 4];
console.log(arr.find(n => n > 2));   // ✅ 3 (first match)
console.log(arr.filter(n => n > 2)); // ✅ [3, 4] (all matches)