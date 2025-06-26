// 🧠 instanceof vs Array.isArray

const arr = [];
console.log(arr instanceof Array);      // ✅ true
console.log(Array.isArray(arr));        // ✅ true

// 🧠 instanceof can fail across frames — prefer isArray