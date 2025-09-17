// Batch Processing
// Problem: Collect items into batch before processing.
// Solution:
const batch = new Set();
function addItem(i) {
  batch.add(i);
  if (batch.size >= 3) {
    console.log("Processing:", [...batch]);
    batch.clear();
  }
}
addItem(1); addItem(2); addItem(3);
// Conclusion: Sets are useful for batching.
