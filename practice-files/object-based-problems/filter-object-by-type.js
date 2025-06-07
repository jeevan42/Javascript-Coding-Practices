/*
📘 Problem 11: Filter Object by Value Type

Return a new object that contains only the keys whose values are of a specific type.

🔍 Example:
Input:
{
  name: 'Alice',
  age: 30,
  active: true,
  greet: () => {},
  address: { city: 'Delhi' }
}
Filter by 'string'

Output:
{ name: 'Alice' }
*/

const filterByType = (obj, type) => {
  const result = {};
  for (let key in obj) {
    if (typeof obj[key] === type) {
      result[key] = obj[key];
    }
  }
  return result;
};

const data = {
  name: 'Alice',
  age: 30,
  active: true,
  greet: () => {},
  address: { city: 'Delhi' }
};

console.log('Filtered Strings:', filterByType(data, 'string'));
console.log('Filtered Functions:', filterByType(data, 'function'));
