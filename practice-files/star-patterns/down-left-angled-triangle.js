const downLeftAngledTriangle = (n) => {
    for (let i = n; i >= 1; i--) {
        let stars = "";
        for (let j = 1; j <= n - i; j++) {
            stars += "  ";
        }
        for (let k = 1; k <= i; k++) {
            stars += "* ";
        }

        console.log(stars);
    }
}
downLeftAngledTriangle(4)