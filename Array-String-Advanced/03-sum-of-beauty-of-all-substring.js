/**
 * 1781. Sum of Beauty of All Substrings
 * https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/
 */
var beautySum = function (s) {
    let beauty = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let freq = new Array(26).fill(0);
        for (let j = i; j < n; j++) {
            freq[s.charCodeAt(j) - 97]++;
            let max = 0;
            let min = Infinity;
            for(let count of freq){
                if(count > 0){
                    max = Math.max(count, max);
                    min = Math.min(count, min);
                }
            }
            beauty += (max - min)
        }
    }
    return beauty;
};
