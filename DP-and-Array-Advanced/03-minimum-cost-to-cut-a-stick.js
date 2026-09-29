/**
 * 1547. Minimum Cost to Cut a Stick
 * https://leetcode.com/problems/minimum-cost-to-cut-a-stick/description/
 */

// O(n^3) and o(n^2)
var minCost = function(n, cuts) {
    let dp = new Map();
    function dfs(start, end){
        if(start >= end) return 0;

        let key = start+"_"+end;
        if(dp.has(key)) return dp.get(key);

        let minCost = Infinity;
        for(let c of cuts){
            if(c > start && c < end){
                let currCost = end - start +
                    dfs(start, c) +
                    dfs(c, end);
                minCost = Math.min(minCost, currCost)
            }
        }
        let cost = minCost === Infinity ? 0 : minCost;
        dp.set(key, cost);
        return cost;
    }
    return dfs(0,n);
};