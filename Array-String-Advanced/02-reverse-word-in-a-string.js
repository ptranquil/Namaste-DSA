/**
 * 151. Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string/description/
 */

var reverseWords = function(s) {
    s = s.trim() + " ";
    let res = "";
    let words = []
    let word = "";
    for(let chr of s){
        if(chr != " "){
            word += chr;
        } else if(word.length){
            words.unshift(word);
            word = "";
        }
    }
    return words.join(" ");
};