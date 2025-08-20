/**
 * LC: 
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * TC: O(logn) as every time the array is getting divided into hald
 * SC O(1)
 * 
 * Why O(logn)
 * because for every loop. is n + n/2 + n/4 + n/8 + ... until it equals to 1
 * so is n/2^x = 1
 * n=2^x
 * so to find the value of x
 *  x = log2(n)
 */
var binarySearch = function(nums, target) {
    let left=0;
    let right=nums.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] == target){
            return mid
        } else if (nums[mid] < target){
            left=mid+1
        } else {
            right=mid-1
        }
    }
    return -1
};

let nums = [-1,0,3,5,9,12]
let target = 9
console.log(binarySearch(nums, target))

/**
CORNER CASE:
    while(left<=right){}
    It has to be <= so that it will handle an array if it have 1 num or 1 num left to check in both cases
 */