// 🧠 `JSON.parse()` doesn't auto convert date strings

const json = '{"date": "2023-01-01T00:00:00Z"}';
const parsed = JSON.parse(json);
console.log(typeof parsed.date); // ✅ string