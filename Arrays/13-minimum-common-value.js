/**
 * 2540. Minimum Common Value
 * https://leetcode.com/problems/minimum-common-value/description/
 */

var getCommon = function(nums1, nums2) {
    let i=0;
    let j=0;
    let min = Infinity;
    let oflag = false;

    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            i++
        } else if(nums1[i]>nums2[j]){
            j++
        } else {
            min = Math.min(min, nums1[i]);
            oflag = true;
            i++;
            j++;
        }
    }
    if(oflag){
        return min;
    }
    return -1;
};

nums1 = [1,2,3], nums2 = [2,4]
console.log(commonChars(nums1,nums2))