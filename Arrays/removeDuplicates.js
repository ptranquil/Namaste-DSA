/**

Write a function to remove duplicates from a sorted Array
LC: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

 */

function removeDuplicates(nums) {
    let N = nums.length;
    let x=0;
    let y=1;

    while(y<N){
        if(nums[x] != nums[y]){
            x++;
            nums[x] = nums[y];
        }
        y++;
    }
    return x+1;
};

let nums = [1,1,1,2,2,3]
console.log(removeDuplicates(nums))