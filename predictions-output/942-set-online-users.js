// Online Users with Set
// Problem: Track online users in real-time app.
// Solution:
const online = new Set();
function userJoin(u) { online.add(u); }
function userLeave(u) { online.delete(u); }
userJoin("Jeevan"); userJoin("Aman"); userLeave("Jeevan");
console.log(online);
// Conclusion: Perfect for real-time presence tracking.
