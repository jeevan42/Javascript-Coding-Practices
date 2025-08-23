// FinalizationRegistry Example
const registry = new FinalizationRegistry((value) => {
  console.log(`Object with value ${value} was garbage collected`);
});

let obj = { name: "Test" };
registry.register(obj, "TestValue");
obj = null; // Eligible for GC
