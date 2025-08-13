const obj = { a: 1 };

Object.preventExtensions(obj);
obj.b = 2; // ignored

console.log(obj); // { a: 1 }