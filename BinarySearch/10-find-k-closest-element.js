/**
 * 658. Find K Closest Elements
 * https://leetcode.com/problems/find-k-closest-elements/description/
 */

// Using 2 pointer approach
// Approach: Start from starting and ending index and keeps on shrinking, TC: O(n-k)
var findClosestElements = function(arr, k, x) {
    // Implementing using sliding window algorithm
    let left = 0;
    let right = arr.length-1;

    while(right-left+1>k){
        let l = Math.abs(arr[left]-x);
        let r = Math.abs(arr[right]-x);

        if(l > r){
            left++;
        } else {
            right--;
        }
    }
    return arr.slice(left, right+1)
};


// Using binary seach
/**
 * Approach
 * Find the mid
 * Compare the mid and mid+k element by subtracting x and if the next element s greater then the closest is on the left
 */
var findClosestElements = function(arr, k, x) {
    let  l = 0;
    let r  = arr.length-1;
    while(l<r){
        let mid = Math.floor( l + (r-l)/2);
       

        if((arr[mid+k] - x) < (x-arr[mid])){
            l = mid+1
        }else{
            r= mid;
        }
    }
    return arr.slice(l ,l+k)
};

arr = [1,2,3,4,5]
k = 4
x = 3
console.log(findClosestElements(arr, k, x))