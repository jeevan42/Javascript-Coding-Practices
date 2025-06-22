// 🧠 eval can access outer scope (but avoid using it)

const a = 5;
eval("console.log(a)"); // ✅ 5

// 🧠 eval executes code in the current scope — it’s powerful but unsafe and discouraged