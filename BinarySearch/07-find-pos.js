/**
 * 34. Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 */

var searchRange = function(a, t) {
    let N = a.length;
    let l=0;
    let r=N-1;
    let ans = [-1,-1]
    while(l<r){
        let m = l + Math.floor((r-l)/2);
        if(a[m]<t) l=m+1 
        else r=m
    }
    if(a[l] == t) ans[0] = l;

    l=0;
    r=N-1;
    while(l<r){
        // very important difference between 2 binary search
        let m = l + Math.ceil((r-l)/2);
        if(a[m]>t) r=m-1
        else l=m;
    }
    if(a[l] == t) ans[1] = l;
    return ans;
};

let nums = [5,7,7,8,8,10]
let target = 8
console.log(searchRange(nums, target));

/**
 * Approach
 * 1. Using 2 binary search
 * First: To find the element at the left most side
 * Second: To find the element at the right most side
 * 
 * For the second binary search, we used Math.ceil() because it rounds to the away 1.2 => 2
 * and for the second binary search we have to find the right most, Math.floor will rounds to the closest. 1.2 => 1
 */