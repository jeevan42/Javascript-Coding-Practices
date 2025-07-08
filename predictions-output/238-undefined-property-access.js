// 🧠 Accessing undefined.prop throws; optional chaining helps

let user;
try {
  console.log(user.name); // ❌ TypeError
} catch (e) {
  console.log("Error caught"); // ✅
}

console.log(user?.name); // ✅ undefined