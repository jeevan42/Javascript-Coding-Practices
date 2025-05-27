/**
 * PROBLEM STATEMENT:
 * -------------------
 * You are simulating an ATM that holds different denominations of bills.
 * 
 * Given an object `atmObj` with the number of bills available in denominations:
 * Example:
 * let atmObj = {
 *   100: 10,
 *   50: 20,
 *   20: 30,
 *   10: 30,
 *   5: 20,
 * };
 * 
 * Write a function `withdrawCashfunc` that accepts:
 *    { amount: Number, atmObj: Object }
 * and returns:
 *    - success: true/false
 *    - bills: {denomination: count}
 *    - error: message if any
 * 
 * CONDITIONS:
 * 1. Amount must be divisible by 5
 * 2. ATM must have enough total cash
 * 3. Use the highest denominations possible first
 * 4. Return exactly the requested amount
 * 
 * Also implement `updateActualAtmObject` which deducts withdrawn bills from atmObj
 */


// ------------------------------------------------------------------------------------------ //

//            MOSTLY CORRECT BUT HAVE SOME ISSUES, LIKE IF WITHDRAW ALL 3000 THEN GET DEMO OF 2000 CASH, THATS WRONG       //


// let atmObj = {
//   100: 10,
//   50: 20,
//   20: 30,
//   10: 30,
//   5: 20,
// };

// const withdrawCashfunc = ({ amount, atmObj }) => {
//   var divisible = 5;
//   if (amount % 5) {
//     // First condition (Amount is not a multiple of $5)
//     return {
//       success: false,
//       bills: {},
//       error: `non-withdrawable amount, try amount which is divisble by ${divisible}`,
//     };
//   }
//   var totalCashAvailable = 0; // Second condition (Amount available or not)
//   Object.keys(atmObj).forEach((v) => {
//     let totalAmount = parseInt(v) * atmObj[v];
//     totalCashAvailable += totalAmount;
//   });
//   if (amount > totalCashAvailable) {
//     return {
//       success: false,
//       bills: {},
//       error: `non-withdrawable amount, insufficient amount`,
//     };
//   }

//   let withdrawingAmount = amount;
//   let billsObj = {};
//   let totalCashWithdrawingOuter = 0;
//   for (const v of Object.keys(atmObj).sort((a, b) => b - a)) {
//     let totalCashWithdrawing = 0;
//     Object.keys(billsObj).forEach((vl) => {
//       let totalAmount = 0;
//       if (billsObj[vl]) {
//         totalAmount = parseInt(vl) * billsObj[vl];
//       }
//       totalCashWithdrawing += totalAmount;
//       totalCashWithdrawingOuter += totalAmount;
//     });
//     if (
//       totalCashWithdrawing === amount ||
//       totalCashWithdrawingOuter === amount
//     ) {
//       return {
//         success: true,
//         bills: billsObj,
//         error: ``,
//       };
//     }
//     let bill = parseInt(v);
//     let quo = withdrawingAmount / bill;
//     let rem = withdrawingAmount % bill;
//     if (rem === 0) {
//       if (quo > atmObj[v]) {
//         let greater = quo - atmObj[v];
//         billsObj[v] = parseInt(atmObj[v]);
//         withdrawingAmount = greater * bill + rem;
//       } else {
//         billsObj[v] = parseInt(quo);
//         withdrawingAmount = rem;
//       }
//     } else {
//       billsObj[v] = parseInt(quo);
//       withdrawingAmount = rem;
//     }
//   }

//   return {
//     success: false,
//     bills: {},
//     error: `something went wrong!`,
//   };
// };

// console.log(`withdrawCashfunc :`, withdrawCashfunc({ amount: 284, atmObj }));
// console.log(`withdrawCashfunc :`, withdrawCashfunc({ amount: 3001, atmObj }));
// console.log(`withdrawCashfunc :`, withdrawCashfunc({ amount: 3005, atmObj }));
// console.log(`withdrawCashfunc :`, withdrawCashfunc({ amount: 1100, atmObj }));

// const updateActualAtmObject = ({ withdrawObj, atmObj }) => {
//   let paramBills = withdrawObj?.bills || {};
//   console.log(`paramBills`, paramBills);
//   console.log(`atmObj`, atmObj);

//   Object.keys(paramBills).forEach((val) => {
//     atmObj[val] = atmObj[val] - paramBills[val];
//   });
//   return { atmObj };
// };

// const withdrawObj = withdrawCashfunc({ amount: 1010, atmObj });
// console.log(`new atmObj`, updateActualAtmObject({ withdrawObj, atmObj }));


// ------------------------------------------------------------------------------------------ //




// CORRECT CODE BELOW


let atmObj1 = {
    100: 10,
    50: 20,
    20: 30,
    10: 30,
    5: 20,
};

let atmObj2 = {
    100: 2,
    50: 1,
    20: 0,
    10: 1,
    5: 1,
};


// ✅✅✅ NEW FIXED FUNCTION BELOW
const withdrawCash = ({ amount, atmObj }) => {
    const divisible = 5;
    if (amount % divisible !== 0) {
        return {
            success: false,
            bills: {},
            error: `non-withdrawable amount, try amount which is divisible by ${divisible}`,
        };
    }

    const totalCashAvailable = Object.entries(atmObj).reduce(
        (sum, [denom, count]) => sum + denom * count,
        0
    );
    if (amount > totalCashAvailable) {
        return {
            success: false,
            bills: {},
            error: `non-withdrawable amount, insufficient amount`,
        };
    }

    const sortedDenoms = Object.keys(atmObj)
        .map(Number)
        .sort((a, b) => b - a);

    let remaining = amount; // e.g 3000
    const bills = {};

    for (const denom of sortedDenoms) { // sortedDenoms => [100,50,20,10,5], and denom first is 100
        const available = atmObj[denom]; // denom -> 100, atmObj[denom] -> 10
        const needed = Math.floor(remaining / denom); // remaining -> 3000 , denom -> 100 = Math.floor(3000 / 100) => 30
        const used = Math.min(available, needed); // Math.min(10, 30) => 10
        if (used > 0) {
            bills[denom] = used; // {100:10}
            remaining -= used * denom; // 10 * 100 => 1000 ( remaining => 3000 -= 1000 => 2000)
        }
    }

    if (remaining === 0) {
        return { success: true, bills, error: "" };
    }

    return {
        success: false,
        bills: {},
        error: `non-withdrawable amount, cannot match exact amount with available denominations`,
    };
};


// ✅ Update ATM after withdrawal
const updateActualAtmObject = ({ withdrawObj, atmObj }) => {
    let paramBills = withdrawObj?.bills || {};
    Object.keys(paramBills).forEach((val) => {
        atmObj[val] = atmObj[val] - paramBills[val];
    });
    return { atmObj };
};


// ✅ TEST CASES FOR OLD FUNCTION
console.log(`withdrawCashfunc 284:`, withdrawCash({ amount: 284, atmObj: atmObj1 }));
console.log(`withdrawCashfunc 3001:`, withdrawCash({ amount: 3001, atmObj: atmObj1 }));
console.log(`withdrawCashfunc 3005:`, withdrawCash({ amount: 3005, atmObj: atmObj1 }));
console.log(`withdrawCashfunc 1100:`, withdrawCash({ amount: 1100, atmObj: atmObj1 }));
console.log(`withdrawCashfunc 3000:`, withdrawCash({ amount: 3000, atmObj: atmObj1 }));



// ✅ New Function Test
console.log("withdrawCash (Fixed):", withdrawCash({ amount: 115, atmObj: atmObj1 }));



// ✅ Applying update
const withdrawObj = withdrawCash({ amount: 1010, atmObj: atmObj1 });
console.log(`new atmObj`, updateActualAtmObject({ withdrawObj, atmObj: atmObj1 }));



console.log(`withdrawCashfunc 180:`, withdrawCash({ amount: 180, atmObj: atmObj2 })); // check case where no demo found
