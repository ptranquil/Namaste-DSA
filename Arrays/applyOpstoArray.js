/**
 * LC: 2460. Apply Operations to an Array
 * Similar to moveZeros.js
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    // applying the operations
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] == nums[i+1]){
            nums[i] = nums[i]*2;
            nums[i+1] = 0;
        }
    }


    //shifting zeros
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0){
            if(i != x){
                [nums[x], nums[i]] = [nums[i], nums[x]]
            }
            x++
        }
    }
    return nums;
};

nums= [1,2,2,1,1,0]
applyOperations(nums)