// Write a program to delete the repeated array elements. You have following array: 

//     var arr = [2,3,2,5,6,5,3,2,8,1,5] 

// Output of the array should be in following format: 

//     [2,3,5,6,8,1]


var arr = [2, 3, 2, 5, 6, 5, 3, 2, 8, 1, 5];


const isIncludes = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }
    return false;
}

const excludeReapNums = (array) => {
    let results_array = [];
    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        if(!isIncludes(results_array, el)){
            results_array.push(el);
        }
    }
    return results_array;
};


console.log(`Excluded repeated numbers results are: `, excludeReapNums(arr));