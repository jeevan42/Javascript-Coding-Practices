// 🧠 Symbol with description

const sym = Symbol("mySymbol");

console.log(sym);              // ✅ Symbol(mySymbol)
console.log(sym.description);  // ✅ "mySymbol"

// 🧠 Descriptions help debugging, not accessible via for...in
