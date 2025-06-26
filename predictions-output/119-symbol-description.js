// 🧠 Symbol description is optional label

const sym = Symbol("id");
console.log(sym.description); // ✅ "id"

const anon = Symbol();
console.log(anon.description); // ✅ undefined

// 🧠 Description is just a dev-friendly label