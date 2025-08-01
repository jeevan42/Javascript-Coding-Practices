const user = { profile: { name: "Jeevan" } };
console.log(user.profile?.name); // "Jeevan"
console.log(user.settings?.theme); // undefined