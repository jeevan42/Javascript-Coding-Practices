// 🧠 Leading `0` may be parsed as octal (non-strict)

console.log(parseInt("071")); // ✅ 71 in modern JS, but beware legacy octal