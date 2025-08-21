// Q: Difference between ?? and || ?
const a = 0 || "fallback";   // "fallback"
const b = 0 ?? "fallback";   // 0

console.log(a, b);

// Answer: || treats falsy values (0, "", false) as fallback, ?? only checks null/undefined.
// Explanation: Use ?? when 0 or "" should be valid values.