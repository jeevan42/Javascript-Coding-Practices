// 🧠 Function length property

function a(x, y) {}
function b(x, y = 2) {}
function c(...args) {}

console.log(a.length); // ✅ 2
console.log(b.length); // ✅ 1 → only counts parameters before default
console.log(c.length); // ✅ 0 → rest parameters are not counted
