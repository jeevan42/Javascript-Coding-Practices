const obj = { a: 1 };

Object.freeze(obj);
obj.a = 10; // No effect

console.log(obj); // { a: 1 }
