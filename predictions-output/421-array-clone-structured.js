// Deep clone using structuredClone (modern & simple)
const original = { a: 1, b: { c: 2 } };
const copy = structuredClone(original);
console.log(copy); // { a: 1, b: { c: 2 } }