// Random Sample from Set
// Problem: Pick a random element from a Set.
// Solution:
function randomSample(set) {
  const arr = [...set];
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomSample(new Set([10, 20, 30, 40])));
// Conclusion: Convert Set to array to sample random element.
