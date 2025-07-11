// 🧠 `.flat()` flattens only 1 level by default

const nested = [1, [2, [3]]];
console.log(nested.flat()); // ✅ [1, 2, [3]]