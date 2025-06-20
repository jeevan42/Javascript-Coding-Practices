// 🧠 Set preserves uniqueness

const a = new Set();
a.add(1);
a.add(1);
a.add("1");

console.log(a); 
// ✅ Set { 1, "1" }
// 🧠 Numbers and strings are different in Set
