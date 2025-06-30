// 🧠 NaN not found with indexOf

const arr = [NaN];
console.log(arr.indexOf(NaN)); // ❌ -1

console.log(arr.includes(NaN)); // ✅ true

// ✅ Use .includes() for NaN detection