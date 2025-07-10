// 🧠 Template literals can nest and evaluate expressions

const a = 5;
const msg = `The result is: ${a > 3 ? `✅ Pass` : `❌ Fail`}`;
console.log(msg); // ✅ The result is: ✅ Pass