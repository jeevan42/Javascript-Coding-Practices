// Throttling with Set
// Problem: Prevent user from spamming actions within short time.
// Solution:
const throttleSet = new Set();
function click(user) {
  if (throttleSet.has(user)) return "Blocked";
  throttleSet.add(user);
  setTimeout(() => throttleSet.delete(user), 1000);
  return "Accepted";
}
console.log(click("u1"));
console.log(click("u1"));
// Conclusion: Set + timeout handles throttling.