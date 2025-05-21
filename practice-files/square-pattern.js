// square-pattern.js

/**
 * Function to print a square pattern of asterisks
 * @param {number} n - number of rows and columns
 */
function printSquarePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
}

// Example usage
printSquarePattern(4);