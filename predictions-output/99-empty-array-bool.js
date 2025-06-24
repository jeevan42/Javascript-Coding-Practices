// 🧠 [] is truthy, but equals false loosely

console.log([] == false);    // ✅ true
console.log([] === false);   // ❌ false

// 🧠 [] coerces to "" → falsy in loose equality