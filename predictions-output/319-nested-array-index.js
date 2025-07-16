// 🧠 Accessing undefined index in nested arrays throws or gives undefined

const arr = [[1], [2]];
console.log(arr[1][0]); // ✅ 2
console.log(arr[2]?.[0]); // ✅ undefined (safe with optional chaining)