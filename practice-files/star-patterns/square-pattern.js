// square-pattern.js

/**
 * Function to print a square pattern of asterisks
 * @param {number} n - number of rows and columns
 */

// Example usage


function printSquarePattern(n) {
  for (let i = 0; i < n; i++) {
    let stars = "";
    for (let j = 0; j < n; j++) {
      stars += "* ";
    }
    console.log(stars)
  }
};

printSquarePattern(4);