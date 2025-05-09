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



const main = (array) => {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        let typeOfEl = typeof el;
        let filteredObj = res.filter((val) => val && val.hasOwnProperty(typeOfEl));
        if (!filteredObj.length) {
            let obj = { [typeOfEl]: [el] }
            res.push(obj);
        } else {
            res.map((val) => {
                if (val && val.hasOwnProperty(typeOfEl)) {
                    val?.[typeOfEl].push(el)
                }
            })
        }
    };
    return res;
};


console.log(`main fn output is : `, main(mixedArray))
