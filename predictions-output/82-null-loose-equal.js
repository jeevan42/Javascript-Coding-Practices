// 🧠 null with == behaves unexpectedly

console.log(null == 0);        // ❌ false
console.log(null == undefined); // ✅ true

// 🧠 null loosely equals undefined, but not 0 or ""