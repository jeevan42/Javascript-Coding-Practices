// Object destructuring with default
const { name = 'Guest', age } = { age: 25 };
console.log(name, age); // Guest 25