// An array is given to you, have numbers elements + and -. have to find out that 'x' comes with which numbers additions from array
// E.g: let arr = [-9,-8,0,5,-5,8];
// result => [[-8,8],[5,-5]];
// Conditions => * Use no inbuilt functions (array.push allowed) | * Use max 2 for loops only.

let array = [-9, -8, 0, 5, -5, 8];

const checkSumHunt = () => {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let elj = array[j];
            if (el + elj === 0) {
                res.push([el, elj])
            }
        }
    };
    return res;
};

console.log(`checkSumHunt is : `, checkSumHunt());


