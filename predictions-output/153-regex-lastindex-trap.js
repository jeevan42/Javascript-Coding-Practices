// 🧠 .lastIndex trap with global regex

const regex = /a/g;
regex.test("a"); // true
regex.test("a"); // false ❗

regex.lastIndex = 0;
regex.test("a"); // true again

// ⚠️ Global regex stateful — reset manually or avoid sharing