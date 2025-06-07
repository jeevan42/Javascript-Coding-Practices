/*
📘 Problem 07: Convert Query String to Object

Parse a URL query string into a JavaScript object.

🔍 Example:
Input: 'name=Alice&age=25'
Output: { name: 'Alice', age: '25' }

💡 Use String.split() and Array.reduce()
*/

const queryString = 'name=Alice&age=25&city=Delhi';

const parseQueryString = (str) => {
  return str.split('&').reduce((acc, pair) => {
    const [key, value] = pair.split('=');
    acc[decodeURIComponent(key)] = decodeURIComponent(value);
    return acc;
  }, {});
};

console.log('Parsed Object:', parseQueryString(queryString));
