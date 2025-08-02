const value1 = "hello";
const value2 = 0;
const value3 = null;

console.log(!!value1); // true (non-empty string is truthy)
console.log(!!value2); // false (0 is falsy)
console.log(!!value3); // false (null is falsy)
