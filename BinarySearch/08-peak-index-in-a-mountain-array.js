/**
 * 852. Peak Index in a Mountain Array
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
 */

var peakIndexInMountainArray = function(arr) {
    let N = arr.length;
    let l=0;
    let r=N-1;
    while(l<r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m+1] > arr[m]){
            l=m+1;
        } else {
            r=m
        }
    }
    return l;
};

arr = [0,1,0]
console.log(peakIndexInMountainArray(arr))