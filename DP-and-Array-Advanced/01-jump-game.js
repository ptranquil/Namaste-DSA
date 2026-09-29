/**
 * 55. Jump Game
 * https://leetcode.com/problems/jump-game/description/
 */

// Recurrsive Approach with DP - Object (158 / 178 testcases passed)
// without DP : 81 / 178 testcases passed
// O(N^2), O(N)
var canJump = function(nums) {
    let end = nums.length - 1;
    let dp = {};
    function dfs(start) {
        // end case
        if(start === end) return true;

        if(dp[start] != undefined) return dp[start];

        let ans = false;
        for(let i=1;i<=nums[start];i++){
            ans = ans || dfs(start+i)
        }
        dp[start] = ans;
        return ans;
    }
    return dfs(0);
};

// Recurrsive Approach with DP - Array (177 / 178 testcases passed)
// O(N^2), O(N)
var canJump = function(nums) {
    let end = nums.length - 1;
    let dp = new Array(nums.length).fill(-1);
    function dfs(start) {
        // end case
        if(start === end) return true;

        if(dp[start] != -1) return dp[start];

        let ans = false;
        for(let i=1;i<=nums[start];i++){
            ans = ans || dfs(start+i)
        }
        dp[start] = ans;
        return ans;
    }
    return dfs(0);
};

// GREEDY APPROACH - O(N), O(1)
var canJump = function (nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if(i > maxReach) return false;
        maxReach = Math.max(maxReach, (i + nums[i]))
    }
    return true;
};