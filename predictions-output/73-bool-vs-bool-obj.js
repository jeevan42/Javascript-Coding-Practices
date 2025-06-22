// 🧠 Boolean vs Boolean object

console.log(typeof true);              // ✅ "boolean"
console.log(typeof new Boolean(true)); // ✅ "object"
console.log(new Boolean(false) ? "Yes" : "No"); // ✅ "Yes"

// 🧠 Boolean objects are always truthy, even if wrapping false!