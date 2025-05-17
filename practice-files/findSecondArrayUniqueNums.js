
// You have given two array. and have to find the numbers which is in second array but not in first array.
// Condition => can't use inbuilt functions.


let arr1 = [9, 7, 3, 5, 4, 91];
let arr2 = [2, 9, 91, 6, 5, 1, 3, 0, 1, 0, 0];

// console.log(`original arr1 is: `, arr1);
// console.log(`original arr2 is: `, arr2);

const isIncludes = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target){
            return true;
        }
    }
    return false;
};

const checkExtraOddsNums = (array1, array2) => {
    let res_arr = [];

    for (let i = 0; i < array2.length; i++) {
        const el = array2[i];
        if (!isIncludes(array1, el) && !isIncludes(res_arr, el)) {
            res_arr.push(el);
        }
    }
    return res_arr;
}

console.log(`checkExtraOddsNums result is: `, checkExtraOddsNums(arr1, arr2));