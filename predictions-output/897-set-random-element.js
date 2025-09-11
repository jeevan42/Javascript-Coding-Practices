// Random Element from Set
// Problem: Pick a random element from set.
// Solution:
function randomFromSet(s) {
  const arr = [...s];
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomFromSet(new Set([1,2,3,4])));
// Conclusion: Convert to array and pick random index.
