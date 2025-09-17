// Temporary Blocklist
// Problem: Block user temporarily.
// Solution:
const blocked = new Set();
function block(u) {
  blocked.add(u);
  setTimeout(() => blocked.delete(u), 1000);
}
block("spammer");
console.log(blocked);
// Conclusion: Auto-expiry blocklist with Sets.
