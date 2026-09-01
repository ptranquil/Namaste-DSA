/**
 * 91. Decode Ways
 * https://leetcode.com/problems/decode-ways/description/
 */

var numDecodings = function(s) {
    let dp = {}
    function fn(remStr){
        if(remStr === '') return 1
        if(remStr === '0') return 0

        let n = remStr.length;
        if(remStr in dp){
            return dp[remStr]
        }

        let oneDigit = remStr.substring(n-1);
        let twoDigit = remStr.substring(n-2);
        let ans = 0;
        if(oneDigit != 0){
            ans+= fn(remStr.substr(0,n-1))
        }

        if(twoDigit >= 10 && twoDigit <= 26){
            ans+= fn(remStr.substr(0, n-2))
        }
        dp[remStr] = ans;
        return ans;
    }
    return fn(s);
};