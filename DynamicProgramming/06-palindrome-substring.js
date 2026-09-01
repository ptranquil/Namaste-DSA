/**
 * 
 */
// Brute FORCE: normal approach will result in Memory Error
var countSubstrings = function(s) {
    let n = s.length;
    let res = 0;
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            console.log(s.slice(i,j+1))
            if(isPalindrome(s.slice(i,j+1))){
                res++;
            }
        }
    }
    return res;
};

function isPalindrome(s){
    let i = 0;
    let j = s.length-1;
    while(i<j){
        if(s[i] != s[j]) return false;
        i++;
        j--
    }
    return true;
}




// My Approach with a little modification: starting from n-1
var countSubstrings = function (s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    let res = 0;
    for (let i = n-1; i >=0; i--) {
        for (let j = i; j < n; j++) {
            // Single character
            if (i === j) {
                dp[i][j] = true;
                res++;
                continue;
            }
            // 2 character
            if ((j - i === 1) && (s[i] === s[j])) {
                dp[i][j] = true
                res++;
                continue;
            }
            // more than 2 character
            if ((s[i] === s[j]) && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                res++;
            }
        }
    }
    return res;
}


// Another same approach
var countSubstrings = function (s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    let res = 0;
    for(let i=0;i<n;i++){
        dp[i][i] = true;
        res++;
        if(i<n-1 && s[i] == s[i+1]){
            dp[i][i+1] = true;
            res++
        }
    }
    for (let len = 3; len<=n; len++) {
        for (let i = 0; i <= n-len; i++) {
            let j = i + len -1;
            if ((s[i] === s[j]) && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                res++;
            }
        }
    }
    return res;
}