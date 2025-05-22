const printPrevTwoNumsSum = (n) => {
    let prev = 0;
    let farPrev = 0;
    for (let i = 0; i < n; i++) {
        let nums = ""
        for (let j = 1; j <= i + 1; j++) {
            if ((prev + farPrev) === 0) {
                nums += `${i} `
                prev = i;
            } else {
                let sum = prev + farPrev;
                nums += `${sum} `
                farPrev = prev;
                prev = sum;
            }
        }
        console.log(nums)
    }
}
printPrevTwoNumsSum(4)