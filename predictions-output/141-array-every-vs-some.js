// 🧠 every vs some

const nums = [1, 2, 3];

console.log(nums.every(n => n > 0)); // ✅ true
console.log(nums.some(n => n > 2));  // ✅ true

// 🧠 every → all must pass, some → any one passes