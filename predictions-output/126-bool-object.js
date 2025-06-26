// 🧠 new Boolean() creates truthy object

const a = new Boolean(false);
if (a) {
  console.log("✅ truthy");
}

// 🧠 Objects are always truthy, even if value is false