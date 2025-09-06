// Concept: Unique Pairs with Sum
// Problem: Find unique pairs with target sum.
// Solution:
function uniquePairs(arr,target) {
  const set=new Set(),res=new Set();
  for(let num of arr){
    let comp=target-num;
    if(set.has(comp)) res.add(JSON.stringify([Math.min(num,comp),Math.max(num,comp)]));
    set.add(num);
  }
  return [...res].map(JSON.parse);
}
console.log(uniquePairs([1,2,3,2,4],5)); // [[2,3],[1,4]]
