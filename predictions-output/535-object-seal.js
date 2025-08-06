const user = { name: 'Alice' };
Object.seal(user);
user.name = 'Bob';
user.age = 30; // ignored
console.log(user); // { name: 'Bob' }
