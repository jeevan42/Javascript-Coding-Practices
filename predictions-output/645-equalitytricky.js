// Question: What will this print?
console.log(0 == "0");
console.log(0 === "0");

// Answer:
// true
// false
// Explanation: == does type coercion (string "0" becomes number 0). 
// === requires type and value match, so false.