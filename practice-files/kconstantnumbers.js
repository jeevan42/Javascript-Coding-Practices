/**
 * K Closest Numbers to a Target in a Sorted Array
 * 
 * Given a sorted array, a target number x, and a number k,
 * return the k closest integers to x in the array.
 * The result should be sorted in ascending order.
 * If there is a tie (same distance to x), choose the smaller number.
 *
 * Author: Jeevan (for GitHub)
 */

function findKClosestElements(arr, k, x) {
  // Step 1: Sort the array based on the absolute difference from x
  // If two elements have same diff, sort by smaller value
  const sortedByClosest = arr.slice().sort((a, b) => {
    const diffA = Math.abs(a - x);
    const diffB = Math.abs(b - x);
    
    if (diffA === diffB) {
      return a - b; // prefer smaller number if tie
    }
    
    return diffA - diffB;
  });

  // Step 2: Take the first k elements
  const closestK = sortedByClosest.slice(0, k);

  // Step 3: Sort result in ascending order (as required by problem)
  return closestK.sort((a, b) => a - b);
}

// --------------------------
// Example Usages / Test Cases
// --------------------------

console.log(findKClosestElements([1, 2, 3, 4, 5], 4, 3));
// Output: [1, 2, 3, 4]

console.log(findKClosestElements([1, 3, 5, 7, 9], 3, 6));
// Output: [3, 5, 7]

console.log(findKClosestElements([2, 4, 5, 6, 9], 2, 7));
// Output: [6, 5]