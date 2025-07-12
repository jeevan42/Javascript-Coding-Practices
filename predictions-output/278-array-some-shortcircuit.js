// 🧠 `.some()` stops at first true

[1, 2, 3].some(x => {
  console.log(x);
  return x > 1;
});
// ✅ logs: 1, 2