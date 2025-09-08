/**
 * 58. Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/description/
 */

// SC: O(1), TC: O()
var lengthOfLastWord = function(s) {
    s = s.split(' ');
    let lC =0;
    for(let i=0;i<s.length;i++){
        if(s[i].length > 0){
            lC = s[i].length;
        }
    }
    return lC;
};

s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))

// another approach
var lengthOfLastWord = function(s) {
    let temp = s.trim().split(" ")
    return temp[temp.length-1].length
};
s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))


// Apprahc 3: Without using inbuilt trim or split
var lengthOfLastWord = function(s) {
    // without using inbuilt functions
    let count = 0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i] != ' '){
            count++
        } else {
            if(count > 0){
                break;
            }
        }
    }
    return count;
};
s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))