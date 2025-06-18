// 🧠 Array Holes vs Undefined

const arr = [1, , 3];
console.log(arr.length); // ✅ 3
console.log(arr[1]);     // ✅ undefined

console.log(arr.hasOwnProperty(1)); 
// ❌ false
// 🧠 Hole is not the same as undefined value — no property exists at index 1
