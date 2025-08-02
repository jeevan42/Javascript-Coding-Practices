const users = [{ id: 1 }, { id: 2 }];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2 }