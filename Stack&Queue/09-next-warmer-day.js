/**
 * 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/description/
 */

var dailyTemperatures = function(t) {
    let map = {};
    let N = t.length;
    let res = new Array(N).fill(0);
    let stack = [];
    for(let i=N-1;i>=0;i--){
        while(stack.length){
            let top = stack[stack.length-1]
            if(t[top] > t[i]){
                res[i] = top-i;
                break;
            } else {
                stack.pop();
            }
        }
        if(!stack.length){
            res[i] = 0;
        }
        stack.push(i);
    }
    return res;
};
// Similar to next greater element
