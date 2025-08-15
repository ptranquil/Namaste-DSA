function palindrome(num) {
    let rev = 0;
    let n = num;
    while (n > 0) {
        rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10)
    }

    if(rev == num){
        return true;
    }
    return false;
}

n = 123
console.log(palindrome(n))
