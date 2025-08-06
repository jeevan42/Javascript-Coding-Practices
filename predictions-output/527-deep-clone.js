const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone); // { a: 1, b: { c: 2 } }
