// Logical assignment operators (&&=, ||=, ??=)
let a = 0;
a ||= 42; // Assign if falsy
console.log(a);

let b = true;
b &&= false; // Assign if truthy
console.log(b);

let c = null;
c ??= "default"; // Assign if null/undefined
console.log(c);
