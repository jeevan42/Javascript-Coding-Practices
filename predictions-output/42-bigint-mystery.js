// 🧠 BigInt cannot mix with Number in math

const a = 10n;
const b = 5;

console.log(a + BigInt(b)); 
// ✅ 15n

// console.log(a + b); 
// ❌ TypeError: Cannot mix BigInt and other types
