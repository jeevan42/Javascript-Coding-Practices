const obj = Object.create({ inherited: true });
obj.own = true;

console.log('inherited' in obj); // true
console.log(obj.hasOwnProperty('inherited')); // false