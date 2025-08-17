// Question: What will be logged?
const obj = {
  name: "JS",
  log: function() {
    console.log(this.name);
  }
};
const fn = obj.log;
fn();

// Answer: undefined
// Explanation: Detached function call loses the object binding, 
// so 'this' becomes undefined in strict mode (or window in non-strict).