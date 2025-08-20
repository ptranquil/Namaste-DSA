/**
Recursive function to find the sum of n natural numbers
 */

function sumofn(n){
    if(n<=1){
        return 1;
    }
    return n + sumofn(--n)
}
console.log(sumofn(10))

