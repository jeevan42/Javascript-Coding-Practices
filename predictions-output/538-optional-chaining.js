const user = { profile: { name: 'Alice' } };
console.log(user?.profile?.name); // 'Alice'
console.log(user?.address?.city); // undefined
