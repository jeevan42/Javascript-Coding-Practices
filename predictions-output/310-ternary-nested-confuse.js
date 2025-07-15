// 🧠 Nested ternary can get confusing — use parentheses

const result = true ? false ? "A" : "B" : "C";
console.log(result); // ✅ "B"