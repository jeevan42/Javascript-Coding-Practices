const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name);     // Alice
console.log(user?.address?.street);   // undefined (no error)