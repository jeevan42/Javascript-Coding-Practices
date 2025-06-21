// 🧠 JSON.stringify and key order

const obj = { b: 1, a: 2, c: 3 };
console.log(JSON.stringify(obj)); 
// ✅ {"b":1,"a":2,"c":3}

// 🧠 Key order is preserved as inserted — no sorting like in other languages
