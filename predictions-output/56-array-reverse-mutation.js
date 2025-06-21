// 🧠 .reverse() mutates original array

const arr = [1, 2, 3];
const reversed = arr.reverse();

console.log(reversed); // ✅ [3, 2, 1]
console.log(arr);      // ✅ [3, 2, 1]

// 🧠 .reverse() changes the original array in place!
