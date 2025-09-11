/**
 * 3541. Find Most Frequent Vowel and Consonant
 * https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/
 */

// TC: O(N) for map it wil be O(26) which is a constant time
// SC: O(26) as at max it can have 26 alphabet ~~ O(1)
var maxFreqSum = function(s) {
    let myMap = new Map();
    for(let chr of s){
        myMap.set(chr, (myMap.get(chr) || 0) + 1);
    }

    let vowelCount = 0;
    let consonantCount = 0;
    for(const [key, value] of myMap) {
        if(key == 'a' || key == 'e' || key == 'i' || key == 'o' || key == 'u'){
            vowelCount = Math.max(vowelCount, value)
        } else {
            consonantCount = Math.max(consonantCount, value)
        }
    }
    return vowelCount + consonantCount;
};

let s = "successes";
console.log(maxFreqSum(s));