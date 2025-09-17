/**
Write a function to move all the zeros to the end
LC: https://leetcode.com/problems/move-zeroes/

 */
function moveZeroes(nums) {
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0){
            [nums[i], nums[x]] = [nums[x], nums[i]]
            x=x+1;
        }
    }
    console.log(nums)
};

// let nums=[0,1,0,3,12]
// let nums = [1,0,1]
let nums = [0,0,0,0]
moveZeroes(nums)

/**
1. Simpler 2 pointe r (1 for traversal and other to keep track on the zeros)
2. swap (zeros, nonzeros)
 */