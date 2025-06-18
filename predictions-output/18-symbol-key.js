// 🧠 Symbol Key Access

const sym = Symbol("id");
const obj = {
  [sym]: 123,
  normal: "abc"
};

console.log(obj[sym]); 
// ✅ 123

console.log(obj["sym"]); 
// ❌ undefined
// 🧠 Symbol is not coerced into string key
