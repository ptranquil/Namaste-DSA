/**
 * 
 * 2215. Find the Difference of Two Arrays
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

Complexity

Time Complexity: O(n + m)
(iterate through both arrays once, set operations O(1) average).

Space Complexity: O(n + m)
(for storing sets).
 */

var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let res = [[],[]];
    for(let n of set1){
        if(!set2.has(n)){
            res[0].push(n)
        }
    }

    for(let n of set2){
        if(!set1.has(n)){
            res[1].push(n)
        }
    }
    return res;
};

nums1 = [1,2,3], nums2 = [2,4,6]
console.log(findDifference(nums1, nums2))
// Output: [[1,3],[4,6]]