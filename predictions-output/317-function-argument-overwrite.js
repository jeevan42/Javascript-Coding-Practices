// 🧠 Declaring param again as local variable overwrites it

function greet(name) {
  var name = "Jeevan";
  return name;
}

console.log(greet("Ron")); // ✅ "Jeevan"