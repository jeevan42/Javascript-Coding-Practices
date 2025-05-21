const downPyramidPattern = (n) => {
    for (let i = n; i >= 1; i--) {
       let stars = "";
       for (let j = 1; j <= n - i; j++) {
        stars += "  ";
       }
       for (let k = 1; k <= 2 * i - 1; k++) {
        stars += "* ";
       }
       console.log(stars)
    }
}

downPyramidPattern(5);
