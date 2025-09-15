/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/description/
 */

var isPalindrome = function(s) {
    s=s.toLowerCase();
    let filteredString = "";
    let rev =''
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString+=s[i];
            rev = s[i]+rev; // creating reverse in the same loop and then comparing at end (filteredString === rev) SC: O(n)
        }
    }
    /** With the reverse logic TC: O(n) SC: O(n) */
    // const reversed = filteredString.split('').reverse().join('');
    // return filteredString === reversed;

    /** With the 2 pointer approach, SC: O(1)*/
    let left = 0;
    let right = filteredString.length-1;
    while(left < right){
        if(filteredString[left] != filteredString[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));


// another approach using 2 pointer and regex in one go
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length-1;
    while(left < right){
        if(!s[left].match(/[0-9a-z]/)){
            left++;
            continue;
        }

        if(!s[right].match(/[0-9a-z]/)){
            right--;
            continue;
        }
        if(s[left] != s[right]){
            return false;
        }
        left++;
        right--
    }
    return true;
};