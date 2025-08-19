/**

LC: https://leetcode.com/problems/reverse-string/

 */

function reverseString(s) {
    let i=0;
    let j=s.length-1;
    while(i<j){
        [s[i], s[j]] = [s[j], s[i]]
        i++;
        j--
    }
    return s
};