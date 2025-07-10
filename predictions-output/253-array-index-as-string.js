// 🧠 Object keys are always strings, even when using numbers

const obj = {};
obj[1] = "one";
console.log(obj["1"]); // ✅ "one"