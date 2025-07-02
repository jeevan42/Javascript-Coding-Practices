// 🧠 JSON.stringify skips functions & symbols

const obj = {
  name: "Jeevan",
  greet: () => "Hello",
  [Symbol("id")]: 42,
};

console.log(JSON.stringify(obj)); // ✅ {"name":"Jeevan"}