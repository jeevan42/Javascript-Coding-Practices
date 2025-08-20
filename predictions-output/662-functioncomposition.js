// Question: What is the result?
const double = x => x * 2;
const square = x => x * x;
const composed = x => square(double(x));
console.log(composed(3));

// Answer: 36
// Explanation: double(3)=6, then square(6)=36.