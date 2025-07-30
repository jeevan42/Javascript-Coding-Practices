// Object.hasOwn (ES2022) vs hasOwnProperty
const obj = { a: 1 };
console.log(Object.hasOwn(obj, 'a')); // true
console.log(Object.hasOwn(obj, 'b')); // false