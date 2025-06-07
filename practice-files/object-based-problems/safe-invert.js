/*
📘 Problem 28: Swap Keys and Values Safely

✅ Description:
Invert key-value pairs and throw error if values are not unique.

📌 Concept:
Check for duplicate values before assigning.
*/

const safeInvert = (obj) => {
  const result = {};
  for (const key in obj) {
    if (result[obj[key]]) throw new Error("Duplicate value found: " + obj[key]);
    result[obj[key]] = key;
  }
  return result;
};

console.log(safeInvert({ a: 1, b: 2 }));
