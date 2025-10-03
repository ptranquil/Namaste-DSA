/**
 * 179. Largest Number
 * https://leetcode.com/problems/largest-number/description/
 */

var largestNumber = function (nums) {
   // Convert to strings
    nums = nums.map(String);

    // Sort using custom comparator
    // nums.sort((a, b) => (b + a) - (a + b)); // This will also work
    // Below logic good for understanding
    nums.sort((a, b) => {
        if (a + b > b + a) return -1; // a before b
        if (a + b < b + a) return 1;  // b before a
        return 0;
    });

    // Join result
    let result = nums.join('');

    // Remove leading zeros (if all zeros, return "0")
    return result[0] === '0' ? '0' : result;
}