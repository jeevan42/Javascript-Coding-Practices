// Question: What is logged?
function greet(msg) {
  console.log(msg + " " + this.name);
}
const obj = { name: "JS" };
greet.call(obj, "Hello");
greet.apply(obj, ["Hi"]);
const bound = greet.bind(obj, "Hey");
bound();

// Answer:
// Hello JS
// Hi JS
// Hey JS
// Explanation: call, apply, and bind control `this` and arguments differently.