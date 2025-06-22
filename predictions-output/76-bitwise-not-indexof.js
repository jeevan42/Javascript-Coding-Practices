// 🧠 Bitwise NOT and indexOf trick

const str = "hello";
if (~str.indexOf("h")) console.log("Found"); // ✅ Found

// 🧠 ~(-1) = 0 → falsy, any other index becomes truthy