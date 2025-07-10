// 🧠 Switch uses strict comparison (`===`), not loose

const x = "5";
switch (x) {
  case 5:
    console.log("number");
    break;
  case "5":
    console.log("string"); // ✅ This runs
    break;
}