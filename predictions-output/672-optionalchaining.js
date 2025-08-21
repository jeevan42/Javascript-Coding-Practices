// Q: What does optional chaining (?.) do?
const user = { profile: { name: "Jeevan" } };

console.log(user.profile?.name);   // Jeevan
console.log(user.contact?.email);  // undefined, no error

// Answer: It safely checks nested properties.
// Explanation: Prevents runtime errors if a property doesn’t exist.