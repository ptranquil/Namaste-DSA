/**
 * 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/description/
 * Kadane's Algorithm
 */

var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let n = nums.length;
    let currSum = 0;
    for(let i=0;i<n;i++){
        currSum+= nums[i];
        if(maxSum < currSum) maxSum = currSum;
        if(currSum <= 0) currSum = 0;
    }
    return maxSum;
};