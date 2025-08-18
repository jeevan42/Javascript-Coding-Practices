// Question: What will this log?
const obj = { user: { name: "JS" } };
console.log(obj.user?.name);
console.log(obj.address?.street);

// Answer:
// JS
// undefined
// Explanation: Optional chaining ?. prevents error if property is missing.