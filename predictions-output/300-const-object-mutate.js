// 🧠 `const` prevents reassignment, not mutation

const person = { name: "Jeevan" };
person.name = "Ron";
console.log(person.name); // ✅ "Ron"