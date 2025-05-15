/**
 * Array.prototype.map() Explanation
 *
 * The `map()` method creates a **new array** populated with the results of calling
 * a provided function on every element in the calling array.
 *
 * Syntax:
 *   arr.map(callback(currentValue, index, array), thisArg)
 *
 * Key Points:
 * - It does **not mutate** the original array.
 * - It always returns a new array of the **same length**.
 * - If you don't explicitly return anything from the callback, `undefined` will be stored.
 */

// Original array
const numbers = [1, 5, 8, 19, 14];

/**
 * Function: checkMapBehavior
 * Description: Checks the effect of `map()` when the return value is conditionally provided.
 * In this case, nothing is returned unless the element is 0 (which never happens here).
 */
const checkMapBehavior = (arr) => {
    return arr.map((el) => {
        if (el === 0) {
            return 1;
        }
        // Since no return here, it implicitly returns undefined
    });
};

// Result
console.log("checkMapBehavior:", checkMapBehavior(numbers));

/**
 * Expected Output:
 * checkMapBehavior: [ undefined, undefined, undefined, undefined, undefined ]
 *
 * Reason:
 * The condition `el === 0` is false for all elements.
 * Since there's no else/return, `undefined` is returned for each item in the map.
 */
