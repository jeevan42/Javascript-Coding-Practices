// 🧠 Named function expressions: name is read-only

const fn = function myFunc() {};
console.log(fn.name); // ✅ 'myFunc'

fn.name = "hacked"; 
console.log(fn.name); // ✅ Still 'myFunc' (read-only)