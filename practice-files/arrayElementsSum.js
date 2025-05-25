// sum an array's elements nested elements too
// const array = [8,2,[4,16],15]
// output: 8+2+4+16+45 = 45;

const array = [8, 2, [4, 16], 15];

const sumOfArrayElements = (arr) => {
    const flattenArr = arr.flat();
    const totalSum = flattenArr.reduce((sum, acc) => {
        return sum + acc
    }, 0)
    return totalSum

}

console.log(`sumOfArrayElements :`, sumOfArrayElements(array))