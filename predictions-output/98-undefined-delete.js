// 🧠 delete doesn’t affect declared variables

let a = 10;
console.log(delete a); // ❌ false (can't delete declared vars)

const obj = { x: 1 };
console.log(delete obj.x); // ✅ true

// 🧠 `delete` works only on object properties