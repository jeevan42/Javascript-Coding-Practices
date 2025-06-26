// 🧠 Object to primitive coercion

const obj = {
  valueOf() {
    return 42;
  },
  toString() {
    return "hello";
  }
};

console.log(obj + 1); // ✅ 43
console.log(String(obj)); // ✅ "hello"

// 🧠 JS uses valueOf or toString based on context