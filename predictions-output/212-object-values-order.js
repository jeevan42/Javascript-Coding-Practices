// 🧠 Non-integer keys maintain insertion order

const obj = { b: 2, a: 1, "1": "one" };
console.log(Object.values(obj)); // ✅ ['one', 2, 1]