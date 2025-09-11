/**
1221. Split a String in Balanced Strings
https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

TC: O(n)

 */

var balancedStringSplit = function (s) {
    let rCount = 0;
    let lCount = 0;
    let valid = 0;

    for (let chr of s) {
        if (chr == 'R') rCount++;
        else if (chr == 'L') lCount++;
        if (rCount == lCount) {
            valid++
            rCount = 0;
            lCount = 0;
        }
    }
    return valid;
};

let s = 'RLRRLLRLRL'
console.log(balancedStringSplit(s))