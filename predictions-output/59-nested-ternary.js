// 🧠 Nested ternary confusion

const score = 75;
const result = score > 90 ? "A" : score > 70 ? "B" : "C";

console.log(result); // ✅ "B"

// 🧠 Always wrap nested ternaries or use if-else for clarity
