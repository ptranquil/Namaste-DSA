/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

var lengthOfLongestSubstring = function(s) {
    let map = new Map();

    let i=0;
    let j=0;
    let longest = 0;
    while(j<s.length){
        if(
            map.has(s[j]) && 
            (map.get(s[j]) >= i)
        ){
            i = map.get(s[j]) + 1;
            map.set(s[j], j)
        }
        map.set(s[j], j);
        longest = Math.max(longest, j-i+1);
        j++;
    }
    return longest;
};

s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))