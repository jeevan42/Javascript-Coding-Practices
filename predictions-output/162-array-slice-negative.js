// 🧠 Negative indices count from the end

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-2)); // ✅ [4, 5]
console.log(arr.slice(-4, -1)); // ✅ [2, 3, 4]

// Great for grabbing end segments!