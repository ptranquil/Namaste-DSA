/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/description/
 */

var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;

    let temp=0;
    for(let i=0;i<t.length;i++){
        if(s[temp] == t[i]){
            temp++
        }
    }
    if(temp == s.length) return true;
    return false;
};

s = "abc";
t = "ahbgdc"
console.log(isSubsequence(s,t))