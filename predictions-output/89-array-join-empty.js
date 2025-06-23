// 🧠 .join() on empty array

console.log([].join());     // ✅ ""
console.log([1,2,3].join()); // ✅ "1,2,3"
console.log([1,2,3].join(" - ")); // ✅ "1 - 2 - 3"

// 🧠 Default separator is comma