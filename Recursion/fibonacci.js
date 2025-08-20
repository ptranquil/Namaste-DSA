/**
 * 509. Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/description/
 */

/** Using Recursion */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0) return 0;
    if(n == 1) return 1;
    return fib(n-1)+fib(n-2)
};

/**

It will return the nth Fibonacci number
The time complexity is O(2^n) which is exponential
because for each call to fib(n), it makes two additional calls to fib(n-1) and fib(n-2).
This results in a binary tree of calls, leading to an exponential growth in the number of calls.
Thus, the time complexity is O(2^n).
The space complexity is O(n) due to the recursion stack

Here the exponential time complexity is bad which can be improved using dynamic programming.
*/

console.log(fib(4)); // Output: 3

// Using Iteration
var fibIterative = function(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    
    let a = 0, b = 1, c;
    for(let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibIterative(4)); // Output: 3
