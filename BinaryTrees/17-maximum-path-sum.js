/**
 * 124. Binary Tree Maximum Path Sum
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */

var maxPathSum = function(root) {
    let maxPathSum = -Infinity;
    function findMaxPathSum(curr){
        if(!curr) return 0;
        let leftPathSum = Math.max(0, findMaxPathSum(curr.left));
        let rightPathSum = Math.max(0, findMaxPathSum(curr.right));

        let currPathSum = curr.val + leftPathSum + rightPathSum;
        maxPathSum = Math.max(currPathSum, maxPathSum);

        return curr.val + Math.max(leftPathSum, rightPathSum);
    }
    findMaxPathSum(root);
    return maxPathSum;
};