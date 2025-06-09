/**
 * 🧠 Problem: Find a Pair with a Given Sum in a Sorted Array (Two Pointer Pattern)
 *
 * 📘 Definition:
 *   Given a **sorted** array of integers and a target sum, determine whether there exists a pair
 *   whose sum equals the target. If such a pair exists, return it. Otherwise, return null.
 *
 * 📥 Input:
 *   - sorted array: [1, 2, 3, 4, 6]
 *   - target sum: 6
 *
 * 📤 Output:
 *   - [2, 4] or any valid pair
 *   - null if no such pair exists
 *
 * ⏱ Time Complexity: O(n) using two pointers
 * 🧪 Examples:
 *   findPairSum([1, 2, 3, 4, 6], 6)      ➞ [2, 4]
 *   findPairSum([1, 3, 5, 7, 12], 10)    ➞ [3, 7]
 *   findPairSum([2, 4, 5, 9, 11], 20)    ➞ null
 */

function findPairSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]]; // ✅ Found the pair
    } else if (sum < target) {
      left++; // Need bigger sum
    } else {
      right--; // Need smaller sum
    }
  }

  return null; // ❌ No pair found
}

// 🧪 Test Cases
console.log(findPairSum([1, 2, 3, 4, 6], 6));        // [2, 4]
console.log(findPairSum([1, 3, 5, 7, 12], 10));      // [3, 7]
console.log(findPairSum([2, 4, 5, 9, 11], 20));      // null
console.log(findPairSum([1, 2, 4, 4], 8));           // [4, 4]
console.log(findPairSum([], 5));                    // null
console.log(findPairSum([1], 1));                   // null

/**
 * 🧠 Explanation:
 * - Since the array is sorted, we can move two pointers from both ends.
 * - If the current sum is too small, move the left pointer up.
 * - If it's too big, move the right pointer down.
 * - This avoids nested loops and works in linear time.
 *
 * ⚠️ Notes:
 * - Only works on sorted arrays.
 * - Returns first matching pair it finds (not necessarily all).
 *
 * 🔥 Use-Cases:
 * - Classic for interviews
 * - Efficient alternative to brute force O(n^2) solution
 */
