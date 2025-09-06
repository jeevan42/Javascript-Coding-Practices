// Concept: Longest Unique Substring
// Problem: Find length of longest substring without repeating chars.
// Solution:
function lengthOfLongestSubstring(s) {
  let set=new Set(), l=0,res=0;
  for(let r=0;r<s.length;r++){
    while(set.has(s[r])) set.delete(s[l++]);
    set.add(s[r]);
    res=Math.max(res,r-l+1);
  }
  return res;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
