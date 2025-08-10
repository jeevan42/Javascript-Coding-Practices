const obj = { a: 1 };

Object.seal(obj);
obj.a = 10; // allowed
obj.b = 20; // ignored

console.log(obj); // { a: 10 }