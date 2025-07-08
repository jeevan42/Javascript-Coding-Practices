// 🧠 `.sort()` converts elements to string by default

const nums = [10, 2, 5];
console.log(nums.sort()); // ❌ [10, 2, 5] → [10, 2, 5]
console.log(nums.sort((a, b) => a - b)); // ✅ [2, 5, 10]