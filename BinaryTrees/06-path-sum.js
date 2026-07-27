/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// TOP DOWN RECURSIVE APPROACH
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let flag = false;
    function traversal(curr, sum){
        // ensuring it to be a leaf node
        if(!curr.left && !curr.right){
            if(sum === targetSum) return flag = true;
        }
        curr.left && traversal(curr.left, sum+curr.left.val);
        curr.right && traversal(curr.right, sum+curr.right.val);
    }
    traversal(root, root.val);
    return flag;
};


// BOTTOM UP RECURSIVE APPROACH
var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    if(!root.left && !root.right){
        return root.val == targetSum;
    }

    let leftPath = hasPathSum(root.left, targetSum - root.val);
    let rightPath = hasPathSum(root.right, targetSum - root.val);

    return leftPath || rightPath;
};