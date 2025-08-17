// Question: What happens here?
let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 5;
console.log(obj1.a);

// Answer: 5
// Explanation: Objects are reference types. Both obj1 and obj2 point 
// to the same memory location.