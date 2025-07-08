// 🧠 Function.length returns count of declared params (before first default)

function test(a, b, c = 3) {}
console.log(test.length); // ✅ 2