// 🧠 Symbol keys don’t show in for...in or Object.keys()

const obj = {
  [Symbol('id')]: 123,
  name: "Jeevan"
};

console.log(Object.keys(obj)); // ✅ ['name']