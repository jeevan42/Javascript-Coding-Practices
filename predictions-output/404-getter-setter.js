class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(val) {
    this._name = val;
  }
}
const u = new User("jeevan");
console.log(u.name); // JEEVAN
