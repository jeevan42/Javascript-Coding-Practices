// Concept: Convert Linked List to Set
// Problem: Ensure uniqueness while reading linked list.
// Solution:
function linkedListToSet(head){
  const s=new Set(); let curr=head;
  while(curr){ s.add(curr.val); curr=curr.next; }
  return s;
}
// Conclusion: Iterating linked list into Set enforces uniqueness.
