/**
 * 887. Super Egg Drop
 * https://leetcode.com/problems/super-egg-drop/description/
 * https://leetcode.com/problems/super-egg-drop/solutions/8540420/super-egg-drop-dynamic-programming-by-mo-0pux/
 */

var superEggDrop = function (k, n) {
    let dp = new Array(k + 1).fill(0);
    let moves = 0;
    while (dp[k] < n) {
        moves++;
        for (let i = k; i >= 1; i--) {
            dp[i] = 1 + dp[i] + dp[i - 1]
        }
    }
    return moves;
};