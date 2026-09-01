/**
 * 77. Combinations
 * https://leetcode.com/problems/combinations/description/
 */

var combine = function(n, k) {
    let res = [];
    function backtrack(path, startIdx){
        if(path.length === k){
            res.push([...path]);
            return;
        }
        for(let i=startIdx;i<=n;i++){
            path.push(i);
            backtrack(path, i+1);
            path.pop();
        }
    }
    backtrack([], 1);
    return res;
};

/**
The formula to calculate the no of combination can be made for a range and combination inputs is 
        n! / (k! * (n-k)!)) - no of combination
So t Time Complexity :  O(k * no of combination)

Space Complexity is O(k) (//! if we dont consider the result array , why k, the recurssion stack space as the tree height can go max k)
if we consider the result then 
    SC: O(k * no of combination)
 */

// Another approach
var permute = function(nums) {
    let n = nums.length;
    let used = new Array(n).fill(false);
    let res = [];
    function backtrack(path){
        if(path.length === n){
            res.push([...path]);
            return;
        }
        for(let i=0;i<n;i++){

            if(used[i]) continue;
            
            path.push(nums[i]);
            used[i] = true;

            backtrack(path);
            path.pop();

            used[i] = false;

        }
    }
    backtrack([]);
    return res;
};