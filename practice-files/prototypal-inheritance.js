/**
 * 🧠 Concept: Prototypal Inheritance in JavaScript
 *
 * 📘 Definition:
 * JavaScript objects inherit properties and methods from a prototype object.
 * This inheritance mechanism is called prototypal inheritance.
 *
 * ---------------------------------------------------------
 *
 * 1️⃣ Prototype Chain Basics:
 * Every JS object has an internal link to another object called its prototype.
 * When accessing a property, JS looks up the property in the object,
 * if not found, it looks up in its prototype, and so on until Object.prototype or null.
 *
 * ---------------------------------------------------------
 *
 * 2️⃣ Creating an object with prototype
 */
const parent = {
  greet() {
    console.log("Hello from parent!");
  },
};

const child = Object.create(parent);
child.greet(); // "Hello from parent!"

/**
 * Explanation:
 * - `child` doesn’t have greet method directly.
 * - JS finds greet in `parent` prototype.
 */

/**
 * 3️⃣ Constructor Functions and Prototype
 */
function Person(name) {
  this.name = name;
}

// Adding method to prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const p1 = new Person("Jeevan");
p1.sayHello(); // Hello, my name is Jeevan

/**
 * Explanation:
 * - Objects created by `new Person()` inherit methods from Person.prototype.
 */

/**
 * 4️⃣ The `__proto__` vs `prototype`
 *
 * - `prototype` is a property of constructor functions (like Person.prototype).
 * - `__proto__` is an internal link of an object pointing to its prototype.
 *
 * Example:
 */
console.log(p1.__proto__ === Person.prototype); // true

/**
 * 5️⃣ Inheritance Chain Example
 */
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
  Animal.call(this, name); // call parent constructor
}

// Set Dog prototype to inherit from Animal prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

/**
 * 6️⃣ ES6 Classes (syntactic sugar over prototypal inheritance)
 */
class Vehicle {
  constructor(type) {
    this.type = type;
  }
  move() {
    console.log(`${this.type} is moving.`);
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super("Car");
    this.brand = brand;
  }
  move() {
    console.log(`${this.brand} car is driving.`);
  }
}

const myCar = new Car("Toyota");
myCar.move(); // Toyota car is driving.

/**
 * ---------------------------------------------------------
 *
 * 🔥 Summary:
 * - Prototypal inheritance lets objects inherit from other objects.
 * - Prototype chain is used to look up properties.
 * - Constructor functions and classes help set up prototypes.
 * - ES6 classes are just syntactic sugar for prototype-based inheritance.
 */
