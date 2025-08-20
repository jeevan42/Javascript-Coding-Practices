// Question: What happens here?
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next().value);
console.log(g.next().value);

// Answer:
// 1
// 2
// Explanation: Generators (`function*`) produce values lazily with yield.