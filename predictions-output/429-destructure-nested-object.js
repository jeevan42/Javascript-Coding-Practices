const user = { info: { name: "Bob", age: 30 } };
const { info: { name, age } } = user;
console.log(name, age); // Bob 30
