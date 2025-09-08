// Concept: Convert Set to Linked List
// Problem: How to represent unique elements as a linked list?
// Solution:
class Node { constructor(val){ this.val=val; this.next=null; } }
function setToLinkedList(set){
  const arr=[...set]; let head=new Node(arr[0]); let curr=head;
  for(let i=1;i<arr.length;i++){ curr.next=new Node(arr[i]); curr=curr.next; }
  return head;
}
console.log(setToLinkedList(new Set([1,2,3])));
// Conclusion: Convert Set into sequential linked list.
