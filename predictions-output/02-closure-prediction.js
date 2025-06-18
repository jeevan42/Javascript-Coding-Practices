// 🧠 Closure Prediction

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const a = outer();
a(); // ✅ Output: 1
a(); // ✅ Output: 2

const b = outer();
b(); // ✅ Output: 1
// 🧠 Explanation:
// - Each call to outer() creates a new closure with its own count.
// - a() maintains its own count (1, 2), and b() starts fresh from 0 → 1.
