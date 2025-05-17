function outer() {
    let count = 0; // <- This is a local variable of 'outer'

    function inner() {
        ++count;     // <- Accessing and modifying 'count' from outer's scope
        return count;
    }

    return inner;    // <- Returning 'inner', which "remembers" 'count'
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

const counter2 = outer();
console.log(counter2()); // 1 (fresh)

// 🧠 Where’s the Closure?
// When you call outer(), it returns the inner function. Now here’s the closure:

// The inner() function forms a closure over the variable count, which is declared in its outer function (outer).

// Even though outer() finishes execution, the count variable is not destroyed — it is "closed over" by inner() and remains accessible and alive through the returned function.
