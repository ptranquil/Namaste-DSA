/**
 * 746. Min Cost Climbing Stairs
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 */

var minCostClimbingStairs = function (cost) {
    let dp = [0,0];
    let n = cost.length;
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];
};


var minCostClimbingStairs = function (cost) {
    let dp = {};
    function backtrack(n){
        if(n === 0 || n==1) return 0;
        if(dp[n] === undefined){
            dp[n] = Math.min(backtrack(n-1) + cost[n-1], backtrack(n-2) + cost[n-2])
        }
        return dp[n];
    }
    let n = cost.length;
    return backtrack(n)
};