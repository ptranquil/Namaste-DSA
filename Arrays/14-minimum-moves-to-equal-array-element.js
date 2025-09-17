/**
 * 462. Minimum Moves to Equal Array Elements II
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/
 */

// TC: O(n + nlogn) SC: O(1)
var minMoves2 = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let mid = nums[Math.floor(nums.length/2)];
    let op = 0;
    for(let ele of nums){
        op = op + Math.abs(mid-ele)
    }
    return op;
};

nums = [1,2,3]
console.log(minMoves2(nums))