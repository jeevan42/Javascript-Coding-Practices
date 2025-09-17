// Export Set to JSON
// Problem: Store Set in database.
// Solution:
const skills = new Set(["js","react"]);
const json = JSON.stringify([...skills]);
console.log(json);
// Conclusion: Convert Set to array for export.
