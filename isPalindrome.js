// check if a srtring is palindrome or not
// Example : pullup // Output true.

// Solution 01
let str = 'pullup';
let str01 = 'pullupq';
let str02 = 'pul wwlup';
let str03 = 'q pul wwlup';
let str04 = "A man, a plan, a canal, Panama";

const isPalindrome = (val) => {
    let reversedVal = val.split('').reverse().join('');
    if (val === reversedVal) return true;
    return false;
};

// console.log(`isPalindrome :`, isPalindrome(str));


console.log(`.............`);

// Solution 02

const isPalindrome02 = (val) => {
    let lenOfVal = val.split('').length;
    for (let i = 0; i < Math.floor(lenOfVal / 2); i++) {
        let a = val[i];
        let b = val[(lenOfVal - 1) - i];
        // if (!a === b) { // wrong
        if (!(a === b)) {
            return false
        }
    }
    return true;
};

// console.log(`isPalindrome02 :`, isPalindrome02(str));
// console.log(`isPalindrome02 :`, isPalindrome02(str01));
// console.log(`isPalindrome02 :`, isPalindrome02(str02));
// console.log(`isPalindrome02 :`, isPalindrome02(str03));
// console.log(`isPalindrome02 :`, isPalindrome02(str04)); // It returns false for str04 , but in actual it should return true. after removing spaces and them check. so we use below 3rd Solution.


console.log(`.............`);

// Solution 03 // check after removing spaces and return boolean;

const isPalindrome03 = (val) => {
    let cleaned = val.toLowerCase().replace(/[a-z-0-9]/g,'');
    let cleanedArr = cleaned.split('');
    for (let i = 0; i < Math.floor(cleanedArr.length / 2); i++) {
        if (cleanedArr[i] !== cleanedArr[(cleanedArr.length - 1) - i]) return false
    }
    return true;
};

console.log(`isPalindrome03 :`, isPalindrome03(str03));
