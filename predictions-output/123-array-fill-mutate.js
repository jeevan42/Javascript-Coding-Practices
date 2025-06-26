// 🧠 .fill() mutates original array

const arr = [1, 2, 3];
arr.fill(0);
console.log(arr); // ✅ [0, 0, 0]

// 🧠 Be cautious with mutation — use slice/concat for immutability