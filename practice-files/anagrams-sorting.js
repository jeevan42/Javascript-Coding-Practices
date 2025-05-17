// // Given an array of strings, group the anagrams together.
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output: [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

const array = ["eat", "tea", "tan", "ate", "nat", "bat"];

const getAnagramsArray = (arr) => {
    let res_arr = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        const sorted = (v) => v.split('').sort().join('');
        let added = false;
        for (let j = 0; j < res_arr.length; j++) {
            if (sorted(res_arr[j][0]) === sorted(el)) {
                res_arr[j].push(el);
                added = true;
                break;
            }
        }
        if (!added) {
            res_arr.push([el])
        }
    };
    return res_arr
}



console.log(`getAnagramsArray : `, getAnagramsArray(array))
