// Auto Cleanup with Set
// Problem: Track temporary sessions that auto-expire.
// Solution:
const temp = new Set();
function add(id) {
  temp.add(id);
  setTimeout(() => temp.delete(id), 2000);
}
add("s1");
console.log(temp);
// Conclusion: Auto cleanup with timeout works with Set.