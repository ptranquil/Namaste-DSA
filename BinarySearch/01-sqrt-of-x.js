/**
 * 69. Sqrt(x)
 * https://leetcode.com/problems/sqrtx/description/
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x;
    let left = 2;
    let right = Math.floor(x/2);
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        // let mid = Math.floor(left+((right-left)/2));
        let val = mid**2;
        if(val == x){
            return Math.floor(mid);
        } else if(val>x){
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return right;
};

let x =30;
console.log(mySqrt(30))