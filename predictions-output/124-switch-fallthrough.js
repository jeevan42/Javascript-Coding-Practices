// 🧠 switch without break causes fallthrough

const val = 2;
switch (val) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}

// ✅ Output: Two, Three
// 🧠 Always use break unless intentional fallthrough