/**
 * 139. Word Break
 * https://leetcode.com/problems/word-break/description/
 */

var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dp = {};
    function canBreak(remStr){
        if(remStr === '') return true;
        if(remStr in dp){
            return dp[remStr];
        }
        let res = false;
        for(let i=0;i<remStr.length;i++){
            let subStr = remStr.substring(0,i+1);
            let leftStr = remStr.substring(i+1);
            if(wordDict.includes(subStr) && canBreak(leftStr)){
                res = true;
            }
        }
        dp[remStr] = res;
        return dp[remStr];
    }
    return canBreak(s)
};