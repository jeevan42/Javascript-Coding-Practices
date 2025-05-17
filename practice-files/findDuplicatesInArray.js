// Find duplicates from and array of numbers.
// Example: arr = [8,8,5,2,4,9,4];
// Ouput = [8,4];


let array = [8, 8, 5, 2, 4, 9, 4];


const main = (array) => {
    let dup = array.filter((ele,idx,arr) => arr.indexOf(ele) !== idx)
    return dup;
};

console.log(`main Output is : `, main(array));
