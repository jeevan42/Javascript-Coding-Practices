// Pending Friend Requests
// Problem: Track pending friend requests.
// Solution:
const pending = new Set();
function request(from,to) {
  const key = `${from}->${to}`;
  if (pending.has(key)) return "Already requested";
  pending.add(key);
  return "Request sent";
}
console.log(request("u1","u2"));
console.log(request("u1","u2"));
// Conclusion: Prevents duplicate requests.
