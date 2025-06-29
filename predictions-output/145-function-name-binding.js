// 🧠 Function name is read-only

const fn = function myFn() {
  return "hello";
};

console.log(fn.name); // ✅ "myFn"

try {
  fn.name = "newName";
} catch (e) {
  console.log("❌ Cannot overwrite function name");
}