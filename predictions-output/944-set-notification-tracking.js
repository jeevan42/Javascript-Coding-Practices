// Notifications Tracking
// Problem: Prevent duplicate notifications.
// Solution:
const sent = new Set();
function sendNotif(id) {
  if (sent.has(id)) return "Already sent";
  sent.add(id);
  return "Notification sent";
}
console.log(sendNotif(1));
console.log(sendNotif(1));
// Conclusion: Sets stop redundant sends.
