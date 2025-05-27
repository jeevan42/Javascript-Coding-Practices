/**
 * Problem: Reverse Each Word in a String
 *
 * Given a full name as a string input, your task is to reverse each word individually
 * while maintaining the word order.
 *
 * Example:
 * Input:  "jeevan kumar verma"
 * Output: "amrev ramuk naveej"
 *
 * Explanation:
 * - The words in the string are: ["jeevan", "kumar", "verma"]
 * - Reversing each word gives: ["naveej", "ramuk", "amrev"]
 * - Then reverse the order of words: ["amrev", "ramuk", "naveej"]
 * - Join them with spaces: "amrev ramuk naveej"
 */

// Solution Function
function reverseEachWordOrder(input) {
  return input
    .split(' ')                // Split into words
    .map(word => word.split('').reverse().join('')) // Reverse each word
    .reverse()                 // Reverse the order of the words
    .join(' ');                // Join back into a single string
}

// Test Example
const input = "jeevan kumar verma";
const output = reverseEachWordOrder(input);
console.log("Output >", output); // Output > amrev ramuk naveej
