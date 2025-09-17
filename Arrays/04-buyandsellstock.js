/**
Buy & Sell Stock - I
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

function maxProfit(prices) {
    let minSoFar = 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - prices[minSoFar]
        if (profit <= 0) {
            profit = 0
        }

        if (prices[i] < prices[minSoFar]) {
            minSoFar = i;
        }

        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit;
};

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))