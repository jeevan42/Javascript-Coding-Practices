// 🧠 .push() returns new length, not the array

const arr = [1, 2];
const result = arr.push(3);

console.log(result); // ✅ 3 (length)
console.log(arr);    // ✅ [1, 2, 3]