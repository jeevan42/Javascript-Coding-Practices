// Invite Codes
// Problem: Ensure invite codes are one-time use.
// Solution:
const invites = new Set(["X1","X2"]);
function redeem(code) {
  if (!invites.has(code)) return "Invalid/used";
  invites.delete(code);
  return "Redeemed";
}
console.log(redeem("X1"));
console.log(redeem("X1"));
// Conclusion: Sets manage one-time codes easily.