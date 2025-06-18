// 🧠 delete operator behavior

const obj = { name: "Jeevan" };
console.log(delete obj.name); 
// ✅ true

console.log(obj); 
// ✅ {}

const arr = [1, 2, 3];
delete arr[1];
console.log(arr); 
// ✅ [1, empty, 3]
// 🧠 Leaves a hole, doesn't reindex the array
