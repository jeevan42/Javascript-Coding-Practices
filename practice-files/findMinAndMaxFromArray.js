// Find Min and Max element in an array.


let array = [8, 9, 51, 4, 15];


const getMin = (arr) => {
    return arr.reduce((pre, cur) => {
        // console.log(`pre & cur`, { pre, cur });
        return pre < cur ? pre : cur;
    })
}

// const getMax = (arr) => {
//     return arr.reduce((pre, cur) => {
//         return pre > cur ? pre : cur;
//     })
// }

const getMax = (arr) => arr.reduce((pre, cur) => pre > cur ? pre : cur)

console.log(`Min is :`, getMin(array));
console.log(`Max is :`, getMax(array));
