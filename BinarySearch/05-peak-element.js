/**
 * 162. Find Peak Element
 * https://leetcode.com/problems/find-peak-element/
 */

// O nlogn
var findPeakElement = function(arr) {
    let l =0;
    let r = arr.length-1;
    while(l<r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m+1] > arr[m]){
            l= m+1;
        } else {
            r=m;
        }
    }
    return l;
};


// O(n)
var findPeakElement = function(nums) {
    let N=nums.length;
    if(N==1) return 0;
    let peak = 0;
    if(nums[1]>nums[0]){
        peak = 1;
    }
    for(let i=1;i<N-1;i++){
        if((nums[i] > nums[i-1]) && (nums[i] > nums[i+1])){
            peak = i;
        }
    }

    // check for last elemant
    if(nums[N-1] > nums[N-2]){
        return N-1;
    }
    return peak;
};

let nums = [1,2,1,3,5,6,4];
console.log(findPeakElement(nums));