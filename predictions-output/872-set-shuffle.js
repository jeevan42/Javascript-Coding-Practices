// Concept: Shuffle Set elements
// Problem: How to randomize order of Set?
// Solution:
function shuffleSet(set){
  const arr=[...set];
  for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
  return new Set(arr);
}
console.log(shuffleSet(new Set([1,2,3,4])));
// Conclusion: Fisher–Yates shuffle on array then Set.
