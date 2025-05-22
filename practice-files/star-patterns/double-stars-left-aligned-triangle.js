const printDoubleStarsLeftAligned = (n) => {
    for (let i = 1; i <= n; i++) {
        let stars = "";
        for (let j = 1; j <= n * 2 - i * 2; j++) {
            stars += "  ";
        }
        for (let k = 1; k <= i * 2; k++) {
            stars += "* ";
        }
        console.log(stars);
    }
}

printDoubleStarsLeftAligned(5);