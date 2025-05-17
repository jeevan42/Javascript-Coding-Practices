// generateRandom.js

/**
 * ===========================================
 * 📌 Random Number Generation Utility
 * Author: Jeevan
 * Description: Collection of methods to generate random numbers
 * in different formats and ranges (int, float, step, secure, etc.)
 * ===========================================
 */

/**
 * 🔹 1. Generate a random integer between min and max (inclusive)
 * Formula: Math.floor(Math.random() * (max - min + 1)) + min
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Example: getRandomInt(5, 9) ➝ 5, 6, 7, 8, or 9


/**
 * 🔹 2. Generate a random float between min (inclusive) and max (exclusive)
 * Formula: Math.random() * (max - min) + min
 */
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
// Example: getRandomFloat(5, 9) ➝ 5.12345 to less than 9


/**
 * 🔹 3. Generate a random number with a step (e.g., 10, 15, 20,...)
 * Useful when you want a number that's a multiple of some step.
 */
function getRandomWithStep(min, max, step) {
  const range = Math.floor((max - min) / step) + 1;
  const randStep = Math.floor(Math.random() * range);
  return min + randStep * step;
}
// Example: getRandomWithStep(10, 30, 5) ➝ 10, 15, 20, 25, 30


/**
 * 🔹 4. Pick a random element from an array
 */
function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Example: getRandomFromArray([10, 20, 30]) ➝ 10 or 20 or 30


/**
 * 🔹 5. Generate a cryptographically secure random integer
 * Uses window.crypto for better randomness (browser only)
 */
function getSecureRandomInt(min, max) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % (max - min + 1) + min;
}
// Example: getSecureRandomInt(1, 100) ➝ Cryptographically strong integer


/**
 * 🔹 6. Generate a random boolean (true/false)
 */
function getRandomBoolean() {
  return Math.random() < 0.5;
}
// Example: getRandomBoolean() ➝ true or false


/**
 * 🔹 7. Generate a random sign (-1 or +1)
 */
function getRandomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}
// Example: getRandomSign() ➝ -1 or 1


/**
 * 🔹 8. Generate a random character (A-Z, a-z, 0-9)
 */
function getRandomChar() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return chars.charAt(Math.floor(Math.random() * chars.length));
}
// Example: getRandomChar() ➝ 'A', 'z', '4', etc.


/**
 * 🔹 9. Generate a random string of given length
 */
function getRandomString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += getRandomChar();
  }
  return result;
}
// Example: getRandomString(6) ➝ 'aB1cD9'


// Export all functions (Optional - for Node.js or bundlers)
module.exports = {
  getRandomInt,
  getRandomFloat,
  getRandomWithStep,
  getRandomFromArray,
  getSecureRandomInt,
  getRandomBoolean,
  getRandomSign,
  getRandomChar,
  getRandomString
};
