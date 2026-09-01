var maxProfit = function(prices) {
    let n = prices.length;
    let profit = 0;
    for(let i=0;i<n;i++){
        if(i>0 && prices[i-1] < prices[i]){
            profit+= prices[i] - prices[i-1];
        }
    }
    return profit;
};