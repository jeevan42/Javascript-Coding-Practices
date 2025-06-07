// File: proxy-deep-watch.js

/*
📘 Problem: Create a deep watcher for an object using Proxy,
so that any nested property change triggers a callback.

Concept:
- JavaScript Proxy allows intercepting operations on objects.
- Deep watching means detecting changes at any nested level.
- Useful in frameworks or state management to reactively track changes.

Example:
const obj = { user: { name: "Alice", address: { city: "NY" } } };

watchDeep(obj, () => {
  console.log("Object changed!");
});

obj.user.name = "Bob";       // Should trigger callback
obj.user.address.city = "LA"; // Should also trigger callback
*/

// Solution:

function watchDeep(target, callback) {
  if (typeof target !== "object" || target === null) return target;

  return new Proxy(target, {
    get(obj, prop) {
      const value = obj[prop];
      // Recursively wrap nested objects with Proxy
      if (typeof value === "object" && value !== null) {
        return watchDeep(value, callback);
      }
      return value;
    },
    set(obj, prop, value) {
      obj[prop] = value;
      callback(); // Trigger callback on any set
      return true;
    },
    deleteProperty(obj, prop) {
      delete obj[prop];
      callback(); // Trigger callback on deletion
      return true;
    }
  });
}

// Example usage:
const obj = {
  user: {
    name: "Alice",
    address: { city: "NY" },
  },
};

const watchedObj = watchDeep(obj, () => {
  console.log("Object changed!");
});

watchedObj.user.name = "Bob";       // Logs: Object changed!
watchedObj.user.address.city = "LA"; // Logs: Object changed!
delete watchedObj.user.address;      // Logs: Object changed!
