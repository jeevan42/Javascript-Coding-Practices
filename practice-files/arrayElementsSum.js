/**
 * Problem: Sum of Nested Array Elements
 *
 * Given an array that may contain nested arrays,
 * write a function to return the sum of all its elements, 
 * including the nested ones at any depth.
 *
 * Example:
 *   Input:  [8, 2, [4, 16], 15]
 *   Output: 45
 *
 * Explanation:
 *   Flattened version of the array: [8, 2, 4, 16, 15]
 *   Sum: 8 + 2 + 4 + 16 + 15 = 45
 *
 * Bonus:
 * - Handle deeply nested arrays like: [1, [2, [3, [4]]]]
 *   Output: 10
 */

/**
 * Recursively sums all elements in a nested array.
 *
 * @param {Array} arr - The input array (can contain nested arrays)
 * @returns {Number} - The total sum of all elements
 */
const sumOfNestedArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumOfNestedArray(arr[i]); // Recursively sum nested arrays
        } else {
            sum += arr[i]; // Add number directly
        }
    }
    return sum;
};

// Test cases
const array1 = [8, 2, [4, 16], 15];
const array2 = [1, [2, [3, [4]]]];
const array3 = [5, [10, [15, [20]]], 25];

console.log(`Sum of array1:`, sumOfNestedArray(array1)); // 45
console.log(`Sum of array2:`, sumOfNestedArray(array2)); // 10
console.log(`Sum of array3:`, sumOfNestedArray(array3)); // 75



/* ------------------------------------------------------------------ */
/*  NOT RECOMMENDED — uses Array.flat(), only flattens one level      */
/*  ⚠️  Breaks if the array is nested more than one level deep.        */
/* ------------------------------------------------------------------ */
// const sumOfNestedArrayFlat = (arr) =>
//   arr.flat().reduce((total, num) => total + num, 0);
