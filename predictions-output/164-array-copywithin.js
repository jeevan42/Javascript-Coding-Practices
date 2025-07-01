// 🧠 .copyWithin(target, start, end) mutates array

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); 
console.log(arr); // ✅ [4, 5, 3, 4, 5]

// Useful for fast in-place mutations