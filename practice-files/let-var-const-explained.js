// ======================================
//   JavaScript: var vs let vs const
// ======================================

// 1️⃣ var
// ✅ Function-scoped
// ✅ Can be re-declared and updated
// ✅ Hoisted (initialized as undefined)
function varExample() {
  console.log("var before declaration:", a); // undefined
  var a = 10;
  console.log("var after declaration:", a); // 10

  var a = 20; // Re-declaration allowed
  console.log("var after redeclaration:", a); // 20
}
varExample();

// --------------------------------------

// 2️⃣ let
// ✅ Block-scoped
// ❌ Cannot be re-declared in same scope
// ✅ Hoisted, but in TDZ (Temporal Dead Zone)

function letExample() {
  // console.log("let before declaration:", b); // ❌ ReferenceError: Cannot access 'b' before initialization
  let b = 30;
  console.log("let after declaration:", b); // 30

  // let b = 40; // ❌ Error: b has already been declared
}
letExample();

// --------------------------------------

// 3️⃣ const
// ✅ Block-scoped
// ❌ Cannot be re-declared or re-assigned
// ✅ Hoisted, but in TDZ
function constExample() {
  const c = 50;
  console.log("const value:", c); // 50

  // c = 60; // ❌ Error: Assignment to constant variable

  const obj = { name: "Jeevan" };
  obj.name = "Ron"; // ✅ Allowed: properties can be modified
  console.log("const object:", obj);

  // const obj = {}; // ❌ Error: re-declaration not allowed
}
constExample();

// --------------------------------------

// 4️⃣ Temporal Dead Zone (TDZ) Explanation
function TDZExample() {
  // console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
  let x = 100;
  console.log("x after declaration:", x);
}
TDZExample();

// ✅ Summary:

/*

var:
- Function scoped
- Can be re-declared and updated
- Hoisted and initialized as undefined
- Avoid using in modern code

let:
- Block scoped
- Cannot be re-declared in same scope
- Hoisted but in TDZ until initialized
- Best for variables that will change

const:
- Block scoped
- Cannot be re-declared or re-assigned
- Hoisted but in TDZ until initialized
- Best for constants and non-reassigned references

*/
