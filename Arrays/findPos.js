/**
 * Wtite a function to Find First and Last Position of Element in Sorted Array
 * LC: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 */

function searchRange (nums, target) {
    // Handling the edge case
    if(nums.length == 1 && nums[0] == target) return [0,0]
    let iDone = false;
    let jDone = false;
    let i=0;
    let j=nums.length-1;
    let startPos = -1;
    let endPos = -1;

    while(i<=j){
        if((nums[i] == target) && !iDone){
            startPos=i;
            iDone=true
        }
        if(!iDone){
            i++
        }

        if((nums[j] == target) && !jDone){
            endPos=j
            jDone=true;
        } 
        
        if(!jDone){
            j--;
        }

        if(iDone && jDone){
            break;
        }
    }

    return [startPos, endPos];
};
let nums = [5,7,7,8,8,10]
let target = 8
console.log(searchRange(nums, target))

/**
CORNER CASE
    1. Handle if the length is 2
    2. The same element can be the target for both start and end pos so
        The while condiiton should be (i<=j)
 */