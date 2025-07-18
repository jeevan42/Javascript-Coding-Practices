// 335-number-epsilon.js 

function nearlyEqual(a, b) { 
return Math.abs(a - b) < Number.EPSILON; 
} 

console.log(nearlyEqual(0.1 + 0.2, 0.3)); 
// true (in this use case)
