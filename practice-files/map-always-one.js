/**
 * Array.prototype.map() - Fixed Value Mapping
 *
 * The `map()` method returns a **new array** with the result of calling
 * the provided function on every element.
 *
 * In this example, we are returning `1` for **every element** of the array,
 * so the resulting array will contain only 1s — same length as the input.
 */

// Input array
const numbers = [1, 5, 8, 19, 14];

/**
 * Function: checkMapBehavior
 * Description: Maps every element in the array to the value 1.
 */
const checkMapBehavior = (arr) => {
    return arr.map((el) => {
        return 1;
    });
};

// Output
console.log("checkMapBehavior:", checkMapBehavior(numbers));

/**
 * Expected Output:
 * checkMapBehavior: [ 1, 1, 1, 1, 1 ]
 *
 * Reason:
 * For each element, we explicitly return 1. So, the resulting array is [1, 1, 1, 1, 1].
 */
