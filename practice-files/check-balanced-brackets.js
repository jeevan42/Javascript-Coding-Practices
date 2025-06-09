/**
 * 🧩 Problem: Check Balanced Brackets
 *
 * 📘 Definition:
 *   Write a function to check if a string containing brackets is balanced.
 *   Brackets: (), {}, []
 * 
 *   A string is considered balanced if:
 *   - Every opening bracket has a corresponding closing bracket in the correct order.
 *   - Nesting is valid.
 *
 * 📥 Input: A string containing brackets like "()[]{}", "([{}])", etc.
 * 📤 Output: Boolean - true if balanced, false otherwise.
 *
 * 🧪 Examples:
 *   isBalanced("()")           ➞ true
 *   isBalanced("({[]})")       ➞ true
 *   isBalanced("({[)]}")       ➞ false
 *   isBalanced("(((())))")     ➞ true
 *   isBalanced("[({})](]")     ➞ false
 */

function isBalanced(str) {
  // Mapping of closing brackets to opening ones
  const bracketMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const stack = [];

  for (let char of str) {
    // If it's an opening bracket, push to stack
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    }
    // If it's a closing bracket
    else if ([')', '}', ']'].includes(char)) {
      // Pop from stack and check if matches
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
    // Ignore other characters if any (optional handling)
  }

  // If stack is empty, all brackets matched correctly
  return stack.length === 0;
}

// 🧪 Test Cases
console.log(isBalanced("()"));              // true
console.log(isBalanced("({[]})"));          // true
console.log(isBalanced("({[)]}"));          // false
console.log(isBalanced("[({})](]"));        // false
console.log(isBalanced("(((())))"));        // true
console.log(isBalanced(""));                // true
console.log(isBalanced("["));               // false
console.log(isBalanced("[(])"));            // false

/**
 * 🧠 Explanation:
 * - We use a stack to track opening brackets.
 * - Every time we see a closing bracket, we pop the last element from the stack and check if it matches.
 * - At the end, if the stack is empty, the brackets were balanced.
 *
 * ⚠️ Edge Cases:
 * - Empty string = true
 * - Extra opening or closing brackets = false
 * - Incorrect nesting = false (e.g. "[({)]}" fails)
 *
 * 💡 Tip:
 *   This is a classic **stack** problem. Understanding this helps you with expression evaluation, compiler design, and real-world parsing tasks.
 */
