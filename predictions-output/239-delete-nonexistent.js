// 🧠 Deleting non-existent keys is silent

const obj = { x: 1 };
console.log(delete obj.y); // ✅ true