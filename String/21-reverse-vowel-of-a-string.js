/**
 * 345. Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 */

var reverseVowels = function(s) {
    s = s.split('');

    let left = 0;
    let right = s.length-1;
    while(left<right){
        if(!s[left].match(/[aeiouAEIOU]/)){
            left++;
            continue;
        }
        
        if(!s[right].match(/[aeiouAEIOU]/)){
            right--;
            continue;
        }

        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s.join('');
};


// another approach using set
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');

    const vowel = new Set(['a','e','i','o','u','A','E','I','O','U'])

    let left = 0;
    let right = s.length-1;
    while(left<right){
        if(!vowel.has(s[left])){
            left++;
            continue;
        }
        
        if(!vowel.has(s[right])){
            right--;
            continue;
        }

        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s.join('');
};

/**
Complexity
    Time: O(n): Each pointer moves at most n positions.
    Space: O(n): Because split() creates a character array. The Set contains only 10 characters, so it's O(1).

Why use a Set instead of regex?
    vowels.has(ch) is an average O(1) lookup.
    It's easy to read and clearly expresses the intent.
    It avoids regex parsing on each iteration.
 */