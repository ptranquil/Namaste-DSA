/**
 * 45. Jump Game II
 * https://leetcode.com/problems/jump-game-ii/description/
 */
// DP - Array (ON^2, O(N))
var jump = function (nums) {
    let end = nums.length - 1;
    let dp = new Array(end + 1).fill(-1)

    function dfs(start) {
        if (start === end) return 0;
        if (dp[start] != -1) return dp[start];

        let minJump = Infinity;
        for (let i = 1; i <= nums[start] && start + i <= end; i++) {
            minJump = Math.min(minJump, 1 + dfs(start + i))
        }

        dp[start] = minJump;
        return minJump;
    }

    return dfs(0);
};

// GREEDY
var jump = function (nums) {
    let maxReach = 0;
    let jumps = 0;
    let currEnd = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        if (i == currEnd) {
            currEnd = maxReach;
            jumps++
        }
    }
    return jumps;
};