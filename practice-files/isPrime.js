/**
 * Checks if `num` is a prime number.
 */
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example:
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
