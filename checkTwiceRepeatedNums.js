// Write a program to find the elements from given array that are available twice (Not thrice) 

//     Var arr = [7,2,1,3,1,9,7,2,3,7,2,4,5,9] 

// Output will be [1,3,9]



var arr = [7, 2, 1, 3, 1, 9, 7, 2, 3, 7, 2, 4, 5, 9];

const isIncludesTwice = (array, target) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            count = count + 1;
        }
    }
    return count === 2;
};

const isIncludes = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }
    return false;
}


const CheckTwiceRepeatedNums = (array) => {
    let res_arr = [];
    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        if (isIncludesTwice(array, el) && !isIncludes(res_arr, el)) {
            res_arr.push(el);
        }
    }
    return res_arr;
}

console.log(`CheckTwiceRepeatedNums results are: `, CheckTwiceRepeatedNums(arr));
