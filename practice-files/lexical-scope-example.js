// =====================
// 🔴 Example 1: Doesn't work
// =====================
function test() {
    // test() is defined in global scope
    // It cannot access 'a' defined inside main()
    console.log("Example 1:", a); // ❌ ReferenceError
}

function main() {
    var a = 15;
    test(); // test() doesn't see 'a'
}

// Uncomment this to see error
// main();



// =====================
// ✅ Example 2: Works (Closure)
// =====================
function main2() {
    var a = 15;
    
    function test() {
        // test() is defined inside main2()
        // So it has access to 'a' due to lexical scope
        console.log("Example 2:", a); // ✅ 15
    }

    test(); // test() can see 'a' from parent scope
}

main2();



// =====================
// ✅ Example 3: Global access
// =====================
var a = 100;

function test3() {
    // test3() is global, 'a' is also global
    console.log("Example 3:", a); // ✅ 100
}

function main3() {
    test3(); // Works fine, global function accessing global variable
}

main3();



// =====================
// 📘 Concepts Recap
// =====================

// 1. Lexical Scope:
//    - Function can access variables from its parent scope where it's defined.

// 2. Closure:
//    - A function remembers variables from its outer scope even after that scope is done executing.

// 3. Global vs Local:
//    - Global function can't access local variables of another function unless passed explicitly.

