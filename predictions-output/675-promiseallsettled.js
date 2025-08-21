// Q: Difference between Promise.all and Promise.allSettled?
const promises = [
  Promise.resolve("ok"),
  Promise.reject("fail"),
];

Promise.allSettled(promises).then(console.log);
// [{status:"fulfilled", value:"ok"}, {status:"rejected", reason:"fail"}]

// Answer: allSettled never fails, returns status for all.
// Explanation: Useful when you want all results regardless of rejection.