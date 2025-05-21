// left-angled-triangle.js

/**
 * Function to print a left-angled triangle (right-aligned)
 * @param {number} n - number of rows
 */
function printLeftAngledTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces (each space as "  " for visual alignment)
    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }

    // Print stars
    for (let k = 1; k <= i; k++) {
      row += "* ";
    }

    console.log(row);
  }
}

// Example usage
printLeftAngledTriangle(4);