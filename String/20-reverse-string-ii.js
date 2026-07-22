/**
 * 541. Reverse String II
 * https://leetcode.com/problems/reverse-string-ii/description/
 */

var reverseStr = function(s, k) {
    s = s.split('');
    let jump = 2*k;
    for(let i=0;i<s.length;i+=jump){
        let left = i;
        // let right = i+k-1; // can work but it can go out of bound if there is one charatcer left and k>1
        let right = Math.min(i+k-1, s.length-1);
        while(left <= right){
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }
    return s.join('');
};

s = "abcdefg", k = 2
console.log(reverseStr(s,k))


/**
Complexity:
    Let n = s.length.
    Time: O(n): Every character is reversed at most once.
    Space: O(n): Because split('') creates a character array.
 */