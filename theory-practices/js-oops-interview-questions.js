// js-oops-interview-questions.js

/*
🎯 JavaScript OOP Interview Q&A

---
❓ Q1: What is Object-Oriented Programming and how is it implemented in JavaScript?
✅ A: OOP is a paradigm based on the concept of objects. JavaScript implements it via **prototypes**, and from ES6, also via **class syntax**.

“OOP is a paradigm based on the concept of objects” means:
Paradigm → A style or approach to writing code.
Object-Oriented Programming (OOP) → A way of structuring code around objects.

📌 Example:
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
const p1 = new Person('Alice');
p1.greet(); // Hello, I'm Alice
```

---
❓ Q2: What is the difference between class and prototype in JS?
✅ A: Classes are syntactic sugar over prototypes. Both achieve inheritance.

---
❓ Q3: Explain inheritance in JavaScript.
✅ A: One object can inherit properties and methods from another via prototype chain or class `extends`.

📌 Example:
```js
class Animal {
  speak() {
    console.log('Animal sound');
  }
}
class Dog extends Animal {
  speak() {
    console.log('Bark');
  }
}
new Dog().speak(); // Bark
```

---
❓ Q4: What is the difference between composition and inheritance?
✅ A: Inheritance is "is-a" relationship, composition is "has-a". JS supports both.

---
❓ Q5: What is the prototype chain?
✅ A: It’s the chain of objects JavaScript follows to look for methods/properties.

📌 Example:
```js
const obj = {};
console.log(obj.toString()); // from Object.prototype
```

---
❓ Q6: How does `this` work in JS?
✅ A: `this` refers to the calling context. Arrow functions don’t bind `this`, regular functions do.

📌 Example:
```js
const person = {
  name: 'Jay',
  greet: function () {
    console.log(this.name);
  }
};
person.greet(); // Jay
```

---
❓ Q7: Explain Encapsulation with example.
✅ A: Wrapping variables and functions inside a class to restrict direct access.

📌 Example (Private field):
```js
class BankAccount {
  #balance = 0;
  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
}
```

---
❓ Q8: What is Polymorphism in JavaScript?
✅ A: Ability of different objects to respond to the same method name differently.

📌 Example:
```js
class Bird { fly() { console.log("Bird flies"); } }
class Airplane { fly() { console.log("Airplane flies"); } }

function letsFly(entity) { entity.fly(); }
letsFly(new Bird());
letsFly(new Airplane());
```

---
🧠 Tips:
- Always give short theory + practical example
- Try to relate to real-life examples
- Explain both prototype and class syntax where relevant
*/
