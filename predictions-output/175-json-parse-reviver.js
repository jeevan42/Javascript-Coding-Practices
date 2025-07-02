// 🧠 Reviver in JSON.parse to transform values

const str = `{"num": "42", "flag": "true"}`;
const parsed = JSON.parse(str, (key, value) => {
  if (key === "num") return Number(value);
  if (key === "flag") return value === "true";
  return value;
});

console.log(parsed); // ✅ { num: 42, flag: true }