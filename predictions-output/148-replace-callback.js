// 🧠 .replace() with callback

const text = "Price: $100";
const updated = text.replace(/\$(\d+)/, (_, num) => `$${+num + 50}`);
console.log(updated); // ✅ "Price: $150"

// 🧠 You can use regex group match with function