// Difference between foreach and map

let arr = [4,5,6,2];

//  EXAMPLE NO: 1

// arr.forEach((i) => {
//     console.log(i);
// });

// console.log(`.............`)
// arr.map((i) => {
//     console.log(i);
// });


// //  EXAMPLE NO: 2

// const data = arr.forEach((i) => {
//     console.log(i);
//     return i
// });

// console.log(`data is : `, data)

// console.log(`.............`)


// const data1 = arr.map((i) => {
//     console.log(i);
//     return i
// });

// console.log(`data1 is : `, data1)

// //  EXAMPLE NO: 3

// const dataArr = [];
// arr.forEach((i) => {
//     dataArr.push(i)
// });

// console.log(`dataArr is : `, dataArr)

// console.log(`.............`)

// const dataArr1 = [];

// arr.map((i) => {
//     dataArr1.push(i)   
// });

// console.log(`dataArr1 is : `, dataArr1)



//  EXAMPLE NO: 4

const filteredArr = arr.forEach((i) => {
    return i
// }).filter((i) => i == 2); // This returns undefined and Error throwing , because we used filter on undefined.
}); // This returns undefined.

console.log(`filteredArr is : `, filteredArr)

console.log(`.............`)


const filteredArr1 = arr.map((i) => {
    return i
}).filter((i) => i == 2);

console.log(`filteredArr1 is : `, filteredArr1)

// So key difference is foreach does not return a new array after iteration done on every element of original array. it just used to check or update elements or something like that on main origianl array.  On the other hand, map returns a new array after iteration done on every elements of that original array. 
// Foreach does not give a new array in return. Map gives us a new array in return which further can be use with (filter, push) likely methods.