const obj = Object.create({ inherited: true });
obj.own = true;

console.log(Object.hasOwn(obj, 'own'));       // true
console.log(Object.hasOwn(obj, 'inherited')); // false
