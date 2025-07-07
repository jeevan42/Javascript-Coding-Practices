// 🧠 `some()` skips empty slots (holes)

const arr = [, , , 5];
console.log(arr.some(x => x === undefined)); // ✅ false