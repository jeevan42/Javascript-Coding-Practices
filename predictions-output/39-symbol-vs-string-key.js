// 🧠 Symbols are not enumerable with for...in

const sym = Symbol("id");
const obj = {
  [sym]: "secret",
  normal: "public"
};

for (let key in obj) {
  console.log(key); 
}
// ✅ Output: normal
// 🧠 Symbol keys are not iterated in for...in
