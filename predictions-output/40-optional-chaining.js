// 🧠 Optional Chaining

const user = {
  profile: {
    name: "Jeevan"
  }
};

console.log(user?.profile?.name); 
// ✅ Jeevan

console.log(user?.address?.street); 
// ✅ undefined (no error)

// 🧠 Prevents runtime error if nested path is undefined
