// 🧠 Function declarations override each other

function sayHi() {
  return "Hi";
}

function sayHi() {
  return "Hello";
}

console.log(sayHi()); // ✅ "Hello"

// 🧠 In the same scope, the latter function overrides the former