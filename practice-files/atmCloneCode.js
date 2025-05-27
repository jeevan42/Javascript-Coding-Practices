let atmObj = {
  100: 10,
  50: 20,
  20: 30,
  10: 30,
  5: 20,
};

const withdrawCashfunc = ({ amount, atmObj }) => {
  var divisible = 5;
  if (amount % 5) {
    // First condition (Amount is not a multiple of $5)
    return {
      success: false,
      bills: {},
      error: `non-withdrawable amount, try amount which is divisble by ${divisible}`,
    };
  }
  var totalCashAvailable = 0; // Second condition (Amount available or not)
  Object.keys(atmObj).forEach((v) => {
    let totalAmount = parseInt(v) * atmObj[v];
    totalCashAvailable += totalAmount;
  });
  if (amount > totalCashAvailable) {
    return {
      success: false,
      bills: {},
      error: `non-withdrawable amount, insufficient amount`,
    };
  }

  let withdrawingAmount = amount;
  let billsObj = {};
  let totalCashWithdrawingOuter = 0;
  for (const v of Object.keys(atmObj).sort((a, b) => b - a)) {
    let totalCashWithdrawing = 0;
    Object.keys(billsObj).forEach((vl) => {
      let totalAmount = 0;
      if (billsObj[vl]) {
        totalAmount = parseInt(vl) * billsObj[vl];
      }
      totalCashWithdrawing += totalAmount;
      totalCashWithdrawingOuter += totalAmount;
    });
    if (
      totalCashWithdrawing === amount ||
      totalCashWithdrawingOuter === amount
    ) {
      return {
        success: true,
        bills: billsObj,
        error: ``,
      };
    }
    let bill = parseInt(v);
    let quo = withdrawingAmount / bill;
    let rem = withdrawingAmount % bill;
    if (rem === 0) {
      if (quo > atmObj[v]) {
        let greater = quo - atmObj[v];
        billsObj[v] = parseInt(atmObj[v]);
        withdrawingAmount = greater * bill + rem;
      } else {
        billsObj[v] = parseInt(quo);
        withdrawingAmount = rem;
      }
    } else {
      billsObj[v] = parseInt(quo);
      withdrawingAmount = rem;
    }
  }

  return {
    success: false,
    bills: {},
    error: `something went wrong!`,
  };
};

console.log(`withdrawCashfunc :`, withdrawCashfunc({ amount: 284, atmObj }));
console.log(`withdrawCashfunc :`, withdrawCashfunc({ amount: 3001, atmObj }));
console.log(`withdrawCashfunc :`, withdrawCashfunc({ amount: 3005, atmObj }));
console.log(`withdrawCashfunc :`, withdrawCashfunc({ amount: 1100, atmObj }));

const updateActualAtmObject = ({ withdrawObj, atmObj }) => {
  let paramBills = withdrawObj?.bills || {};
  console.log(`paramBills`, paramBills);
  console.log(`atmObj`, atmObj);

  Object.keys(paramBills).forEach((val) => {
    atmObj[val] = atmObj[val] - paramBills[val];
  });
  return { atmObj };
};

const withdrawObj = withdrawCashfunc({ amount: 1010, atmObj });
console.log(`new atmObj`, updateActualAtmObject({ withdrawObj, atmObj }));
