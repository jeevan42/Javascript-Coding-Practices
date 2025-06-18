// 🧠 Hoisting Prediction

console.log(x); // ?
var x = 5;

console.log(foo()); // ?
function foo() {
  return "Hello";
}

bar(); // ?
var bar = function () {
  console.log("World");
};
