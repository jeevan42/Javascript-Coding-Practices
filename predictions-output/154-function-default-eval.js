// 🧠 Function constructor uses eval under the hood

const fn = new Function("a", "b", "return a + b;");
console.log(fn(2, 3)); // ✅ 5

// ⚠️ Like eval, not safe — avoid in prod