const obj = { a: 1, b: 2, c: 3 };
const json = JSON.stringify(obj, ['a', 'c']);
console.log(json); // {"a":1,"c":3}