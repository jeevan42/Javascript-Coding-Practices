const pyramidPattern = (n) => {
    for (let i = 1; i <= n; i++) {
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

pyramidPattern(5);
