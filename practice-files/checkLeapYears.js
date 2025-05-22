const getLeapYears = ({ from, to }) => {
    let leapYears = [];
    for (let i = from; i <= to; i++) {
        if ((i % 4) === 0) {
            leapYears.push(i)
        }
    }
    console.log(leapYears)
};

getLeapYears({ from: 1991, to: 2016 })