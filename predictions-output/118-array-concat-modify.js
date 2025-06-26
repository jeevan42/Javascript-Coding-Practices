// 🧠 concat creates new array — doesn't mutate original

const a = [1];
const b = a.concat([2]);
console.log(a); // ✅ [1]
console.log(b); // ✅ [1, 2]

// 🧠 Use spread for immutability: `[...a, ...b]`