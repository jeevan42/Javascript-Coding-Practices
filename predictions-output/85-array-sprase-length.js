// 🧠 Sparse arrays affect .length

const arr = [];
arr[5] = 42;
console.log(arr.length); // ✅ 6

// 🧠 Highest index + 1 determines .length