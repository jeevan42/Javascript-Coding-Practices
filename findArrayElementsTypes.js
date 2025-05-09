// Given an array containing elements of various data types, 
// write a function that identifies how many distinct data types are present 
// and groups the elements based on their type.
// 
// Example:
// Input: [5, '8', 'jeevan']
// Output: [{ number: [5] }, { string: ['8', 'jeevan'] }]


const mixedArray = [
    42,                       // number
    24,                       // number
    'hello',                  // string
    true,                     // boolean
    null,                     // null --> also object
    undefined,                // undefined
    Symbol('sym'),            // symbol
    BigInt(9007199254740991), // bigint
    { a: 1 },                 // object
    [1, 2, 3],                // array (also typeof 'object')
    function () { },          // function
    new Date(),               // object (date)
    /regex/,                  // object (RegExp)
    NaN                       // number (special case)
];

// Solution No. 01

const main = (array) => {
    return array.reduce((acc, el) => {
        const type = typeof el; // Get the data type of the current element

        // Initialize the array for this type if it doesn't exist, then push the element
        // (acc[type] = acc[type] || []) does:
        // 1. If acc[type] already exists, use it.
        // 2. If not, initialize it as an empty array [] and assign it to acc[type].
        // Then .push(el) adds the current element to that array.
        (acc[type] = acc[type] || []).push(el);

        return acc; // Return the updated accumulator for the next iteration
    }, {}); // Initial value of accumulator is an empty object
};

// Solution No. 02

// const main = (array) => {
//     return array.reduce((acc, curr) => {
//         const type = typeof curr;
//         const found = acc.find(obj => obj.hasOwnProperty(type));
//         if (found) {
//             found[type].push(curr);
//         } else {
//             acc.push({ [type]: [curr] });
//         }
//         return acc;
//     }, []);
// };

// Solution No. 03

// const main = (array) => {
//     const result = array.reduce((acc, curr) => {
//         const type = typeof curr;
//         acc[type] = acc[type] || [];
//         acc[type].push(curr);
//         return acc;
//     }, {});

//     return Object.entries(result).map(([key, value]) => ({ [key]: value })); // converts that plain object into your desired array of objects format:
// };


// Solution No. 04

// const main = (array) => {
//     let res = [];
//     for (let i = 0; i < array.length; i++) {
//         const el = array[i];
//         let typeOfEl = typeof el;
//         let filteredObj = res.filter((val) => val && val.hasOwnProperty(typeOfEl));
//         if (!filteredObj.length) {
//             let obj = { [typeOfEl]: [el] }
//             res.push(obj);
//         } else {
//             res.map((val) => {
//                 if (val && val.hasOwnProperty(typeOfEl)) {
//                     val?.[typeOfEl].push(el)
//                 }
//             })
//         }
//     };
//     return res;
// };


console.log(`main fn output is : `, main(mixedArray))
