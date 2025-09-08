// Concept: Convert BST back to Set
// Problem: Extract unique values from BST.
// Solution:
function bstToSet(root,set=new Set()){ if(!root) return set; set.add(root.val); bstToSet(root.left,set); bstToSet(root.right,set); return set; }
// Conclusion: DFS traversal builds Set of values.
