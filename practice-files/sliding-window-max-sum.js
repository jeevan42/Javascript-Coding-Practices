/**
 * 🧠 Problem: Maximum Sum of Subarray of Size K (Sliding Window Pattern)
 *
 * 📘 Definition:
 *   Given an array of integers and a number `k`, find the maximum sum of any contiguous subarray of size `k`.
 *
 * 📥 Input:
 *   arr = [2, 1, 5, 1, 3, 2], k = 3
 * 📤 Output:
 *   9  ➞ [5,1,3]
 *
 * ❌ Brute Force: O(n*k)
 * ✅ Optimized Sliding Window: O(n)
 */

function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  let maxSum = 0;
  let windowSum = 0;

  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Slide the window
  for (let end = k; end < arr.length; end++) {
    windowSum += arr[end] - arr[end - k]; // Add next element, remove first
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// 🧪 Test Cases
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));     // 9
console.log(maxSubarraySum([1, 9, 2, 6, -1, 4], 2));    // 11
console.log(maxSubarraySum([4, 2, 1, 7, 8, 1, 2, 8, 1], 3)); // 16
console.log(maxSubarraySum([1, 2], 3));                 // null
console.log(maxSubarraySum([], 2));                    // null

/**
 * 🧠 Explanation:
 * - First calculate the sum of the first `k` elements.
 * - Then slide the window one element at a time:
 *   - Subtract the element going out of the window
 *   - Add the element coming into the window
 * - Keep track of the max sum.
 *
 * ⚡ Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 *
 * 🔥 Use-Cases:
 * - Stock price movements
 * - Temperature trends
 * - High-frequency data analysis
 */
