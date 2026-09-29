/**
 * 38. Count and Say
 * https://leetcode.com/problems/count-and-say/
 */
var countAndSay = function(n) {
    let curr = '1';
    for(let i=2;i<=n;i++){
        let count = 1;
        let rle = "";
        for(let j=1;j<=curr.length;j++){
            if(curr[j] === curr[j-1]){
                count++
            } else {
                rle = rle + count + curr[j-1];
                count = 1;
            }
        }
        curr = rle;
    }
    return curr;
};