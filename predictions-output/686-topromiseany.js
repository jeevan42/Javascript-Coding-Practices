// Promise.any example
const p1 = Promise.reject("Fail 1");
const p2 = Promise.resolve("Success!");
Promise.any([p1, p2]).then(console.log).catch(console.error);
