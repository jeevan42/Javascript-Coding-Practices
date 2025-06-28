// 🧠 Array.from vs .slice()

const arrLike = { 0: "a", 1: "b", length: 2 };
console.log(Array.from(arrLike)); // ✅ ["a", "b"]
console.log([].slice.call(arrLike)); // ✅ ["a", "b"]

// 🧠 Both can convert array-like objects