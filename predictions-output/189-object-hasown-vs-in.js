// 🧠 `in` checks prototype chain, `hasOwnProperty` does not

const base = { baseKey: true };
const child = Object.create(base);
child.ownKey = true;

console.log("baseKey" in child);              // ✅ true
console.log(child.hasOwnProperty("baseKey")); // ❌ false