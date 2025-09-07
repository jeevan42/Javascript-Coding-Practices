// Concept: Convert Set to Map
// Problem: Need key-value structure from Set.
// Solution:
const setToMap = new Set(["a", "b"]);
const map = new Map([...setToMap].map(v => [v, v.toUpperCase()]));
console.log(map); // Map { 'a' => 'A', 'b' => 'B' }
// Conclusion: Transform Set elements into key-value pairs.


