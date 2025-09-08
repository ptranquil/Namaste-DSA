/**
 * 2942. Find Words Containing Character
 * https://leetcode.com/problems/find-words-containing-character/description/
 */

// using includes
var findWordsContaining = function(words, x) {
    let res = []
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            res.push(i)
        }
    }
    return res;
};

// without using includes
var findWordsContaining = function(words, x) {
    let res = []
    for(let i=0;i<words.length;i++){
        let curr = words[i];
        let left = 0;
        let right = curr.length-1;
        while(left<=right){
            if(curr[left] == x || curr[right] == x){
                res.push(i);
                break;
            }
            left++;
            right--;
        }
    }
    return res;
};

words = ["leet","code"], x = "e"
console.log(findWordsContaining(words, x))