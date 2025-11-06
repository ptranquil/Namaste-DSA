/**
 * 540. Single Element in a Sorted Array
 * https://leetcode.com/problems/single-element-in-a-sorted-array/description/
 */

var singleNonDuplicate = function(a) {
    let N = a.length;
    if(N==1) return a[0];
    let l =0;
    let r=N-1;
    let rightL = 0;
    let leftL = 0;
    while(l<=r){
        let m = l + Math.floor((r-l)/2);

        // check if pair exist on left
        if(a[m] == a[m-1]){
            leftCount = m-1-l;
            if(leftCount %2 === 1){
                r = m-2
            } else {
                l=m+1
            }
        }

        // check if pair exist on right
        else if(a[m] == a[m+1]){
            leftCount = m-l;
            if(leftCount %2 === 1){
                r = m-1;
            } else {
                l=m+2;
            }
        } else {
            return a[m];
        }
    }
};

let nums = [1,1,2,3,3,4,4,8,8]
console.log(singleNonDuplicate(nums));