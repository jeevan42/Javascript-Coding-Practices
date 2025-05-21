// right-angled-triangle.js

/**
 * Function to print a right-angled triangle pattern
 * @param {number} n - number of rows
 */
function printRightAngledTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
}

// Example usage
printRightAngledTriangle(4);