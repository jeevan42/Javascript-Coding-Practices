// 🧠 parseFloat reads until invalid char

console.log(parseFloat("10.5px")); // ✅ 10.5
console.log(parseFloat("abc10"));  // ✅ NaN

// 🧠 Parses as much as valid from start