// Find Second Largest Element in an array of numbers.
/*
Example: arr = [8,0,15,21,59];
Output: 21
 */


let arr = [8, 0, 15, 21, 21, 59, 99];

// Solution 01
const findSecondLargest01 = (array) => array.sort((a, b) => b - a)[1];

// Solution 02
const findSecondLargest02 = (array) => { // Without using any inbuilt function.
    let firstLargest = array[0];
    let secondLargest = 0;
    for (let i = 1; i < array.length; i++) {
        const el = array[i];
        if (el > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = el;
        } else if (el > secondLargest && el < firstLargest) {
            secondLargest = el;
        }
    };
    return secondLargest;
}

console.log(`Second largest number in this array acc to findSecondLargest01 is : `, findSecondLargest01(arr));
console.log(`Second largest number in this array acc to findSecondLargest02 is : `, findSecondLargest02(arr));
