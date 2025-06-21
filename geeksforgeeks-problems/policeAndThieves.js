/**
 * 🕵️ Police and Thieves Problem
 * 
 * 📝 Problem Definition:
 * Given an array of characters where:
 * - 'P' represents a policeman
 * - 'T' represents a thief
 * and a positive integer `k` representing the maximum distance a policeman can catch a thief.
 * 
 * Rules:
 * - Each policeman can catch only one thief.
 * - A thief can be caught only if he is within `k` distance of a policeman.
 * - We want to return the maximum number of thieves that can be caught.
 * 
 * 📥 Input:
 * arr[] = ['P', 'T', 'T', 'P', 'T']
 * k = 1
 * 
 * 📤 Output:
 * 2
 * 
 * ✅ Approach:
 * 1. Track indexes of police and thieves separately.
 * 2. Use a greedy matching approach:
 *    - If the distance between the front of the queues is <= k, it's a match.
 *    - Otherwise, remove the one who is too far to match.
 * 3. Count the successful matches.
 * 
 * ⏱️ Time Complexity: O(n)
 */

class Solution {
    catchThieves(arr, k) {
        let police = [];
        let thieves = [];
        let result = 0;

        // Step 1: Collect positions of all police and thieves
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'P') {
                police.push(i);
            } else if (arr[i] === 'T') {
                thieves.push(i);
            }
        }

        // Step 2: Match them greedily
        while (police.length > 0 && thieves.length > 0) {
            let p = police[0];
            let t = thieves[0];

            if (Math.abs(p - t) <= k) {
                result++;
                police.shift();
                thieves.shift();
            } else if (t < p) {
                thieves.shift();
            } else {
                police.shift();
            }
        }

        return result;
    }
}

// 🧪 Example usage
const obj = new Solution();
const testArr = ['P', 'T', 'T', 'P', 'T'];
const k = 1;
console.log("Maximum thieves caught:", obj.catchThieves(testArr, k)); // Output: 2