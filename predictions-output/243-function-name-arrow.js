// 🧠 Arrow functions don’t have their own `name` binding

const add = () => {};
console.log(add.name); // ✅ 'add' (inferred from variable)