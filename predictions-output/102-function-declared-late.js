// 🧠 Function declarations are hoisted, expressions are not

sayHi(); // ✅ "Hi"

function sayHi() {
  console.log("Hi");
}

// ❌ sayHello(); // Error: Cannot access before initialization
const sayHello = function () {
  console.log("Hello");
};