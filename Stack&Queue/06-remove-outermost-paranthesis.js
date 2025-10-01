/**
 * 1021. Remove Outermost Parentheses
 * https://leetcode.com/problems/remove-outermost-parentheses/description/
 */

/** using stack & making levels inside stack */
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
            if (stack.length > 1) {
                ans += s[i];
            }
        } else {
            if (stack.length > 1) {
                ans += s[i];
            }
            stack.pop();
        }
    }
    return ans;
};

let s = "(()())(())";
console.log(removeOuterParentheses(s));


// without using stack
var removeOuterParentheses = function(s) {
    let level = 0;
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            level++;
            if (level > 1) {
                ans += s[i];
            }
        } else {
            if (level > 1) {
                ans += s[i];
            }
            level--;
        }
    }
    return ans;
};