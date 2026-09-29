/**
 * 263. Ugly Number
 * https://leetcode.com/problems/ugly-number/
 */

// O(logn) O(1)
var isUgly = function(n) {
    if(n<=0) return false;
    if(n === 1) return true;

    while(n>1){
        if(n%2 === 0){
            n = n/2
        } else if (n%3 === 0){
            n = n/3;
        } else if (n%5 === 0){
            n = n/5;
        } else{
            return false;
        } 
    }
    return true;
};

// Another same approach but a way better code
var isUgly = function (n) {
    if (n <= 0) return false;

    for (const factor of [2, 3, 5]) {
        while (n % factor === 0) {
            n = n / factor;
        }
    }

    return n === 1;
};