// 🧠 The 'in' operator

const obj = { name: "Jeevan", age: 25 };
console.log("name" in obj); 
// ✅ true

console.log("toString" in obj); 
// ✅ true
// 🧠 Inherited from Object.prototype

const arr = [10];
console.log(0 in arr);  
// ✅ true

console.log(1 in arr);  
// ❌ false
