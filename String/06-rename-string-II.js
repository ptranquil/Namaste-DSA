/**
 * 541. Reverse String II
 * https://leetcode.com/problems/reverse-string-ii/description/
 * */

// TC: O(n)
var reverseStr = function(s, k) {
    s = s.split('');
    let jumps = 2*k;
    for(let i=0;i<s.length-1;i=i+jumps){
        let left = i;
        let right = i+jumps-1-k > s.length ? s.length : i+jumps-1-k;
        while(left<right){
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
    return s.join('');
};

s = "abcdefg", k = 2
console.log(reverseStr(s,k))