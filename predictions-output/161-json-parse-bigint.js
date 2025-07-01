// 🧠 JSON doesn't support BigInt

const obj = { num: BigInt(123) };
const str = JSON.stringify(obj); 
console.log(str); // ❌ TypeError: Do not know how to serialize BigInt

// ✅ Convert to string manually
const safe = JSON.stringify({ num: BigInt(123).toString() });