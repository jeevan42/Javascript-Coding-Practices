const user = { name: "Jeevan", age: 25 };
Object.entries(user).map(([key, value]) => {
  console.log(`${key}: ${value}`);
});
