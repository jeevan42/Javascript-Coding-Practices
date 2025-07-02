// 🧠 Object with getter/setter functions

const user = {
  first: "Jeevan",
  last: "Kumar",
  get fullName() {
    return `${this.first} ${this.last}`;
  },
  set fullName(name) {
    [this.first, this.last] = name.split(" ");
  }
};

user.fullName = "G1 Hacker";
console.log(user.first); // ✅ G1
console.log(user.fullName); // ✅ G1 Hacker