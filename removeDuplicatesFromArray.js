// Remove duplicates from and array of numbers.
// Example: arr = [8,8,5,2,4,9,4];
// Ouput = [8,5,2,4,9];


let array = [8, 8, 5, 2, 4, 9, 4];

const main = (array) => {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === i) {
            res.push(array[i]);
        };
    };
    return res;
};

console.log(`main Output is : `, main(array));