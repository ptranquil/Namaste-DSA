/**
 * https://leetcode.com/problems/power-of-three/
 */

// using Mathematical approach

var isPowerOfThree = function(n) {
    for(let i=0;i<20;i++){
        if(Math.pow(3,i) == n){
            return true
        }
    }
    return false;
};
n = 27
console.log(isPowerOfThree(n))




var isPowerOfFour = function(n) {
    if(n<1) return false;
    for(let i=0;i<20;i++){
        if(4**i == n){
            return true
        }
    }
    return false;
};