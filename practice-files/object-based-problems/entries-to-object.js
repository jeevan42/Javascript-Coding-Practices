/*
📘 Problem 15: Create Object from Array of Entries

Convert an array of key-value pair arrays into an object.

🔍 Example:
Input: [['name', 'Alice'], ['age', 25]]
Output: { name: 'Alice', age: 25 }

💡 Use Object.fromEntries()
*/

const entries = [['name', 'Alice'], ['age', 25]];

const fromEntries = (entriesArr) => {
  return entriesArr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
};

console.log('Object from Entries:', fromEntries(entries));

// Or using built-in:
console.log('Using Object.fromEntries:', Object.fromEntries(entries));
