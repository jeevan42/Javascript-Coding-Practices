// 🧠 Does concat mutate the original array?

const a = [1, 2];
const b = a.concat([3, 4]);

console.log(a); // ✅ [1, 2]
console.log(b); // ✅ [1, 2, 3, 4]

// 🧠 .concat() returns a new array, does NOT mutate original
