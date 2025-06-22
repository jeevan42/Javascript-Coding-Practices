// 🧠 Duplicate keys overwrite earlier ones

const obj = { a: 1, a: 2 };
console.log(obj); // ✅ { a: 2 }

// 🧠 Last assignment wins silently