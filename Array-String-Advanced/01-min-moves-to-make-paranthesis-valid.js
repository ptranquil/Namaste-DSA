/**
 * 921. Minimum Add to Make Parentheses Valid
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/8542160/921-minimum-add-to-make-parentheses-vali-r7bh/
 */


// using stack - O(n) , O(n)
var minAddToMakeValid = function(s) {
    let stack = [];
    for(let chr of s){
        if (chr === '('){
            stack.push(chr)
        } else {
            if(stack[stack.length-1] === '('){
                stack.pop();
            } else {
                stack.push(chr)
            }
        }
    }
    return stack.length;
};

// O(n), O(1)
var minAddToMakeValid = function(s) {
    let openBrackets = moves = 0;
    for(let chr of s){
        if(chr === '('){
            openBrackets++
        } else {
            if(openBrackets > 0){
                openBrackets--
            } else {
                moves++;
            }
        }
    }
    return openBrackets + moves;
};

