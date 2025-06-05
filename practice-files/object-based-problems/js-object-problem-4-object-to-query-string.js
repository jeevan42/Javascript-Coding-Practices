/*
📘 Problem: Convert an object to a query string

const params = { search: "js", page: 2 };

✅ Solution:
const queryString = Object.entries(params)
  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  .join("&");

console.log(queryString); // "search=js&page=2"

📌 Useful in building URLs.
*/
