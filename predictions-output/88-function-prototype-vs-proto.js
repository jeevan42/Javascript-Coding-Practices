// 🧠 .prototype vs .__proto__

function Dog() {}
const dog = new Dog();

console.log(Dog.prototype === dog.__proto__); // ✅ true

// 🧠 .prototype → constructor property
//     .__proto__ → runtime object's prototype