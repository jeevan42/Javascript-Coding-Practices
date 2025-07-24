async function f() {
  throw new Error("Oops");
}
f().catch(err => console.log(err.message)); // Oops
