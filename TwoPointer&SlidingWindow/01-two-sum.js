/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/description/
 */

var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let diff = target-nums[i];
        if(map.has(diff)){
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
};

nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))