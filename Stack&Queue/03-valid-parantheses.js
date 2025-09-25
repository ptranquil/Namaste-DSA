/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/description/
 */
var isValid = function(s) {
    let stack = []
    for(let chr of s){
        if(chr == '(' || chr == '{' || chr == '['){
            stack.push(chr);
        } else {
            let curr = stack.pop();
            if((chr == ')' && curr != '(') || (chr == '}' && curr != '{') || (chr == ']' && curr != '[')){
                return false;
            }
        }
    }
    return stack.length == 0 ? true : false;
};

let s = "()[]{}"
console.log(isValid(s))


// Another approach same way just the cleaner code
var isValid = function (s) {
    let stack = [];
    let map = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    for (let chr of s) {
        if (map[chr]) {
            stack.push(chr);
        } else {
            let top = stack.pop();
            if (chr != map[top]) {
                return false;
            }
        }
    }
    return stack.length == 0 ? true : false;
};
