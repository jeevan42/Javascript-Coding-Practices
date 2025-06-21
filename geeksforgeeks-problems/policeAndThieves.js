/**
 * 🕵️‍♂️ Police and Thieves — Explained JS Solution
 * 
 * 📘 Problem Statement:
 * Given an array where:
 * - 'P' = Policeman
 * - 'T' = Thief
 * And a number `k` representing the maximum distance within which a policeman can catch a thief.
 * 
 * Rules:
 * - Each policeman can catch only one thief.
 * - Each thief can be caught by only one policeman.
 * - A policeman cannot catch a thief who is more than `k` units away.
 * 
 * 🎯 Goal:
 * Find the maximum number of thieves that can be caught.
 * 
 * 🧠 Behind the Scenes: How the Logic Works
 * ------------------------------------------------
 * 1. We scan the array once, and:
 *    - Push all the policeman indexes into a `police` queue
 *    - Push all the thief indexes into a `thieves` queue
 * 
 * 2. Now we try to match the front of both queues:
 *    - If the distance is ≤ k → it's a match. Thief caught!
 *    - If the thief is too far left → remove thief
 *    - If the policeman is too far left → remove policeman
 * 
 * 3. Repeat until one of the queues becomes empty.
 * 
 * 🔍 Example:
 * arr = ['P', 'T', 'T', 'P', 'T'], k = 1
 * Indexes:
 *  0    1    2    3    4
 * ['P', 'T', 'T', 'P', 'T']
 * 
 * Step 1:
 *   police = [0, 3]
 *   thieves = [1, 2, 4]
 * 
 * Step 2:
 *   Match 0 (P) with 1 (T) → caught ✅
 *   Match 3 (P) with 2 (T) → caught ✅
 *   Now police = [], so we're done.
 * 
 * ✅ Output = 2
 * 
 * ⏱ Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

class Solution {
    catchThieves(arr, k) {
        let police = [];
        let thieves = [];
        let result = 0;

        // Step 1: Record positions
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'P') police.push(i);
            if (arr[i] === 'T') thieves.push(i);
        }

        // Step 2: Try to match using greedy logic
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

// 🧪 Example Usage
const obj = new Solution();
const arr = ['P', 'T', 'T', 'P', 'T'];
const k = 1;

console.log("🔐 Maximum thieves caught:", obj.catchThieves(arr, k)); // Output: 2