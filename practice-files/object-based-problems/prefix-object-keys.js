/*
📘 Problem 29: Add Prefix to All Object Keys

✅ Description:
Add a prefix (like "user_" or "dev_") to every key in the object.
*/

const prefixKeys = (obj, prefix) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [prefix + key, value])
  );
};

console.log(prefixKeys({ name: "Alice", age: 30 }, "user_"));
