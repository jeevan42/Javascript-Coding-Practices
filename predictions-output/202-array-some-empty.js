// 🧠 .some() on empty array returns false

const result = [].some(x => x > 0);

console.log(result); // ✅ false