class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}
const p = new Person("Jeevan");
console.log(p.greet()); // Hello, Jeevan
