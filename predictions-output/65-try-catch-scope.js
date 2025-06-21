// 🧠 Scope inside try...catch block

try {
  throw new Error("oops");
} catch (e) {
  var message = e.message;
}

console.log(message); // ✅ "oops"

// 🧠 Catch bindings are block-scoped, but declared vars inside are hoisted
