// 🧠 Legacy: parseInt with leading 0 = octal

console.log(parseInt("010")); // ❌ 8 in some older engines
console.log(parseInt("010", 10)); // ✅ 10