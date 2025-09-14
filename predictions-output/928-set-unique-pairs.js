// Unique Pairs from Array
// Problem: Generate unique element pairs using Set.
// Solution:
function uniquePairs(arr) {
  const pairs = new Set();
  for (let i=0;i<arr.length;i++) {
    for (let j=i+1;j<arr.length;j++) {
      pairs.add([arr[i], arr[j]].toString());
    }
  }
  return pairs;
}
console.log(uniquePairs([1,2,3]));
// Conclusion: Sets ensure pair uniqueness.
