/**
 * Sorting Strings in Ascending and Descending Order
 *
 * Definitions:
 * - Ascending Order: Alphabetically from A to Z.
 * - Descending Order: Alphabetically from Z to A.
 *
 * Method Used:
 * - Array.prototype.sort()
 * - String.prototype.localeCompare() — a reliable way to compare strings alphabetically.
 *
 * localeCompare returns:
 *   - Negative number if string A comes before string B
 *   - 0 if both are equal
 *   - Positive number if string A comes after string B
 *
 * Important Note:
 * - The sort() method mutates (changes) the original array.
 * - To avoid mutation, use spread operator ([...arr]) or slice() to pass a copy.
 */

// Sample array of strings
const arr = ['def', 'aek', 'xuk', 'bat', 'eat', 'apple'];

// Function to sort in Ascending Order (A → Z)
const sortAscending = (array) => {
  // localeCompare compares strings alphabetically
  return array.sort((a, b) => a.localeCompare(b));
};

// Function to sort in Descending Order (Z → A)
const sortDescending = (array) => {
  // Reverse the comparison for descending
  return array.sort((a, b) => b.localeCompare(a));
};

// Print original array (shallow copy) before sorting
console.log("Original Array Shallow Copy:", arr.slice()); // slice creates a shallow copy

// Call and print ascending sort (copy used to avoid mutation)
console.log("Ascending Order:", sortAscending([...arr]));

// Call and print descending sort (copy used to avoid mutation)
console.log("Descending Order:", sortDescending([...arr]));

// Show that original array is unchanged
console.log("Original Array:", arr);
