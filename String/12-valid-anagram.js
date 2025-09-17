/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 */

// TC: O(n), SC: O(1) as in the map there can be max 26 keys (26 Alphabets)
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    let map = {}
    for(let ch of s){
        map[ch] = map[ch] ? map[ch]+1 : 1;
    }

    for(let ch of t){
        if(!map[ch] || map[ch]<=0){
            return false;
        }
        map[ch]--;
    }
    return true;
};


// Optimized Approach
// TC: O(s.length or t.length) + O(26) SC: O(1)
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    let count = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        count[s.charCodeAt(i) -97]++
        count[t.charCodeAt(i) -97]--
    }

    for(let i=0;i<26;i++){
        if(count[i] != 0){
            return false;
        }
    }
    return true;
};

s = "anagram"
t = "nagaram"
console.log(isAnagram(s,t))

// another approach with in-built function
// sorting and comparing
// TC: O(nlogn) SC: O(n) as in js strings are immutable
var isAnagram = function(s, t) {
    return s.split("").sort().join("") == t.split("").sort().join("")
}