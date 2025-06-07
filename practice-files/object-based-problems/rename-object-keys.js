/*
📘 Problem 22: Rename Object Keys

✅ Description:
Rename keys of an object based on a mapping object.

🔍 Example:
Input: { fname: 'John', lname: 'Doe' }, map: { fname: 'firstName', lname: 'lastName' }
Output: { firstName: 'John', lastName: 'Doe' }

📌 Concept:
Loop through keys and remap if exists.
*/

const renameKeys = (obj, keyMap) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[keyMap[key] || key] = obj[key];
    return acc;
  }, {});
};

console.log(renameKeys({ fname: 'John', lname: 'Doe' }, { fname: 'firstName', lname: 'lastName' }));
