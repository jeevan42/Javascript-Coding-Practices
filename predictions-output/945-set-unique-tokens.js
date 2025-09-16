// Unique Tokens
// Problem: Ensure tokens are unique.
// Solution:
const tokens = new Set();
function generate(token) {
  if (tokens.has(token)) return "Duplicate";
  tokens.add(token);
  return "New token added";
}
console.log(generate("abc"));
console.log(generate("abc"));
// Conclusion: Sets guarantee token uniqueness.
