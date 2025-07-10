// 🧠 Unlike indexOf, includes() can detect NaN

const arr = [NaN];
console.log(arr.includes(NaN));     // ✅ true
console.log(arr.indexOf(NaN));      // ❌ -1 (indexOf uses ===)