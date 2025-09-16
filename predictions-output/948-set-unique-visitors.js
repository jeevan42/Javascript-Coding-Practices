// Unique Visitors
// Problem: Count unique visitors by IP.
// Solution:
const visitors = new Set();
["192.1","192.2","192.1"].forEach(ip => visitors.add(ip));
console.log(visitors.size);
// Conclusion: Sets naturally count uniques.
