// 🧠 `Array(n)` creates holes, not values

const arr = Array(3);
console.log(arr);       // ✅ [ <3 empty items> ]
console.log(arr.length); // ✅ 3