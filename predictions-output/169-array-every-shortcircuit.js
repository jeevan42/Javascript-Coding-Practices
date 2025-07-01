// 🧠 .every() short-circuits on first false

let count = 0;
[2, 4, 6, 7].every(n => {
  count++;
  return n % 2 === 0;
});

console.log(count); // ✅ 4 stops at 7 (false)