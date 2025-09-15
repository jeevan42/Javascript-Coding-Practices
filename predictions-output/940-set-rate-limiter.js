// Rate Limiter with Set
// Problem: Track users hitting an API within time window.
// Solution:
const activeUsers = new Set();
function request(user) {
  if (activeUsers.has(user)) return "Rate limit exceeded";
  activeUsers.add(user);
  setTimeout(() => activeUsers.delete(user), 1000);
  return "Request allowed";
}
console.log(request("user1"));
console.log(request("user1"));
// Conclusion: Sets help implement rate-limiting.
