/*
📘 Problem 06: Convert Object to Query String

Convert an object to a URL query string.

🔍 Example:
Input: { name: 'Alice', age: 25 }
Output: 'name=Alice&age=25'

💡 Use Object.entries() and Array.join()
*/

const params = {
  name: 'Alice',
  age: 25,
  city: 'Delhi'
};

const toQueryString = (obj) => {
  return Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

console.log('Query String:', toQueryString(params));
