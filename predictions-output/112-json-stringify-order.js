// 🧠 `JSON.stringify()` maintains insertion order (mostly)

const obj = { b: 2, a: 1, c: 3 };
console.log(JSON.stringify(obj)); // ✅ {"b":2,"a":1,"c":3}

// 🧠 But keys like numbers may be reordered in arrays or JSON