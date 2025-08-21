// Q: What is a Proxy in JS?
const target = { message: "hi" };

const proxy = new Proxy(target, {
  get(obj, prop) {
    return prop in obj ? obj[prop] : "Not Found";
  },
});

console.log(proxy.message); // hi
console.log(proxy.test);    // Not Found

// Answer: Proxy intercepts object operations.
// Explanation: Can customize get/set and other behaviors.