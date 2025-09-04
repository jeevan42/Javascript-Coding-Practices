// Concept: Unique Subarrays
// Problem: Remove duplicate subarrays.
// Solution:
function uniqueSubarrays(arr) {
  const seen = new Set();
  return arr.filter(sub => {
    const key = JSON.stringify(sub);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
console.log(uniqueSubarrays([[1,2],[2,3],[1,2]])); // [[1,2],[2,3]]