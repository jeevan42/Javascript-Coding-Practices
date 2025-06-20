// 🧠 Return object in constructor

function Person() {
  this.name = "Jeevan";
  return { name: "Overridden" };
}

const p = new Person();
console.log(p.name); 
// ✅ Overridden
// 🧠 If constructor returns an object, that object is returned instead of `this`
