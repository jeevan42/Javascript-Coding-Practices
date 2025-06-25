// 🧠 void operator always returns undefined

console.log(void 0);         // ✅ undefined
console.log(void (1 + 2));   // ✅ undefined

// 🧠 Used to ignore returned value (common in bookmarklets)