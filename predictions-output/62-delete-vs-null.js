// 🧠 Deleting vs nulling a property

const obj = { a: 1, b: 2 };

delete obj.a;
obj.b = null;

console.log(obj); // ✅ { b: null }

// 🧠 delete removes the key; null keeps it with empty value
