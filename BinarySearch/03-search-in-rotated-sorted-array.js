/**
 * 33. Search in Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

var search = function(arr, target) {
    let left = 0;
    let right = arr.length-1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);

        // check for mid
        if(arr[mid] == target){
            return mid;
        }

        // check for left sorted
        if(arr[left] <= arr[mid]){
            if(target < arr[mid] && target>= arr[left]){
                right = mid-1;
            } else {
                left=mid+1;
            }
        }
        else {
            //check for right sorted
            if(target > arr[mid] && target <= arr[right]){
                left=mid+1;
            } else {
                right = mid-1;
            }
        }
    }
    return -1;
};

arr = [4,5,6,7,0,1,2]
target = 0
console.log(search(arr, target));

/**
 * Approach:
 * 1. Search for the mid
 * 2. If the mid is not the target element, then check which side is sorted by comparing mid with left
 * 3. If left is sorted and the element is not present in left (can be checked by comparing the mid and left elemen, if it exits then the element is present in left side else in right)
 * 4. Repeat the process or return -1
 */