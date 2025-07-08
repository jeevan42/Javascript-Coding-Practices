// 🧠 Infinite recursion = Maximum call stack error

function recurse() {
  return recurse();
}

// recurse(); // ❌ RangeError: Maximum call stack size exceeded