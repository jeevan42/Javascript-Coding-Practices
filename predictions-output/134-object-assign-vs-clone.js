// 🧠 Object.assign vs deep clone

const a = { nested: { val: 1 } };
const b = Object.assign({}, a);

b.nested.val = 2;
console.log(a.nested.val); // ✅ 2 (not deep copy)

// 🧠 Use structuredClone() or lodash for deep cloning