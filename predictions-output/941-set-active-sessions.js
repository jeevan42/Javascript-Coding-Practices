// Active Sessions with Set
// Problem: Track active session IDs.
// Solution:
const sessions = new Set();
function login(id) { sessions.add(id); }
function logout(id) { sessions.delete(id); }
login("s1"); login("s2"); logout("s1");
console.log(sessions);
// Conclusion: Sets are efficient for tracking sessions.
