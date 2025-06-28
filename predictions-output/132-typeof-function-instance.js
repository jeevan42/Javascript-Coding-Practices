// 🧠 typeof returns 'function' but it's also instanceof Object

function x() {}
console.log(typeof x);         // ✅ "function"
console.log(x instanceof Object); // ✅ true

// 🧠 Functions are special objects