// Message IDs
// Problem: Deduplicate chat messages by id.
// Solution:
const messages = new Set();
function receive(msgId) {
  if (messages.has(msgId)) return "Duplicate message";
  messages.add(msgId);
  return "Message stored";
}
console.log(receive("m1"));
console.log(receive("m1"));
// Conclusion: Avoids storing duplicates.
