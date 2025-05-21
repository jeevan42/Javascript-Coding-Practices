// right-angled-triangle.js

/**
 * Function to print a right-angled triangle pattern
 * @param {number} n - number of rows
 */

// Example usage


function printRightAngledTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "* ";
    }    
    console.log(stars)
  }
};

printRightAngledTriangle(4);