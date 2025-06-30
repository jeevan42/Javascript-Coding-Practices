// 🧠 Arrow functions can't be constructors

const Arrow = () => {};
const obj = new Arrow(); // ❌ TypeError: Arrow is not a constructor

// ✅ Use function declaration or class for constructors