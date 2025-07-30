// Optional chaining to access deeply nested properties
const user = { profile: { name: 'Amit' } };
console.log(user?.profile?.name); // Amit
console.log(user?.address?.city); // undefined