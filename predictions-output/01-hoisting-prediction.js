// 🧠 Hoisting Prediction

console.log(x); 
// ✅ Output: undefined
// 🧠 Explanation: 'var' is hoisted to the top with value 'undefined' during memory phase.

var x = 5;

console.log(foo()); 
// ✅ Output: Hello
// 🧠 Explanation: Function declarations are hoisted completely including their definitions.

function foo() {
  return "Hello";
}

bar(); 
// ❌ TypeError: bar is not a function
// 🧠 Explanation: 'bar' is hoisted like `var bar = undefined;`, but function expression is not hoisted.
// So `bar()` becomes `undefined()` → error.

var bar = function () {
  console.log("World");
};
