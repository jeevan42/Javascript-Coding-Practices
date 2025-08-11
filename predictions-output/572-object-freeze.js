const obj = { a: 1 };

Object.freeze(obj);
obj.a = 10; // ignored
obj.b = 20; // ignored

console.log(obj); // { a: 1 }