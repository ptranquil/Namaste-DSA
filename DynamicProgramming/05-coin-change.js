/**
 * 322. Coin Change
 * https://leetcode.com/problems/coin-change/
 */

// Recursive Approach - Recursion
var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = {}
    function backtrack(remAmount){
        if(remAmount === 0){
            return 0;
        }
        if(remAmount < 0) return -1;
        if(dp[remAmount]){
            return dp[remAmount]
        }
        let minCoins = Infinity;
        for(let i=0;i<n;i++){
            let res = backtrack(remAmount - coins[i]);
            if(res != -1){
                minCoins = Math.min(minCoins, 1 + res);
            }
        }
        dp[remAmount] = minCoins === Infinity ? -1 : minCoins;
        return minCoins === Infinity ? -1 : minCoins;
    }
    return backtrack(amount);
};

// Interative Approach - Tabulation
var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for(let rem=1;rem<=amount;rem++){
        for(let j=0;j<n;j++){
            let remainingAmount = rem - coins[j];
            if(remainingAmount >= 0){
                dp[rem] = Math.min(dp[rem], 1 + dp[remainingAmount])
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};