/**
 * LC: https://leetcode.com/problems/power-of-two/description/
 * 231. Power of Two
 */

function powerof2(n){
    /** Using Recusion */
    if(n === 1) return true
    if(n<1 || n%2 != 0) return false
    return isPowerOfTwo(n/2)
};
let n=3
console.log(powerof2(n))

/**
Tips:
    1. For every number which is a power of 2, then remainder will always be 1;
    2. Odd number can never be power of 2
    3. if the remainder is less than 1 it cannot be power of 2
 */

/** Using normal mathematical approach */

function isPowerOfTwo(n) {
    if(n<1) return false
    for (let i=0;i<=31;i++){
        if(2**i == n){
            return true
        }
    }
    return false
};

/**
 * Here the requirement is to do the operation without using loop or recursion
 */

function pof2(n){
    if(n < 1 ) return false;
    let val = Math.log2(n)
    return Number.isInteger(val)
}