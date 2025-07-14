// 🧠 `NaN !== NaN`, so `indexOf(NaN)` fails

console.log([NaN].indexOf(NaN)); // ✅ -1