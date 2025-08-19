/**
Merge Sorted Array
LC: https://leetcode.com/problems/merge-sorted-array/
 */

/**
 * Approach 1: By creating a copy of nums1 till m and then using 2 pointer approach to put the values in nums1 and 
 * return it in place
 * 
 * TC: O(m+n)
 * SC: O(m)
 * */

function merge (nums1, m, nums2, n) {
    let n1Copy = nums1.slice(0,m);
    let p1=0;
    let p2=0;

    // looping through m+n to put all the element inside nums1
    for(let i=0;i<m+n;i++){

        /**
         * p2 >=n : To make sure that if the p2 pointer to the nums2 goes out of bound then also we keep putting the values 
         * from the n1Copy p1
         * 
         * p1<m: To make sure that we only put value from n1Copy if it stays inside the bound else put from nums2
         */
        if( p2 >= n || (n1Copy[p1] < nums2[p2] && p1 < m) ){
            nums1[i] = n1Copy[p1];
            p1++;

        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1
};

nums1 = [1,2,3,0,0,0]
nums2=[2,5,6]
m=3
n=3

// console.log(merge(nums1, m,nums2, n))



/**
 * Approach 2: Reverse the logic putting the greater element first at the end and handle the corner cases of both pointer
 * if they go out of bound
 */

function merge2 (nums1, m, nums2, n) {
    let p1=m-1;
    let p2=n-1;

    for(let i=m+n-1;i>=0;i--){

        if(p2<0 ||nums1[p1] > nums2[p2] && p1 > 0){
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    console.log(nums1)
}

nums1 = [1,2,3,0,0,0]
nums2=[2,5,6]
m=3
n=3

console.log(merge2(nums1, m,nums2, n))