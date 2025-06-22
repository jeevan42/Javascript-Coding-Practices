// 🧠 Primitives are passed by value

let x = 5;
function update(n) {
  n = 10;
}
update(x);
console.log(x); // ✅ 5

// 🧠 Primitives are not mutated when passed into functions