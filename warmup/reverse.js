/** 
 * Write a function to reverse a number
 * LC: https://leetcode.com/problems/reverse-integer/description/
 */

function reverse (x) {
    let rev = 0;
    let num = x;
    x=Math.abs(x);

    while(x>0){
        let rem=x%10;
        rev = rev*10+rem;
        x=Math.floor(x/10)
    }

    /** 
     * Handling leetcode corner case statement here
     * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. 
     * */
    let limit = Math.pow(2,31);
    if(rev < -limit || rev > limit) return 0;

    return num<0 ? -rev : rev;
};

let num=12345
console.log(`The reverse of ${num} is ${reverse(num)}`)