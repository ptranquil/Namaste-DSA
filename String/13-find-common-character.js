/**
 * 1002. Find Common Characters
 * https://leetcode.com/problems/find-common-characters/description/
 * 
 * Time Complexity: O(n · k) (n = number of words, k = avg word length)
 * Space Complexity: O(1) (since only 26 letters)
 */

var commonChars = function(words) {
    let globalFreq = new Array(26).fill(Infinity);
    for(let word of words){
        let count = new Array(26).fill(0);
        for(let ch of word){
            count[ch.charCodeAt()-97]++;
        }

        // update global frequency
        for (let i = 0; i < 26; i++) {
            globalFreq[i] = Math.min(globalFreq[i], count[i]);
        }
    }

    let res = []
    for(let i=0;i<26;i++){
        while(globalFreq[i]>0){
            res.push(String.fromCharCode(i + 97));
            globalFreq[i]--;
        }
    }
    return res;
};

let words = ["bella","label","roller"]
console.log(commonChars(words))