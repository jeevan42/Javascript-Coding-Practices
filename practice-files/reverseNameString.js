/**
 * Problem: Reverse Each Word in a String
 *
 * Given a full name as a string input, your task is to:
 * 1. Reverse each word individually.
 * 2. Reverse the order of the words.
 *
 * Example:
 * Input:  "jeevan kumar verma"
 * Output: "amrev ramuk naveej"
 *
 * ---------------------------------------------------------------
 * ✅ Solution 01: Using JavaScript Inbuilt Functions
 */

function reverseEachWordOrder(input) {
  return input
    .split(' ')                            // Split into words
    .map(word => word.split('').reverse().join('')) // Reverse each word
    .reverse()                             // Reverse the order of words
    .join(' ');                            // Join back into a single string
}

// ✅ Test Solution 01
const input1 = "jeevan kumar verma";
const output1 = reverseEachWordOrder(input1);
console.log("Solution 01 Output >", output1); // Output > amrev ramuk naveej

/**
 * ---------------------------------------------------------------
 * ✅ Solution 02: Without Using Inbuilt Functions
 */

function splitWords(str) {
  let words = [];
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      word += str[i];
    } else {
      words.push(word);
      word = '';
    }
  }
  words.push(word); // Push last word
  return words;
}

function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function reverseEachWordOrderManual(input) {
  const words = splitWords(input); // Step 1: Manual split
  const reversedWords = [];

  // Step 2: Reverse each word manually
  for (let i = 0; i < words.length; i++) {
    reversedWords.push(reverseWord(words[i]));
  }

  // Step 3: Reverse word order manually
  const finalWords = reverseArray(reversedWords);

  // Step 4: Manually join with space
  let result = '';
  for (let i = 0; i < finalWords.length; i++) {
    result += finalWords[i];
    if (i !== finalWords.length - 1) {
      result += ' ';
    }
  }

  return result;
}

// ✅ Test Solution 02
const input2 = "jeevan kumar verma";
const output2 = reverseEachWordOrderManual(input2);
console.log("Solution 02 Output >", output2); // Output > amrev ramuk naveej
