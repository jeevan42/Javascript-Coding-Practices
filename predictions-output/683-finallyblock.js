// Promise finally block
const p = Promise.resolve("Success");
p.then(res => console.log(res))
 .catch(err => console.log(err))
 .finally(() => console.log("Cleanup done!"));