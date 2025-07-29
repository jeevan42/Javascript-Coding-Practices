const sym = Symbol('hidden');
const obj = { [sym]: 123 };

console.log(Object.keys(obj)); // []
console.log(obj[sym]); // 123