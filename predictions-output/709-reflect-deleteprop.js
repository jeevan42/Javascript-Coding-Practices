const obj = { x: 10 };
Reflect.deleteProperty(obj, "x");
console.log(obj.x); // undefined
