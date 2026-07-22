/**
 * 567. Permutation in String
 * https://leetcode.com/problems/permutation-in-string/description/
 */

/**
 * 
 * BRUTE FORCE
 * Sort the s1 first 
 * Slide over s2 and sort and compare each window with s1
 */
var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length) return false;

    let left  = 0;
    let right = s1.length-1;
    let val1 = s1.split('').sort().join('');

    while(right < s2.length){

        let portion = s2.slice(left, right + 1);
        let val2 = portion.split('').sort().join('');

        if(val1 === val2){
            return true
        }
        left++;
        right++;
    }
    return false;
};

/**
 * Optimal Approach: Using array hash of small character of both string
 * S1 hash will be constant
 * while moving S2 keep the S2 hash constant and while moving update the freq of left and right pointer
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length) return false;

    let s1Hash = new Array(26).fill(0);
    let s2Hash = new Array(26).fill(0);

    for(let i=0;i<s1.length;i++){
        s1Hash[s1.charCodeAt(i) - 97]++;
        s2Hash[s2.charCodeAt(i) - 97]++;
    }

    let left = 0;
    let right = s1.length-1;
    while(right < s2.length){
        let isHashSame = true;
        for(let k=0;k<26;k++){
            if(s1Hash[k] != s2Hash[k]){
                isHashSame = false;
            }
        }

        if(isHashSame){
            return true;
        } else {
            s2Hash[s2.charCodeAt(left) - 97]--;
            left++;
            right++;
            s2Hash[s2.charCodeAt(right) - 97]++;
        }
    }

    return false;
};