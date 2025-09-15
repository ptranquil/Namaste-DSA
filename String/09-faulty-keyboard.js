/**
 * 2810. Faulty Keyboard
 * https://leetcode.com/problems/faulty-keyboard/description/
 */

var finalString = function(s) {
    let res = '';
    for(let chr of s){
        if(chr == 'i'){
            res = res.split('').reverse().join('');
        } else {
            res+=chr;
        }
    }
    return res;
};

s = "string"
console.log(finalString(s))