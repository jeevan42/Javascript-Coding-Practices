const users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' }
];

const user = users.find(u => u.id === 2);

console.log(user); // { id: 2, name: 'B' }
