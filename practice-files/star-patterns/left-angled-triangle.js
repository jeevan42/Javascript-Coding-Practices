// left-angled-triangle.js

/**
 * Function to print a left-angled triangle (right-aligned)
 * @param {number} n - number of rows
 */

// Example usage

function printLeftAngledTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 1; j <= n - i; j++) {
      stars += "  ";
    }
    for (let k = 1; k <= i; k++) {
      stars += "* ";
    }
    console.log(stars)
  }
}
printLeftAngledTriangle(4);