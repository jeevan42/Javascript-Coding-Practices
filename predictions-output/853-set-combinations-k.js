// Concept: K-combinations from Set
// Problem: Generate subsets of fixed length.
// Solution:
function kCombinations(set, k) {
  const arr=[...set];
  if (k===0) return [[]];
  if (arr.length<k) return [];
  const [first,...rest]=arr;
  const withFirst=kCombinations(new Set(rest),k-1).map(c=>[first,...c]);
  const withoutFirst=kCombinations(new Set(rest),k);
  return [...withFirst,...withoutFirst];
}
console.log(kCombinations(new Set([1,2,3]),2));
// Conclusion: Recursive combinations generator.
