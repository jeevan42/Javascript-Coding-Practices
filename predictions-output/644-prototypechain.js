// Question: What will be logged?
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  return "Hi " + this.name;
};
const p = new Person("JS");
console.log(p.sayHi());

// Answer: Hi JS
// Explanation: The method sayHi is found via the prototype chain.