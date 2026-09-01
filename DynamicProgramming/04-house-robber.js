/**
 * 198. House Robber
 * https://leetcode.com/problems/house-robber/description/
 */


var rob = function(nums) {
    let n = nums.length;
    if(n === 1) return nums[0]
    let dp = [nums[0], Math.max(nums[0], nums[1])]
    for(let i=2;i<n;i++){
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
    }
    return dp[n-1];
};

