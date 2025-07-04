// 🧠 Switch compares using ===

const val = "5";
switch (val) {
  case 5:
    console.log("Number");
    break;
  case "5":
    console.log("String");
    break;
} // ✅ Output: String