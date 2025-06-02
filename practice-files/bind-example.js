// bind-example.js

'use strict';

const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

// Without bind
const greet = person.greet;
greet(); // undefined in strict mode

// With bind
const boundGreet = person.greet.bind(person);
boundGreet(); // Hello, I'm Alice

// bind can also preset arguments
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5)); // 10