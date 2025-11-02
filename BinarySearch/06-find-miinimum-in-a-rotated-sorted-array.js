/**
 * 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 */

var findMin = function(a) {
    let N = a.length;
    let l = 0;
    let r = N-1;

    while(l<=r){

        // edge case for sorted array
        if(a[l] <= a[r]){
            // array is already sorted
            return a[l];
        }

        let m = l + Math.floor((r - l)/2);

        // The starting point
        if(a[m] < a[m-1]){
            return a[m];
        }

        // check which part is sorted
        if(a[l] > a[m]){
            r = m-1;
        } else {
            l = m+1;
        }
    }
};