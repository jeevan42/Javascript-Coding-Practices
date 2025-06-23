// 🧠 Symbol-keyed properties are non-enumerable

const sym = Symbol("id");
const obj = { [sym]: 123, name: "Jeevan" };

console.log(Object.keys(obj)); // ✅ ["name"]
console.log(Object.getOwnPropertySymbols(obj)); // ✅ [ Symbol(id) ]

// 🧠 Symbol properties don’t show up in `for...in` or `Object.keys`