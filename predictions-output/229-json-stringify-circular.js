// 🧠 `JSON.stringify` fails on circular reference

let obj = {};
obj.self = obj;

console.log(JSON.stringify(obj)); // ❌ TypeError: circular structure