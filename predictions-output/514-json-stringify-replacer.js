const obj = { a: 1, b: 2, c: 3 };
const str = JSON.stringify(obj, ["a", "c"]);
console.log(str); // {"a":1,"c":3}
