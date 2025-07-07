// 🧠 `lastIndex` persists across `.exec()` calls if global flag

const regex = /a/g;
console.log(regex.exec("a a")); // ✅ Match at index 0
console.log(regex.exec("a a")); // ✅ Match at index 2 (due to lastIndex)