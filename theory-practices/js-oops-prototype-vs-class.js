// js-oops-prototype-vs-class.js

/*
📘 JavaScript OOP: Prototype-based vs Class-based

---
🔹 What is Prototype-based Inheritance?
JavaScript uses **prototypes** to share methods/properties among objects.
Each object has an internal link (`[[Prototype]]`) to another object.
This forms a **prototype chain**.

🔧 Example:
```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal('Dog');
dog.speak(); // Dog makes a sound.
```

🧠 Internally:
- `dog.__proto__` points to `Animal.prototype`
- Allows method reuse

---
🔹 ES6 Class Syntax
Classes in JS are **syntactic sugar** over the prototype system.

🔧 Example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const cat = new Animal('Cat');
cat.speak(); // Cat makes a sound.
```

✅ Under the hood:
- `class` internally still uses prototypes.
- Methods defined in class body go to the prototype.

---
🆚 Comparison:
| Feature            | Prototype-based           | Class-based (ES6)        |
|--------------------|----------------------------|---------------------------|
| Syntax             | Verbose, older style       | Cleaner, modern           |
| Inheritance        | Manual via Object.create() | `extends` keyword         |
| Instantiation      | Constructor functions      | `constructor()` method    |
| Readability        | Less intuitive             | More readable             |

---
🧩 Summary:
- Both approaches do the same thing in JS.
- Classes are preferred today for better structure and readability.
*/
