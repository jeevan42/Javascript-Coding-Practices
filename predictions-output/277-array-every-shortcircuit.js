// 🧠 `.every()` stops at first false

const result = [2, 4, 6].every(x => {
  console.log(x);
  return x % 2 === 0;
});
// ✅ logs: 2, 4, 6 (all passed)