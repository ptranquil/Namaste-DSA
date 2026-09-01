/**
 * 78. Subsets
 * https://leetcode.com/problems/subsets/
 */
var subsets = function(nums) {
    let result = [];
    function backtrack(path, startIdx){
        result.push([...path]);
        for(let i=startIdx;i<nums.length;i++){
            path.push(nums[i]);
            backtrack(path, i+1);
            path.pop();
        }
    }
    backtrack([], 0);
    return result;
};

/**
Here the number of combination is 2^n so for 3 element it will be 8 and so on
TC: O(n*2^n) Exponential 
SC: O(n*2^n)
 */