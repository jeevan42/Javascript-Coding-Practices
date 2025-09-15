// Permissions Check with Set
// Problem: Verify user permissions.
// Solution:
const userPerms = new Set(["read","write"]);
const required = new Set(["read"]);
function hasPermissions(user, required) {
  return [...required].every(p => user.has(p));
}
console.log(hasPermissions(userPerms, required));
// Conclusion: Sets model permissions efficiently.
