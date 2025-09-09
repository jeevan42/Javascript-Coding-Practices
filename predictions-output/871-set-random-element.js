// Concept: Pick random element from Set
// Problem: How to randomly select from Set?
// Solution:
function randomFromSet(set){
  const arr=[...set];
  return arr[Math.floor(Math.random()*arr.length)];
}
console.log(randomFromSet(new Set([10,20,30])));
// Conclusion: Convert to array for random access.
