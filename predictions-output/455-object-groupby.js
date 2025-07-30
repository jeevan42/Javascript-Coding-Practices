// Group array of objects by property
const people = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Eve', role: 'admin' }
];
const grouped = people.reduce((acc, person) => {
  acc[person.role] = acc[person.role] || [];
  acc[person.role].push(person);
  return acc;
}, {});
console.log(grouped);