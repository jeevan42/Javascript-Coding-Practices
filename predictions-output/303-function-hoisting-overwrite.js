// 🧠 Function declarations get hoisted and can overwrite earlier ones

function sayHi() {
  return "Hi 1";
}
function sayHi() {
  return "Hi 2";
}

console.log(sayHi()); // ✅ "Hi 2"