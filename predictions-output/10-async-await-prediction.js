// 🧠 Async/Await Execution Order

async function async1() {
  console.log("1");
  await async2();
  console.log("2");
}

async function async2() {
  console.log("3");
}

console.log("4");
async1();
console.log("5");

// ✅ Output:
// 4
// 1
// 3
// 5
// 2

// 🧠 Explanation:
// - "4" runs first (synchronous)
// - async1 starts → logs "1"
// - calls async2 → logs "3"
// - await pauses async1
// - "5" runs while async1 is paused
// - then "2" runs after the await is resolved
