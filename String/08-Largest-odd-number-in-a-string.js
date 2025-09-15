/**
 * 1903. Largest Odd Number in String
 * https://leetcode.com/problems/largest-odd-number-in-string/description/ 
 */

function largestOddNumber(num) {
    let N = num.length-1;
    while(N>=0){
        if(Number(num[N])%2 ==1){
            return num.substring(0,N+1)
        }
        N--
    }
    return ""
};

num = "52"
console.log(largestOddNumber(num))
