// Private class fields (#field)
class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}
const p = new Person("Alice");
console.log(p.getName());
