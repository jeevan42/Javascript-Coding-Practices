// Question: What will be output?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());

// Answer:
// 1
// 2
// Explanation: inner() closes over 'count'. 
// Each call updates the same variable in closure scope.