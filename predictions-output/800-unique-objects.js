// Concept: Unique Objects by Property
// Problem: Remove duplicates from array of objects based on 'id'.
// Solution:
const users = [
  {id:1, name:'A'},
  {id:2, name:'B'},
  {id:1, name:'C'}
];
const uniqueById = [...new Map(users.map(u => [u.id, u])).values()];
console.log(uniqueById); // [{id:1,name:'C'},{id:2,name:'B'}]