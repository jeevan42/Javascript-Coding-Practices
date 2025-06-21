// 🧠 Using labels with break

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j > 3) break outer;
    console.log(i, j);
  }
}

// 🧠 `break label` jumps out of labeled loop block
