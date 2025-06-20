// 🧠 Function declaration vs expression hoisting

sayHi(); // ✅ Works (hoisted)
function sayHi() {
  console.log("Hi!");
}

// sayHello(); // ❌ TypeError
const sayHello = function () {
  console.log("Hello!");
};

// 🧠 Function declarations are hoisted with definitions.
// Function expressions are hoisted as undefined.
