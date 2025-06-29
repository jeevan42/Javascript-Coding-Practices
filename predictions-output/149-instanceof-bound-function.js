// 🧠 Bound functions lose instanceof check

function A() {}
const B = A.bind(null);

console.log(new A() instanceof A); // ✅ true
console.log(new B() instanceof A); // ❌ false

// 🧠 bind breaks prototype chain awareness