// 🧠 Array Sort Pitfall

const nums = [100, 25, 3, 7];
nums.sort();
console.log(nums); 
// ❌ [100, 25, 3, 7]
// 🧠 Default sort converts numbers to strings → "100", "25", etc.

nums.sort((a, b) => a - b);
console.log(nums); 
// ✅ [3, 7, 25, 100]
// 🧠 Fix: pass a compare function
