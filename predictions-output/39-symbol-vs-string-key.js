// 🧠 flat() depth behavior

const arr = [1, [2, [3, [4]]]];
console.log(arr.flat());      
// ✅ [1, 2, [3, [4]]]

console.log(arr.flat(2));     
// ✅ [1, 2, 3, [4]]

console.log(arr.flat(Infinity)); 
// ✅ [1, 2, 3, 4]
