/*
📘 Problem 20: Create Object from Two Arrays (keys & values)

✅ Description:
Zip two arrays into one object.

🔍 Example:
Input: ['a', 'b'], [1, 2]
Output: { a: 1, b: 2 }

📌 Concept:
Use reduce and indexes to combine.
*/

const zipToObject = (keys, values) => {
  return keys.reduce((acc, key, i) => {
    acc[key] = values[i];
    return acc;
  }, {});
};

console.log(zipToObject(['a', 'b'], [1, 2]));
