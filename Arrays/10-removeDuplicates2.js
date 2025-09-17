/**

Write a function to remove duplicates from a sorted Array II
LC: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
Catch: Need to put atmost 2 duplicate number together
 */

function removeDuplicatesII(nums){
    let N=nums.length;

    // To handle the corner case as the array only have 2 element
    // The max count will be 2
    if(N == 2) return 2;

    let j=1
    for(let i=1;i<N;i++){
        if(nums[i] == nums[i-1]){
            count++
        } else {
            count=1
        }

        if(count <=2){
            nums[j] = nums[i];
            j++
        }
    }
    return j;
}
let nums = [1,1,1,2,2,3]
console.log(removeDuplicatesII(nums))
/**
CORNER CASE:
    1. What if the array have 2 element
 */