const user = { name: 'Alice', password: '1234' };
const json = JSON.stringify(user, ['name']);
console.log(json); // {"name":"Alice"}
