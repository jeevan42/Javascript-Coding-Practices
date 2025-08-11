console.log(Number.isSafeInteger(42)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false

// Safe integer: An integer that can be exactly represented in the IEEE-754 double-precision floating-point format, without rounding errors.

// The safe range is:


//-(2^53 - 1) to (2^53 - 1)
//i.e. -9007199254740991 to 9007199254740991
