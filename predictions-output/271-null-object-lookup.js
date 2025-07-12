// 🧠 Can't access property on null

const obj = null;
try {
  console.log(obj.key);
} catch (e) {
  console.log("Error:", e.message); // ✅ Error: Cannot read properties of null
}