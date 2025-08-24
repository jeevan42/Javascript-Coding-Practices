function sum(a, b) { return a + b; }
console.log(Reflect.apply(sum, null, [5, 7])); // 12
