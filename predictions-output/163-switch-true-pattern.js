// 🧠 switch(true) for condition-based branching

const value = 15;

switch (true) {
  case value < 10:
    console.log("Small");
    break;
  case value < 20:
    console.log("Medium"); // ✅
    break;
  default:
    console.log("Large");
}