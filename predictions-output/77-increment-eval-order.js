// 🧠 Evaluation order matters

let a = 1;
a = a++ + ++a;

console.log(a); // ❓

// Step by step:
// a++ → 1 (then a becomes 2)
// ++a → 3
// 1 + 3 = ✅ 4