// AggregateError example
const p1 = Promise.reject("Err1");
const p2 = Promise.reject("Err2");
Promise.any([p1, p2]).catch(e => {
  console.log(e instanceof AggregateError);
  console.log(e.errors);
});
