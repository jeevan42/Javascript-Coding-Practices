const pairs = [['a', 1], ['b', 2]];
const obj = pairs.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
console.log(obj); // { a: 1, b: 2 }
