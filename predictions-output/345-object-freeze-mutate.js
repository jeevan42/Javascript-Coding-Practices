const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // 1