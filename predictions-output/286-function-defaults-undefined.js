// 🧠 Only `undefined` triggers default parameter

function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet(undefined)); // ✅ Hello, Guest
console.log(greet(null));      // ✅ Hello, null