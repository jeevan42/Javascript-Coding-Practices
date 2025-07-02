// 🧠 switch compares with `===`

const val = "5";
switch (val) {
  case 5:
    console.log("Number"); // ❌ won't run
    break;
  case "5":
    console.log("String"); // ✅ will run
    break;
}