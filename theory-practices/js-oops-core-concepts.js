// js-oops-core-concepts.js

/*
📘 JavaScript & OOP (Object-Oriented Programming) - Core Concepts

---
🧠 What is OOP?
OOP is a programming paradigm based on the concept of **objects**, which contain:
- Properties (data)
- Methods (functions)

JavaScript supports OOP using **prototypes** and **ES6 classes**.

---
🔑 4 Pillars of OOP:

1. **Encapsulation**
   - Wrapping data and methods into a single unit (object).
   - Hides internal details (data hiding).
   ```js
   class Person {
     constructor(name) {
       this._name = name; // conventionally treated as private
     }
     getName() {
       return this._name;
     }
   }
   ```

2. **Abstraction**
   - Expose only necessary details.
   - Simplifies complexity by hiding implementation.
   ```js
   class Car {
     startEngine() {
       this._injectFuel();
       console.log('Engine started');
     }
     _injectFuel() {
       console.log('Injecting fuel...');
     }
   }
   ```

3. **Inheritance**
   - Allows one class to inherit properties/methods from another.
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
   ```

4. **Polymorphism**
   - Same interface, different implementations.
   - Achieved via method overriding.
   ```js
   const animals = [new Dog(), new Animal()];
   animals.forEach(a => a.speak()); // Bark, Animal sound
   ```

---
📚 OOP in JavaScript:

- JS is **prototype-based**, not class-based like Java or C++.
- Before ES6, OOP used constructor functions + prototype chaining.
- With ES6, `class` syntax was introduced as syntactic sugar over prototypal inheritance.

---
🔄 Classical vs Prototypal OOP:

- Classical: uses `class`, `extends`, like other OOP languages.
- Prototypal: objects inherit directly from other objects.

```js
const car = {
  drive() { console.log('driving'); }
};
const sportsCar = Object.create(car);
sportsCar.drive(); // driving
```

---
🧩 Summary:
- JavaScript supports OOP through both classes and prototypes.
- Understanding OOP helps write clean, reusable, and scalable code.
*/
