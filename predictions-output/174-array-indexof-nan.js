// 🧠 NaN !== NaN → .indexOf can't find NaN

const arr = [NaN];
console.log(arr.indexOf(NaN)); // ❌ -1

// ✅ Use .includes or Object.is
console.log(arr.includes(NaN)); // ✅ true