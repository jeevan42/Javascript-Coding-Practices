// 🧠 `parseInt` with hex prefix auto uses radix 16

console.log(parseInt("0x10")); // ✅ 16
console.log(parseInt("10", 16)); // ✅ 16