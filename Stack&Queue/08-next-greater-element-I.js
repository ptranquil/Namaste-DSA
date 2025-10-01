/**
 * 496. Next Greater Element I
 * https://leetcode.com/problems/next-greater-element-i/description/
 */

/**
 * @param {number[]} a
 * @param {number[]} arr
 * @return {number[]}
 */
var nextGreaterElement = function (a, arr) {
    let map = {};
    let stack = []
    let N = arr.length;
    stack.push(arr[N - 1]);
    map[arr[N - 1]] = -1;

    for (let i = N - 2; i >= 0; i--) {
        let top = stack[stack.length - 1];
        if (arr[i] < top) {
            map[arr[i]] = top;
        } else {
            while (stack.length) {
                if (stack[stack.length - 1] < arr[i]) {
                    stack.pop();
                } else {
                    map[arr[i]] = stack[stack.length - 1];
                    break;
                }
            }
            if (stack.length === 0) {
                map[arr[i]] = -1;
            }
        }
        stack.push(arr[i])
    }

    let res = []
    for (let val of a) {
        res.push(map[val])
    }
    return res;
};

nums1 = [4,1,2]
nums2 = [1,3,4,2]
console.log(nextGreaterElement(nums1,nums2));

// same code with little optimization
var nextGreaterElement = function(a, arr) {
    let map = {};
    let stack=[]
    let N = arr.length;
    stack.push(arr[N-1]);
    map[arr[N-1]] = -1;

    for(let i=N-2;i>=0;i--){
        while(stack.length){
            if(stack[stack.length-1] < arr[i]){
                stack.pop();
            } else {
                map[arr[i]] = stack[stack.length-1];
                break;
            }
        }
        if(stack.length === 0){
            map[arr[i]] = -1;
        }
        stack.push(arr[i])
    }

    let res = []
    for(let val of a){
        res.push(map[val])
    }
    return res;
};