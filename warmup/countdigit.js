// write a function that returns the count of a digit in a number

function countDigit(num){
    // return num.toString().length

    // To handle if the number is 0
    if(num == 0) return 1;

    // handling negative numbers
    num= Math.abs(num)

    let count=0
    while(num>0){
        count+=1
        num = Math.floor(num/10)
    }
    return count;
}
let num = -123
console.log(`The total number of digit in ${num} is : `,countDigit(num));

/**
CORNER CASES
1. What if n = 0?
2. What if the number is negative? Ideally we should change it to positive before starting the loop
 */