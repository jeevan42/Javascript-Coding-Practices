const downRightAngledTriangle = (n) => {
    for (let i = n; i > 0; i--) {
        let stars = "";
        for (let j = n; j > n - i ; j--) {
            stars += "* ";            
        } 
        console.log(stars)     
    }
};

downRightAngledTriangle(4)