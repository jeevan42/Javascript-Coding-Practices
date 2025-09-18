// Event Tracking
// Problem: Ensure events are tracked only once per session.
// Solution:
const trackedEvents = new Set();
function track(e) {
  if (trackedEvents.has(e)) return "Already tracked";
  trackedEvents.add(e);
  return "Tracked event";
}
console.log(track("page_view"));
console.log(track("page_view"));
// Conclusion: Prevents duplicate event tracking.