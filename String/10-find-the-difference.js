/**
 * 389. Find the Difference
 * https://leetcode.com/problems/find-the-difference/description/
 */


// using hashing
var findTheDifference = function(s, t) {
    let obj = {};
    for(let chr of s){
        obj[chr] = obj[chr] ? obj[chr] + 1 : 1;
    }

    for(let ch of t){
        if(!obj[ch] || obj[ch] == 0){
            return ch;
        } else {
            obj[ch] = obj[ch]-1;
        }
    }
};


// using XOR - The most optimized one
var findTheDifference = function(s, t) {
    let res = 0;
    for(let chr of s){
        res = res^chr.charCodeAt(0);
    }
    for(let chr of t){
        res = res^chr.charCodeAt(0);
    }
    return String.fromCharCode(res);
};

// using sorting
var findTheDifference = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();

    for(let i=0;i<s.length;i++){
        if(s[i] != t[i]){
            return t[i]
        }
    }
    return t[t.length-1];
};

s = "abcd", t = "abcde"
console.log(findTheDifference(s,t))