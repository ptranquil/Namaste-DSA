/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 */

var twoSum = function(numbers, target) {
    let l =0;
    let r = numbers.length-1;
    while(l<r){
        let sum = numbers[l] + numbers[r];
        if(sum == target){
            return [l+1,r+1]
        } else if (sum > target){
            r--
        } else {
            l++
        }
    }
};

nums = [2,7,11,15];
target = 9
console.log(twoSum(nums, target))