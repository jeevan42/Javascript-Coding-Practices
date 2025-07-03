// 🧠 Numbers with leading 0 may be treated as octal (legacy)

console.log(010); // ⚠️ 8 in non-strict mode (octal)
// In strict mode → SyntaxError