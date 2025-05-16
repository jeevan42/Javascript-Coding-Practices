/**
 * Problem: Count the frequency of each number in an array
 * 
 * Definition:
 * Given an array of numbers, determine how many times each number appears.
 * This is useful in scenarios like counting votes, analyzing data sets, or solving coding problems involving frequency.
 * 
 * Approach:
 * - Use a JavaScript object as a frequency counter.
 * - Iterate over the array and increment the count for each number.
 * - Time Complexity: O(n), where n is the length of the array.
 * 
 * Example:
 * Input: [1, 2, 2, 3, 1, 4, 2]
 * Output: { '1': 2, '2': 3, '3': 1, '4': 1 }
 */

const arr = [1, 2, 2, 3, 1, 4, 2];
const freq = {};

for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}

console.log("Frequency of each number:");
console.log(freq);
