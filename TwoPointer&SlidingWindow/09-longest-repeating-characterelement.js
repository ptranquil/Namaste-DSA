/**
 * 424. Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 */
var characterReplacement = function(s, k) {
    // slide the window
    let i=j=0;
    let maxWindow = 0;
    let map = {};
    map[s[0]] = 1;
    while(j<s.length){
        if(isWindowValid(map,k)){
            maxWindow = Math.max(maxWindow, j-i+1);
            j++;
            map[s[j]] = !map[s[j]] ? 1 : map[s[j]] + 1;
        } else {
            map[s[i]]--;
            i++;
        }
    }
    return maxWindow;
};
// check the validity
var isWindowValid = function(map, k){
    let totalCount = 0;
    let maxCount = 0;
    for(let i=0;i<26;i++){
        let chr = String.fromCharCode(i+65);
        if(map[chr]){
            totalCount+=map[chr];
            maxCount = Math.max(maxCount, map[chr])
        }
    }

    return (totalCount - maxCount <= k);
}

/// using array 
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // slide the window
    let i=j=0;
    let maxWindow = 0;
    let map = new Array(26).fill(0);
    map[s.charCodeAt(0) - 65] = 1;
    while(j<s.length){
        if(isWindowValid(map,k)){
            maxWindow = Math.max(maxWindow, j-i+1);
            j++;
            map[s.charCodeAt(j) - 65]++
        } else {
            map[s.charCodeAt(i) - 65]--;
            i++;
        }
    }
    return maxWindow;
};
// check the validity
var isWindowValid = function(map, k){
    let totalCount = 0;
    let maxCount = 0;
    for(let i=0;i<26;i++){
        totalCount+=map[i];
        maxCount = Math.max(maxCount, map[i])
    }

    return (totalCount - maxCount <= k);
}


/**
 * Same Logic but in a more optimize way
 * Instead of checking for the max freq and total count, keeping it updted on every iteration
 * TC: O(N), SC: O(1)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    const freq = new Array(26).fill(0);

    for(let right=0;right<s.length;right++){

        // add the element in the freq array
        let idx = s.charCodeAt(right) - 65;
        freq[idx]++;

        // calculate the max freq of any character in the current window
        maxFreq = Math.max(maxFreq, freq[idx]);

        // character that needs to be replaced
        const windowLength = right - left + 1;
        const replacement = windowLength - maxFreq;

        // shrinking window if its invalid
        if(replacement > k){
            freq[s.charCodeAt(left) - 65]--;
            left++;
        }
        // calculate the current valid lenght
        maxLength = Math.max(maxLength, right - left +1)
    }
    return maxLength;
};

s = "AABABBA", k = 1
console.log(characterReplacement(s,k))