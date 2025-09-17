/**
 * 27. Remove Element
 * https://leetcode.com/problems/remove-element/description/
 */

var removeElement = function(nums, val) {
    j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != val){
            nums[j] = nums[i];
            j++
        }
    }
    return j;
};

nums = [3,2,2,3];
val = 3
console.log(removeElement(nums, val))
