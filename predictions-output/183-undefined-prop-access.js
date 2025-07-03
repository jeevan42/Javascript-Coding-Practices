// 🧠 Accessing property on undefined throws error

const obj = {};
console.log(obj.user?.name); // ✅ undefined
console.log(obj.user.name);  // ❌ TypeError