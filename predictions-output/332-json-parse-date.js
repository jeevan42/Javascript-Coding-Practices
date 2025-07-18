332-json-parse-date.js 

const json = '{ "date": "2025-07-17T12:00:00Z" }'; 
const obj = JSON.parse(json); console.log(obj.date instanceof Date); // false 
console.log(typeof obj.date); // string
