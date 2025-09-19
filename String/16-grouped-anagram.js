/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/description/
 */

/**
TC: O(n * mlogm), n = length of arr, m -> max length for each key
SC: O(n*m)
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0;i<strs.length;i++){
        let sortedStr = strs[i].split("").sort().join("");
        if(map[sortedStr]){
            map[sortedStr].push(strs[i])
        } else {
            map[sortedStr] = [strs[i]]
        }
    }
    return [...Object.values(map)]
};

let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))
// output: [["bat"],["nat","tan"],["ate","eat","tea"]]


// Optimal Approach
/**
TC: O(n*m)
SC: O(n*m)
 */

var groupAnagrams = function(strs) {
    let map = {};

    for(let chr of strs){
        let freqArr = Array(26).fill(0);
        for(let s of chr){
            freqArr[s.charCodeAt()-97] = (freqArr[s.charCodeAt()-97] || 0) + 1;
        }
        let key=""
        for(let i=0;i<26;i++){
            // key+=String.fromCharCode(97-i)+freqArr[i] // both works
            key+='#'+freqArr[i]
        }

        if(!map[key]){
            map[key] = [chr]
        } else {
            map[key].push(chr)
        }
    }
    return Array.from(Object.values(map))
};

// Making key liek a0b1c0d.......z0