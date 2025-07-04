// 🧠 Bound function loses instanceof linkage

function Person() {}
const BoundPerson = Person.bind(null);

const obj = new BoundPerson();

console.log(obj instanceof Person); // ❌ false