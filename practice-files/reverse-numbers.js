const reverseNumbers = (str) => {
    const outputArr = str.toString().split('');

    for (let i = 0; i < Math.floor(outputArr.length / 2); i++) {
        let temp = outputArr[i];
        outputArr[i] = outputArr[(outputArr.length - 1) - i];
        outputArr[(outputArr.length - 1) - i] = temp;
    }
    console.log(outputArr.join(''));
};

reverseNumbers(12345)