/**
 * Merges two sorted arrays into one sorted array.
 */
function mergeSorted(a, b) {
  const res = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    res.push(a[i] < b[j] ? a[i++] : b[j++]);
  }
  return res.concat(a.slice(i), b.slice(j));
}

// Example:
console.log(mergeSorted([1,3,5], [2,4,6])); // [1,2,3,4,5,6]
