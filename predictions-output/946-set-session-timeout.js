// Session Timeout with Set
// Problem: Expire sessions after time limit.
// Solution:
const active = new Set();
function startSession(id) {
  active.add(id);
  setTimeout(() => active.delete(id), 2000);
}
startSession("user1");
console.log(active);
// Conclusion: Use Sets + setTimeout for expiry.
