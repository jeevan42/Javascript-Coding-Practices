// 🧠 Object() vs {}

const obj1 = new Object();
const obj2 = {};

console.log(typeof obj1, typeof obj2); // ✅ 'object' 'object'
console.log(obj1.constructor === obj2.constructor); // ✅ true