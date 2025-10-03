/**
 * 503. Next Greater Element II
 * https://leetcode.com/problems/next-greater-element-ii/description/
 */

var nextGreaterElements = function(nums) {
    // Approach: by doubling the array and following the same approach for the next greater element-I
    let arr = [...nums,...nums];
    let N=arr.length;
    let stack=[];
    let res=Array(N).fill(0);
    for(let i=N-1;i>=0;i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i]<top){
                res[i] = top;
                break;
            } else {
                stack.pop()
            }
        }
        if(!stack.length){
            res[i] = -1;
        }
        stack.push(arr[i]);
    }
    return res.slice(0,N/2);
};

var nextGreaterElements = function(arr) {
    // Approachw: by hypothetically doubling the array & playing with the indexes
    let N=arr.length;
    let stack=[];
    let res=Array(N).fill(0);
    for(let i=(2*N)-1;i>=0;i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i%N]<top){
                res[i%N] = top;
                break;
            } else {
                stack.pop()
            }
        }
        if(!stack.length){
            res[i%N] = -1;
        }
        stack.push(arr[i%N]);
    }
    return res;
};

nums = [1,2,1]
console.log(nextGreaterElements(nums));