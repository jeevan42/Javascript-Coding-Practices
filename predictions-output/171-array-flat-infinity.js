// 🧠 Flatten nested array to any depth

const arr = [1, [2, [3, [4]]]];
console.log(arr.flat(Infinity)); // ✅ [1, 2, 3, 4]

// `.flat(Infinity)` crushes deep nested arrays