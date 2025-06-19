// 🧠 map vs forEach Return Behavior

const nums = [1, 2, 3];

const result1 = nums.map(n => n * 2);
console.log(result1); 
// ✅ [2, 4, 6]

const result2 = nums.forEach(n => n * 2);
console.log(result2); 
// ✅ undefined
// 🧠 forEach doesn’t return a new array
