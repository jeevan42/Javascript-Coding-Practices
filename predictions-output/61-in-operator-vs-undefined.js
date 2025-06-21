// 🧠 `in` vs checking undefined

const obj = { a: undefined };

console.log("a" in obj);         // ✅ true
console.log(obj.a === undefined); // ✅ true

console.log("b" in obj);         // ✅ false

// 🧠 `in` checks if the property exists, not if it has a value
