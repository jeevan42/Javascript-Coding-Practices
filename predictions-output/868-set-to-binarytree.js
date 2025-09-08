// Concept: Convert Set to Binary Search Tree
// Problem: Structure unique elements into BST.
// Solution:
class TreeNode{constructor(val){this.val=val;this.left=this.right=null;}}
function insert(root,val){ if(!root) return new TreeNode(val); if(val<root.val) root.left=insert(root.left,val); else root.right=insert(root.right,val); return root; }
function setToBST(set){ let root=null; for(const v of set) root=insert(root,v); return root; }
console.log(setToBST(new Set([3,1,2])));
// Conclusion: Sets can be transformed into trees.
