// 🧠 Dynamic function creation

const sum = new Function("a", "b", "return a + b");
console.log(sum(2, 3)); // ✅ 5

// 🧠 Avoid using this for user-input-based dynamic code
