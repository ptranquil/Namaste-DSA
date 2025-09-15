/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/description/
 */

// TC: O(sum of length of all string), SC: O(1)
var longestCommonPrefix = function (strs) {
    let res = ""
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i<=strs[j].length && strs[0][i] != strs[j][i]){
                return res;
            }
        }
        res += strs[0][i]
    }
    return res;
};
strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))

// Corner Case
// Checking that i should not exceed the length of the current string