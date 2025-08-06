const user = { name: 'Alice' };
Object.freeze(user);
user.name = 'Bob'; // ignored
console.log(user); // { name: 'Alice' }
