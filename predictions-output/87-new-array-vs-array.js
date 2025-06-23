// 🧠 Array constructor differences

console.log(new Array(3));     // ✅ [ <3 empty items> ]
console.log(Array(3));         // ✅ [ <3 empty items> ]
console.log([3]);              // ✅ [3]

// 🧠 Be cautious when using `Array(n)` — it creates holes, not zeros