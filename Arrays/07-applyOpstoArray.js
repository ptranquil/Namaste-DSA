/**
 * LC: 2460. Apply Operations to an Array
 * Similar to moveZeros.js
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * TC: O(2N)
 * SC: O(1)
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

// Another optimize approach
// TC: O(N) + O(count of zeros)
var applyOperations = function(nums) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == nums[i+1]){
            nums[i] = nums[i] * 2;
            nums[i+1] = 0;
        }

        if( nums[i] != 0){
            nums[count] = nums[i];
            count++
        }
    }

    while(count < nums.length){
        nums[count] = 0;
        count++
    }

    return nums;
}